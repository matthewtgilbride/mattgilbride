import React, { FC } from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { DefaultClient } from 'prismic-javascript/types/client';

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

export const PrismicContent: FC<{ richText: RichTextBlock[] }> = ({
  richText,
}) => <RichText render={richText} linkResolver={linkResolver} />;

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
}
