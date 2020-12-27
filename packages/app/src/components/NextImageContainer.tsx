import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CSSObject } from '@emotion/core';

export const NextImageContainer: FC<ImageProps & { cssProp: CSSObject }> = ({
  cssProp,
  src,
  ...rest
}) => {
  // TODO: use a custom image loader, until then strip off the url params added by prismic
  // https://github.com/vercel/next.js/issues/18606
  const srcNoParams = src.substring(0, src.lastIndexOf('?'));
  return (
    <div css={cssProp}>
      <Image src={srcNoParams} {...rest} />
    </div>
  );
};
