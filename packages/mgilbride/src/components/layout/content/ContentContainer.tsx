import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { headerHeight } from '../header/Header';
import { makeSpace, palette } from '../../../utils/design';

const styleContainer: CSSObject = {
  position: 'absolute',
  top: headerHeight,
  bottom: 0,
  left: 0,
  right: 0,
  margin: makeSpace('sm'),
  borderRadius: makeSpace('xxs'),
  boxShadow: `0 0 8px 2px ${palette.gray(-50)}`,
  overflowY: 'auto',
};

export const ContentContainer: FC = ({ children }) => (
  <div css={styleContainer}>{children}</div>
);
