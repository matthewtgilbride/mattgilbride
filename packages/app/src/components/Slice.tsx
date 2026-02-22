import { RichTextBlock } from 'prismic-reactjs';
import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Gist from 'react-gist';
import { PrismicContent, PrismicImage } from '../prismic';
import { NextImageContainer } from './NextImageContainer';
import { makeResponsiveObject, makeSpace } from '../utils/design';
import { Code } from './Code';

const styleNextImage: CSSObject = {
  maxWidth: '80vw',
  padding: `${makeSpace('sm')} 0`,
  margin: '0 auto',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: { maxWidth: '40vw' },
  }),
};

export type SliceType =
  | {
      slice_type: 'text';
      primary: {
        text: RichTextBlock[];
      };
    }
  | {
      slice_type: 'image';
      primary: {
        image: PrismicImage;
      };
    }
  | {
      slice_type: 'gist';
      primary: {
        url: {
          html: string;
          type: string;
          embed_url: string;
          provider_name: string;
        };
      };
    }
  | {
      slice_type: 'code';
      primary: {
        language: string;
        block: RichTextBlock[];
      };
    };

export const Slice: FC<{ slice: SliceType }> = ({ slice }) => {
  if (slice.slice_type === 'text') {
    return <PrismicContent richText={slice.primary.text} />;
  }
  if (slice.slice_type === 'gist') {
    const parts = slice.primary.url.embed_url.split('/');
    const id = parts.slice().reverse()[0];
    return <Gist id={id} />;
  }
  if (slice.slice_type === 'code') {
    return (
      <Code
        language={slice.primary.language}
        block={slice.primary.block.map((r) => r.text).join('\n')}
      />
    );
  }
  return (
    <NextImageContainer
      cssProp={styleNextImage}
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      width={slice.primary.image.dimensions.width}
      height={slice.primary.image.dimensions.height}
    />
  );
};
