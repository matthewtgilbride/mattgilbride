/**
 * Converts blog post JSON files (Prismic format) to MDX files.
 * Usage: node scripts/json-to-mdx.js
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data', 'blog-posts');
const outDir = path.join(__dirname, '..', 'src', 'content', 'blog');

function resolveLink(data) {
  if (!data) return '/';
  if (data.link_type === 'Web') return data.url;
  switch (data.type) {
    case 'about': return '/about';
    case 'blog': return '/blog';
    case 'resume': return '/resume';
    case 'blog_post': return `/blog/${data.uid}`;
    case 'contact': return '/';
    default: return '/';
  }
}

function renderSpansToMarkdown(text, spans) {
  if (!spans || spans.length === 0) return text;

  // Sort spans by start position, then by end position (longer spans first for nesting)
  const sorted = [...spans].sort((a, b) => a.start - b.start || b.end - a.end);

  // Group overlapping spans at the same position
  const groups = new Map();
  for (const span of sorted) {
    const key = `${span.start}-${span.end}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(span);
  }

  // Build result character by character with markers
  const markers = []; // { pos, type: 'open'|'close', span }
  for (const [key, spanGroup] of groups) {
    const [startStr, endStr] = key.split('-');
    const start = parseInt(startStr);
    const end = parseInt(endStr);
    markers.push({ pos: start, type: 'open', spans: spanGroup });
    markers.push({ pos: end, type: 'close', spans: spanGroup });
  }
  markers.sort((a, b) => a.pos - b.pos || (a.type === 'close' ? -1 : 1));

  let result = '';
  let pos = 0;

  // Process unique span groups by position
  const uniqueGroups = [...groups.entries()].sort((a, b) => {
    const [aStart] = a[0].split('-').map(Number);
    const [bStart] = b[0].split('-').map(Number);
    return aStart - bStart;
  });

  for (const [key, spanGroup] of uniqueGroups) {
    const [startStr, endStr] = key.split('-');
    const start = parseInt(startStr);
    const end = parseInt(endStr);

    // Add text before this span group
    if (start > pos) {
      result += text.slice(pos, start);
    }

    const content = text.slice(start, end);
    const hasStrong = spanGroup.some(s => s.type === 'strong');
    const hasEm = spanGroup.some(s => s.type === 'em');
    const hyperlink = spanGroup.find(s => s.type === 'hyperlink');

    let wrapped = content;
    if (hasStrong) wrapped = `**${wrapped}**`;
    if (hasEm) wrapped = `*${wrapped}*`;
    if (hyperlink) {
      const url = resolveLink(hyperlink.data);
      wrapped = `[${wrapped}](${url})`;
    }

    result += wrapped;
    pos = end;
  }

  if (pos < text.length) {
    result += text.slice(pos);
  }

  return result;
}

function blockToMarkdown(block) {
  const content = renderSpansToMarkdown(block.text, block.spans);

  switch (block.type) {
    case 'heading1': return `# ${content}`;
    case 'heading2': return `## ${content}`;
    case 'heading3': return `### ${content}`;
    case 'heading4': return `#### ${content}`;
    case 'heading5': return `##### ${content}`;
    case 'heading6': return `###### ${content}`;
    case 'list-item': return `- ${content}`;
    case 'o-list-item': return `1. ${content}`;
    case 'paragraph':
    default: return content;
  }
}

function sliceToMarkdown(slice) {
  if (slice.slice_type === 'text') {
    const blocks = slice.primary.text;
    const lines = [];
    let inList = false;

    for (const block of blocks) {
      const isList = block.type === 'list-item' || block.type === 'o-list-item';

      if (inList && !isList) {
        // End of list, add blank line
        lines.push('');
        inList = false;
      }
      if (!inList && isList) {
        inList = true;
      }

      const md = blockToMarkdown(block);
      if (md === '' && !isList) {
        // Skip empty paragraphs
        continue;
      }
      lines.push(md);
      if (!isList) {
        lines.push(''); // Blank line after non-list blocks
      }
    }

    return lines.join('\n').trim();
  }

  if (slice.slice_type === 'image') {
    const img = slice.primary.image;
    const alt = img.alt || '';
    return `<ContentImage src="${img.url}" alt="${alt}" width={${img.dimensions.width}} height={${img.dimensions.height}} />`;
  }

  if (slice.slice_type === 'gist') {
    const parts = slice.primary.url.embed_url.split('/');
    const id = parts.slice().reverse()[0];
    return `<GistEmbed id="${id}" />`;
  }

  if (slice.slice_type === 'code') {
    const language = slice.primary.language;
    const code = slice.primary.block.map(b => b.text).join('\n');
    return '```' + language + '\n' + code + '\n```';
  }

  return '';
}

function convertPost(jsonFile) {
  const raw = fs.readFileSync(jsonFile, 'utf-8');
  const post = JSON.parse(raw);

  const title = post.title[0].text;
  const uid = post.uid;

  const parts = [
    `export const metadata = {`,
    `  title: ${JSON.stringify(title)},`,
    `  uid: ${JSON.stringify(uid)},`,
    `};`,
    '',
    `# ${title}`,
    '',
  ];

  for (const slice of post.body) {
    parts.push(sliceToMarkdown(slice));
    parts.push('');
  }

  return parts.join('\n').trim() + '\n';
}

// Main
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const jsonPath = path.join(dataDir, file);
  const mdxPath = path.join(outDir, file.replace('.json', '.mdx'));

  console.log(`Converting ${file} -> ${path.basename(mdxPath)}`);
  const mdx = convertPost(jsonPath);
  fs.writeFileSync(mdxPath, mdx);
}

console.log('Done!');
