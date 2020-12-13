import React, { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/core';
import { headerHeight } from '../header/Header';
import { makeSpace, makeSize, palette } from '../../../utils/design';

const styleContainer: CSSObject = {
  position: 'absolute',
  top: headerHeight,
  bottom: 0,
  left: 0,
  right: 0,
  margin: makeSpace('sm'),
  marginTop: makeSpace('xxs'),
  borderRadius: makeSpace('xxs'),
  boxShadow: `0 0 8px 2px ${palette.text(-50)}`,
};

const styleContent = (hasFooter: boolean): CSSObject => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: hasFooter ? headerHeight : 0,
  overflowY: 'auto',
});

const styleFooter: CSSObject = {
  position: 'absolute',
  height: makeSize('xxl'),
  bottom: 0,
  left: 0,
  right: 0,
};

export const ContentContainer: FC<{ footer?: ReactNode }> = ({
  children,
  footer,
}) => (
  <div css={styleContainer}>
    <div role="main" css={styleContent(!!footer)}>
      {children}
    </div>
    {footer && <footer css={styleFooter}>{footer}</footer>}
  </div>
);
