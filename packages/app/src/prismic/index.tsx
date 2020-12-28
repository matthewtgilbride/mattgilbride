import React, { createElement, FC, ReactNode } from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import {
  Elements,
  HTMLSerializer,
  RichText,
  RichTextBlock,
} from 'prismic-reactjs';
import { DefaultClient } from 'prismic-javascript/types/client';
import Link from 'next/link';

export type PrismicDocument = Document;

const prismicUrl = 'https://mattgilbride.cdn.prismic.io/api/v2';
// TODO: clean up URL and build a strongly typed client
export const PrismicClient = (req?: unknown): DefaultClient =>
  Prismic.client(prismicUrl, { req });

export const linkResolver = (doc: PrismicDocument): string => {
  switch (doc.type) {
    case 'about':
      return '/about';
    case 'blog':
      return '/blog';
    case 'contact':
      return '/contact';
    case 'resume':
      return '/resume';
    case 'blog_post':
      return `/blog/${doc.uid}`;
    default:
      return '/';
  }
};

export const htmlSerializer: HTMLSerializer<ReactNode> = (
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

export type PrismicLink =
  | ({
      link_type: 'Document';
    } & PrismicDocument)
  | {
      link_type: 'Web';
      url: string;
    };

export interface PrismicImage {
  alt: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
}
