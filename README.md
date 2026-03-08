# mattgilbride.com

Personal website and portfolio for Matt Gilbride.

## Architecture

The site is a statically exported Next.js app (Pages Router) hosted on AWS:

- **Next.js 14** with static export (`output: 'export'`) — generates plain
  HTML/CSS/JS in the `out/` directory
- **Emotion** for CSS-in-JS styling, with a theming system that supports
  multiple color schemes (Sixers, Barca)
- **S3** hosts the static files as a website
- **CloudFront** provides HTTPS, caching, and the CDN
- **Route53** maps `www.mattgilbride.com` to the CloudFront distribution
- **ACM** provides the SSL certificate (managed outside of CDK)

Content (blog posts, resume, about page) is stored as static JSON files in
`src/data/`, loaded at build time via `getStaticProps`.

```
mattgilbride/
├── src/
│   ├── components/     # React components (layout, resume, blog, SVGs)
│   ├── data/           # Static JSON content (blog posts, resume, etc.)
│   ├── design-system/  # Typography, spacing, color palette utilities
│   ├── pages/          # Next.js pages (home, about, blog, resume)
│   └── utils/          # Shared hooks and design helpers
├── public/             # Static assets (fonts, images, SVGs)
├── infrastructure/     # AWS CDK stack (S3, CloudFront, Route53)
└── out/                # Build output (generated, not committed)
```

## Prerequisites

- Node.js 22+
- Yarn 1.x
- AWS CLI (configured with credentials, for deploy)
- A `CERTIFICATE_ARN` environment variable pointing to an ACM certificate
  in us-east-1 (required for infrastructure deployment)

## Development

```sh
yarn install      # install dependencies
yarn dev          # start dev server at http://localhost:3000
```

## Build and Deploy

```sh
yarn build        # static export to out/
yarn deploy       # sync out/ to the S3 bucket
```

The deploy command runs `aws s3 sync out s3://www.mattgilbride.com` with a
24-hour cache-control header. After deploying, you may need to invalidate
the CloudFront cache for changes to appear immediately.

## Infrastructure

AWS CDK code lives in `infrastructure/`. It provisions the S3 bucket,
CloudFront distribution, and Route53 alias record.

```sh
cd infrastructure
yarn install
yarn cdk synth    # preview the CloudFormation template
yarn cdk deploy   # deploy to AWS
```

The `CERTIFICATE_ARN` environment variable must be set before running
`cdk synth` or `cdk deploy`. This is typically configured via a `.envrc`
file at the repo root (not committed).
