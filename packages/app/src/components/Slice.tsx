import { RichTextBlock } from 'prismic-reactjs';
import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { PrismicContent, PrismicImage } from '../prismic';
import { NextImageContainer } from './NextImageContainer';
import { makeResponsiveObject, makeSpace } from '../utils/design';

const styleNextImage: CSSObject = {
  maxWidth: '80vw',
  padding: `${makeSpace('sm')} 0`,
  margin: '0 auto',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: { maxWidth: '40vw' },
  }),
};

const styleGistContainer: CSSObject = {
  maxWidth: '80vw',
  margin: 'auto',
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
        };
      };
    };

export const Slice: FC<{ slice: SliceType }> = ({ slice }) => {
  if (slice.slice_type === 'text') {
    return <PrismicContent richText={slice.primary.text} />;
  }
  if (slice.slice_type === 'gist') {
    return (
      <div
        css={styleGistContainer}
        dangerouslySetInnerHTML={{ __html: slice.primary.url.html }}
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
