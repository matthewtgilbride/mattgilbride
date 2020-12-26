import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { CSSObject } from '@emotion/core';

export const NextImageContainer: FC<ImageProps & { cssProp: CSSObject }> = ({
  cssProp,
  ...rest
}) => (
  <div css={cssProp}>
    <Image {...rest} />
  </div>
);
