import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeResponsiveObject,
  makeSpace,
  palette,
} from '../../../../utils/design';
import { NavItems } from './NavItems';
import { headerHeight } from '../Header';
import { beginAt } from '../../Layout.styles';

const styleContainer: CSSObject = {
  position: 'fixed',
  top: headerHeight,
  left: 0,
  right: 0,
  margin: makeSpace('sm'),
  backgroundColor: palette.primary(),
  color: palette.contrast(),
  // TODO: this is reusable between nav and main content area
  borderRadius: makeSpace('xxs'),
  boxShadow: `0 0 8px 2px ${palette.gray(-50)}`,
  ...makeResponsiveObject({
    beginAt,
    style: {
      display: 'none',
    },
  }),
};

const styleNavItems: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  margin: makeSpace('xs'),
  padding: makeSpace('md'),
  li: {
    padding: `${makeSpace('md')} 0`,
  },
};

export const NavMenu: FC = () => (
  <div css={styleContainer}>
    <NavItems childCss={styleNavItems} />
  </div>
);
