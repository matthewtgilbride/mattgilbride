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
  if (doc.type === 'about') {
    return '/about';
  }
  return '/';
};

export const PrismicContent: FC<{ richText: RichTextBlock[] }> = ({
  richText,
}) => <RichText render={richText} linkResolver={linkResolver} />;
