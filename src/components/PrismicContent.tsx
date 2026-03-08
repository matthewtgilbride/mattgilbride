import React, { createElement, FC, ReactNode } from 'react';
import {
  Elements,
  HTMLSerializer,
  RichText,
  RichTextBlock,
} from 'prismic-reactjs';
import Link from 'next/link';

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

const htmlSerializer: HTMLSerializer<ReactNode> = (
  type,
  element,
  content,
  children,
  key,
) => {
  if (type === Elements.hyperlink && element.data.link_type === 'Document') {
    return createElement(
      Link,
      { key, href: linkResolver(element.data) },
      content,
    );
  }
  return null;
};

export const PrismicContent: FC<{ richText: RichTextBlock[] }> = ({
  richText,
}) => (
  <RichText
    render={richText}
    linkResolver={linkResolver}
    htmlSerializer={htmlSerializer}
  />
);
