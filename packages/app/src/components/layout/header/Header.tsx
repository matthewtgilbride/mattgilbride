import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import {
  makeResponsiveObject,
  makeSize,
  makeSpace,
} from '../../../utils/design';
import { beginAt } from '../Layout.styles';
import { NavItems } from '../NavItems';
import { NavButton } from './NavButton';
import { HomeLink } from './HomeLink';
import { usePalette } from '../../../utils/usePalette';

export const headerHeight = makeSize('xxl');

const styleHeader = (palette: Palette, open: boolean): CSSObject => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 1000,
  top: 0,
  left: 0,
  right: 0,
  height: headerHeight,
  paddingLeft: makeSpace('sm'),
  paddingRight: makeSpace('sm'),
  backgroundColor: open ? palette.primary() : palette.contrast(),
});

const styleNav: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  ...makeResponsiveObject({
    beginAt,
    style: {
      width: 'unset',
    },
  }),
  button: {
    ...makeResponsiveObject({
      beginAt,
      style: {
        display: 'none',
      },
    }),
  },
};

const styleNavItems: CSSObject = {
  display: 'none',
  ...makeResponsiveObject({
    beginAt,
    style: {
      li: {
        paddingLeft: makeSpace('xxl'),
        alignSelf: 'center',
      },
      display: 'flex',
    },
  }),
};

export interface HeaderProps {
  open: boolean;
  toggleOpen: () => void;
}

export const Header: FC<HeaderProps> = ({ open, toggleOpen }) => {
  const { palette } = usePalette();
  return (
    <header css={styleHeader(palette, open)}>
      <div css={styleNav}>
        <NavButton open={open} onClick={toggleOpen} />
        <HomeLink open={open} href="/">
          Matt Gilbride
        </HomeLink>
      </div>
      <NavItems childCss={styleNavItems} />
    </header>
  );
};
