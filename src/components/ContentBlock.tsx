import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import Gist from 'react-gist';
import { RichText, ContentImage, RichTextBlock } from './RichText';
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

type ContentBlockType =
  | {
      slice_type: 'text';
      primary: {
        text: RichTextBlock[];
      };
    }
  | {
      slice_type: 'image';
      primary: {
        image: ContentImage;
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

export type { ContentBlockType };

export const ContentBlock: FC<{ block: ContentBlockType }> = ({ block }) => {
  if (block.slice_type === 'text') {
    return <RichText blocks={block.primary.text} />;
  }
  if (block.slice_type === 'gist') {
    const parts = block.primary.url.embed_url.split('/');
    const id = parts.slice().reverse()[0];
    return <Gist id={id} />;
  }
  if (block.slice_type === 'code') {
    return (
      <Code
        language={block.primary.language}
        block={block.primary.block.map((r) => r.text).join('\n')}
      />
    );
  }
  return (
    <NextImageContainer
      cssProp={styleNextImage}
      src={block.primary.image.url}
      alt={block.primary.image.alt}
      width={block.primary.image.dimensions.width}
      height={block.primary.image.dimensions.height}
    />
  );
};
