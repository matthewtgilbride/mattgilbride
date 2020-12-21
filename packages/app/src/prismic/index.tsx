import React, { FC } from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import { RichTextBlock, RichText } from 'prismic-reactjs';

export type PrismicDocument = Document;

// TODO: clean up URL and build a strogly typed client
export const client = Prismic.client(
  'https://mattgilbride.cdn.prismic.io/api/v2',
);

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
