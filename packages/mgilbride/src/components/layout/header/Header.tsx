import React, { FC, useCallback, useState } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeResponsiveObject,
  makeSize,
  makeSpace,
  palette,
} from '../../../utils/design';
import { beginAt } from '../Layout.styles';
import { NavItems } from './nav/NavItems';
import { NavButton } from './nav/NavButton';
import { HomeLink } from './nav/HomeLink';

const styleHeader = (open: boolean): CSSObject => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: makeSize('xxl'),
  paddingLeft: makeSpace('sm'),
  paddingRight: makeSpace('sm'),
  backgroundColor: open ? palette.primary() : 'unset',
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
      },
      display: 'flex',
    },
  }),
};

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback((): void => setOpen(!open), [open]);
  return (
    <header css={styleHeader(open)}>
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
