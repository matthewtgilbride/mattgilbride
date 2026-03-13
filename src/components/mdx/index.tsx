import React, { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import Gist from 'react-gist';
import { NextImageContainer } from '../NextImageContainer';
import { Code } from '../Code';
import { makeResponsiveObject, makeSpace } from '../../utils/design';

const styleContentImage: CSSObject = {
  maxWidth: '80vw',
  padding: `${makeSpace('sm')} 0`,
  margin: '0 auto',
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: { maxWidth: '40vw' },
  }),
};

export const ContentImage: FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => (
  <NextImageContainer
    cssProp={styleContentImage}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);

export const GistEmbed: FC<{ id: string }> = ({ id }) => <Gist id={id} />;

export const CodeBlock: FC<{ language: string; children: ReactNode }> = ({
  language,
  children,
}) => <Code language={language} block={String(children)} />;
