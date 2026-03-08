import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

export interface RichTextBlock {
  type: string;
  text: string;
  spans: RichTextSpan[];
}

export interface RichTextSpan {
  start: number;
  end: number;
  type: string;
  data?: PrismicLink & Record<string, unknown>;
}

export type PrismicLink = {
  link_type: string;
  type?: string;
  uid?: string;
  url?: string;
  [key: string]: unknown;
};

export interface PrismicImage {
  alt: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
}

const linkResolver = (doc: { type: string; uid?: string }): string => {
  switch (doc.type) {
    case 'about':
      return '/about';
    case 'blog':
      return '/blog';
    case 'resume':
      return '/resume';
    case 'blog_post':
      return `/blog/${doc.uid}`;
    default:
      return '/';
  }
};

function renderSpans(text: string, spans: RichTextSpan[]): ReactNode {
  if (!spans || spans.length === 0) return text;

  const result: ReactNode[] = [];
  let pos = 0;

  const sorted = [...spans].sort((a, b) => a.start - b.start);

  for (const span of sorted) {
    if (span.start > pos) {
      result.push(text.slice(pos, span.start));
    }

    const content = text.slice(span.start, span.end);

    if (span.type === 'hyperlink' && span.data) {
      if (span.data.link_type === 'Document') {
        result.push(
          <Link key={span.start} href={linkResolver(span.data as { type: string; uid?: string })}>
            {content}
          </Link>,
        );
      } else {
        result.push(
          <a key={span.start} href={span.data.url}>
            {content}
          </a>,
        );
      }
    } else if (span.type === 'strong') {
      result.push(<strong key={span.start}>{content}</strong>);
    } else if (span.type === 'em') {
      result.push(<em key={span.start}>{content}</em>);
    } else {
      result.push(content);
    }

    pos = span.end;
  }

  if (pos < text.length) {
    result.push(text.slice(pos));
  }

  return result.length === 1 ? result[0] : result;
}

function renderBlock(block: RichTextBlock, index: number): ReactNode {
  const children = renderSpans(block.text, block.spans);

  switch (block.type) {
    case 'heading1':
      return <h1 key={index}>{children}</h1>;
    case 'heading2':
      return <h2 key={index}>{children}</h2>;
    case 'heading3':
      return <h3 key={index}>{children}</h3>;
    case 'heading4':
      return <h4 key={index}>{children}</h4>;
    case 'heading5':
      return <h5 key={index}>{children}</h5>;
    case 'heading6':
      return <h6 key={index}>{children}</h6>;
    case 'list-item':
      return <li key={index}>{children}</li>;
    case 'o-list-item':
      return <li key={index}>{children}</li>;
    case 'paragraph':
    default:
      return <p key={index}>{children}</p>;
  }
}

function groupListItems(blocks: RichTextBlock[]): ReactNode[] {
  const result: ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === 'list-item') {
      const items: ReactNode[] = [];
      while (i < blocks.length && blocks[i].type === 'list-item') {
        items.push(renderBlock(blocks[i], i));
        i++;
      }
      result.push(<ul key={`ul-${i}`}>{items}</ul>);
    } else if (block.type === 'o-list-item') {
      const items: ReactNode[] = [];
      while (i < blocks.length && blocks[i].type === 'o-list-item') {
        items.push(renderBlock(blocks[i], i));
        i++;
      }
      result.push(<ol key={`ol-${i}`}>{items}</ol>);
    } else {
      result.push(renderBlock(block, i));
      i++;
    }
  }

  return result;
}

export const PrismicContent: FC<{ richText: RichTextBlock[] }> = ({
  richText,
}) => <>{groupListItems(richText)}</>;
