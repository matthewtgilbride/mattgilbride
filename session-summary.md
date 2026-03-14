# Modernizing My Personal Site with Claude Code: A Session Summary

This document captures the full scope of a multi-hour pairing session between me (Matt Gilbride) and Claude Code (Anthropic's CLI agent). The goal was to modernize my personal website, mattgilbride.com — a Next.js static site hosted on AWS S3/CloudFront. What started as a content migration snowballed into a series of bug fixes, design changes, and infrastructure debugging.

---

## Table of Contents

1. [Starting Point](#starting-point)
2. [Phase 1: Content Migration (Prismic to MDX)](#phase-1-content-migration-prismic-to-mdx)
3. [Phase 2: Light/Dark Theme Overhaul](#phase-2-lightdark-theme-overhaul)
4. [Phase 3: Bug Fixes](#phase-3-bug-fixes)
5. [Phase 4: Content and Design Polish](#phase-4-content-and-design-polish)
6. [Phase 5: Mobile Responsive Fixes](#phase-5-mobile-responsive-fixes)
7. [Phase 6: Infrastructure Investigation](#phase-6-infrastructure-investigation)
8. [Recurring Challenges](#recurring-challenges)
9. [All Pull Requests](#all-pull-requests)
10. [Tech Stack Reference](#tech-stack-reference)

---

## Starting Point

The site was a Next.js 14 app with static export, originally pulling content from Prismic CMS via JSON files. It used Emotion CSS-in-JS, a custom color theme picker, and was deployed to S3 with CloudFront CDN. The codebase had accumulated some cruft: unused dependencies, a complex rich text renderer for Prismic content, and a theme system with multiple color palettes that didn't add much value.

Previous sessions (PRs #38-#39) had already flattened the monorepo structure and removed the `prismic-reactjs` dependency in favor of a custom renderer.

---

## Phase 1: Content Migration (Prismic to MDX)

**PRs: #41, #42, #43/#44, #45**

The biggest structural change: migrating all content from Prismic JSON files to MDX (Markdown with JSX components).

### What happened

1. **Downloaded Prismic CDN images locally** (PR #42) — Images were hosted on Prismic's CDN. Claude downloaded them all to `/public/images/` and updated references throughout the codebase. Also set up the MDX toolchain (`@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`).

2. **Converted all content to MDX and TypeScript** (PR #44) — This was the big one: 31 files changed, +1366/-5033 lines. Blog posts went from JSON with a custom rich text renderer to plain MDX files. The home, about, and resume pages were converted similarly. Custom MDX components were created for images (`ContentImage`), GitHub Gist embeds (`GistEmbed`), and code blocks (`CodeBlock`).

3. **Cleaned up the conversion script** (PR #45) — A one-time Node.js script that had been used to automate the JSON-to-MDX conversion was deleted (-202 lines).

### Key technical decisions

- Blog posts use Next.js `dynamic()` imports for code-splitting — each MDX file is loaded only when that post is viewed. Trade-off: new blog posts require adding a line to the dynamic import map in `[uid].tsx`.
- The old Prismic `RichText` renderer was completely deleted, replaced by MDX's native rendering.

---

## Phase 2: Light/Dark Theme Overhaul

**PR: #46**

### What changed

Replaced the custom multi-palette theme picker (which let users choose from several color schemes) with a simple system-aware light/dark theme. The site now follows the user's OS preference via `prefers-color-scheme`.

- **Removed**: Theme picker UI, multiple palette options, localStorage persistence
- **Added**: Two palettes (light and dark), automatic system detection
- **Result**: +51/-188 lines across 5 files — a net simplification

---

## Phase 3: Bug Fixes

### Code Block Styling Regression (PR #47)

**The bug**: After the MDX migration, code blocks in blog posts lost all their styling — no background color, no monospace font, no padding. They looked like plain text.

**Root cause**: The old Prismic `RichText` renderer had handled code block styling. When it was deleted during the MDX migration, those styles went with it. Additionally, the site uses a Meyer CSS reset (`Layout.styles.ts`) that strips all default browser styles from `pre` and `code` elements.

**The fix**: Added `pre`, `code`, and `pre code` styles directly to the blog post container's `CSSObject` in `[uid].tsx`. Dark theme code blocks with Catppuccin-inspired colors (#1e1e2e background, #cdd6f4 text), monospace font, proper padding and border radius. +25 lines.

### Broken Contact Link (PR #48)

**The bug**: The about page had a "reach out" link pointing to a contact form that no longer existed.

**The fix**: Removed the broken link. +1/-1 lines. Quick and clean.

---

## Phase 4: Content and Design Polish

**PR: #49**

This was the most iterative phase — multiple rounds of feedback and revision.

### What happened

1. **Rewrote home and about page content** — The existing copy was too casual ("Yo. I'm Matt.") and had too much personal detail. Went through several iterations:
   - First draft was too corporate/LinkedIn-ish
   - Adjusted to remove redundant name usage (page title already says "Matt Gilbride")
   - Changed greeting from "Yo" to "Hello." (cleaner, internationally friendly)
   - Updated employment info (4 years at Google on Android Platform Security)
   - Removed overly personal details (Barcelona story, bilingual claims)
   - Worked in mentions of programming language passion, productivity focus, racquet sports, dog, Sixers fandom

2. **Consolidated home and about into a single page** — The about page content was merged into the home page. The separate `/about` route was deleted, and the "About" nav link was removed. The about content had been in a separate MDX file loaded via `dynamic()` — this was simplified to inline JSX since there was no reason for the indirection.

   - Deleted: `src/pages/about/index.tsx`, `src/content/about.mdx`, `src/content/home.ts`
   - Modified: `src/pages/index.tsx`, `src/components/layout/NavItems.tsx`
   - Result: +36/-108 lines across 5 files

---

## Phase 5: Mobile Responsive Fixes

**PR: #50**

### The bug

Blog posts overflowed horizontally on all viewport sizes. Text was clipped on the right side, and a horizontal scrollbar appeared. This was most visible on the "Coming Back to Java" post (the longest, with many code blocks) but affected all posts.

### The investigation

This required significant debugging with browser automation:

1. **Initial theory**: Content (images, iframes, gists) was wider than the viewport on mobile. Added `maxWidth: '100%'` constraints and `overflow: hidden`. This helped but didn't fix the core issue.

2. **Deeper investigation via DOM inspection**: Used JavaScript execution through the browser extension to measure element widths. Found that the `article` element with `display: grid` and `justifyItems: 'center'` was computing `gridTemplateColumns: 848px` — wider than the article's own `maxWidth: 768px`.

3. **Root cause**: CSS Grid with `justifyItems: 'center'` allows grid items to size to their intrinsic width. The inner `div` containing the MDX content had an intrinsic width of 848px (driven by the widest content), and the grid happily let it be that wide, then centered it — causing overflow on both sides.

4. **Attempted fixes**:
   - `gridTemplateColumns: 'minmax(0, 1fr)'` — constrained the column track but `justifyItems: 'center'` still let the content overflow centered
   - `width: '100%'` — helped at narrow viewports but didn't solve the grid intrinsic sizing

5. **Final fix**: Removed `display: grid` entirely. The blog post container was only ever a single-column layout with one child — grid was unnecessary overhead. Replaced with simple block layout (`margin: 'auto'`, `width: '100%'`, `maxWidth: 768px`). Also kept the mobile-specific fixes (padding, box-sizing, overflow hidden, image/iframe/gist constraints).

### Result: +15/-4 lines, 1 file changed

---

## Phase 6: Infrastructure Investigation

### The bug

Navigating to `mattgilbride.com` (bare domain, no `www`) in an incognito tab shows an SSL certificate warning about an insecure connection.

### The investigation

Examined the AWS infrastructure:

- **ACM Certificate**: Only covers `*.mattgilbride.com` (wildcard). Wildcard certs do NOT cover the apex domain (`mattgilbride.com`).
- **CloudFront distribution**: Only has `www.mattgilbride.com` as an alias. No alias for the bare domain.
- **DNS (Route53)**: The apex domain `mattgilbride.com` resolves to S3 IP addresses directly (52.217.x, 16.15.x), while `www.mattgilbride.com` correctly resolves to CloudFront IPs (18.67.x).
- **CDK code** (`infrastructure/src/stack/static-site.construct.ts`): Only configures the `www` subdomain — one CloudFront alias, one Route53 A record.

### What needs to happen (not done yet)

1. Add `mattgilbride.com` as a SAN on the ACM certificate (managed in a separate repo)
2. Add `mattgilbride.com` to CloudFront `domainNames`
3. Add an apex A record in Route53 pointing to CloudFront

This was deferred since the certificate is managed in a different repository.

---

## Recurring Challenges

### Zombie Next.js Processes

The most persistent operational headache. When the Next.js dev server (`next dev`) is killed, the parent process dies but the child `next-server` process gets orphaned (reparented to PID 1) and keeps listening on the port. Over multiple restart cycles, zombie `next-server` processes accumulated on ports 3000-3005, preventing new dev servers from binding.

**Discovery**: `pkill -f "next dev"` only matches the parent. The child process name is `next-server (v14.2.35)`. Using `ss -tlnp` revealed multiple orphaned listeners that `lsof` didn't always show.

**Fix**: Always kill both: `pkill -f "next dev"; pkill -f "next-server"`. Verify with `ss -tlnp 'sport >= :3000 and sport <= :3005'`.

### CloudFront Cache Staleness

After every deploy (`aws s3 sync`), CloudFront serves stale content because of the 24-hour default TTL. Multiple times during the session, the deployed site showed "Application error: a client-side exception has occurred" — caused by CloudFront serving old HTML that referenced JS chunk filenames from a previous build that no longer existed in S3.

**Fix**: Run `aws cloudfront create-invalidation --distribution-id E2J8Z6CJW17ZDO --paths "/*"` after every deploy. The `yarn deploy` script only does `aws s3 sync` and does not handle invalidation.

### Browser Extension Connectivity

The Claude-in-Chrome browser extension had recurring issues:

- **Error page caching**: Once a tab hit a Chrome error page (`chrome-error://`), the extension got stuck on that frame and couldn't recover even after the user manually refreshed.
- **External site navigation**: Navigation to `mattgilbride.com` silently failed on new tabs — the navigate tool reported success but the tab stayed on `chrome://newtab/`. Navigating an existing tab (that already had a page loaded) to the external URL worked.
- **Extension disconnects**: The extension would disconnect when trying to interact with error pages, requiring the user to re-establish the connection.
- **Window resize limitations**: `resize_window` reported success at 375px but the actual viewport stayed at 616px due to Chrome tab group minimum width constraints.

### S3 Sync Without Delete

`aws s3 sync` (used by `yarn deploy`) doesn't delete files from S3 that no longer exist locally. This meant multiple build hash directories accumulated in S3 across deploys. Combined with CloudFront caching, this caused old HTML to reference nonexistent JS chunks.

---

## All Pull Requests

| PR | Title | Files | Lines |
|----|-------|-------|-------|
| [#42](https://github.com/matthewtgilbride/mattgilbride/pull/42) | Download Prismic CDN images and set up MDX | 20 | +1534/-27 |
| [#43](https://github.com/matthewtgilbride/mattgilbride/pull/43) | Convert all content from Prismic JSON to MDX and TypeScript | 31 | +1366/-5033 |
| [#44](https://github.com/matthewtgilbride/mattgilbride/pull/44) | Convert all content from Prismic JSON to MDX and TypeScript | 31 | +1366/-5033 |
| [#45](https://github.com/matthewtgilbride/mattgilbride/pull/45) | Remove one-time JSON-to-MDX conversion script | 1 | +0/-202 |
| [#46](https://github.com/matthewtgilbride/mattgilbride/pull/46) | Replace theme picker with light/dark system themes | 5 | +51/-188 |
| [#47](https://github.com/matthewtgilbride/mattgilbride/pull/47) | Fix code block styling in blog posts | 1 | +25/-0 |
| [#48](https://github.com/matthewtgilbride/mattgilbride/pull/48) | Remove broken contact link from about page | 1 | +1/-1 |
| [#49](https://github.com/matthewtgilbride/mattgilbride/pull/49) | Consolidate home and about into single landing page | 5 | +36/-108 |
| [#50](https://github.com/matthewtgilbride/mattgilbride/pull/50) | Fix blog post layout overflow on all viewports | 1 | +15/-4 |

**Note**: PRs #43 and #44 have identical stats because #43 was closed and recreated as #44.

---

## Tech Stack Reference

- **Framework**: Next.js 14 with static export (`output: 'export'`)
- **Styling**: Emotion CSS-in-JS (`@emotion/react`, `CSSObject`)
- **Content**: MDX with custom components (`ContentImage`, `GistEmbed`, `CodeBlock`)
- **Hosting**: AWS S3 (static files) + CloudFront (CDN/HTTPS)
- **Infrastructure**: AWS CDK (TypeScript)
- **DNS**: Route53
- **CI/CD**: Manual — `yarn build && yarn deploy` + CloudFront invalidation
- **Agent**: Claude Code (Opus 4.6) with Claude-in-Chrome browser extension
