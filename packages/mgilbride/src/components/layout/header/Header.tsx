import React, { FC, useCallback, useState } from 'react';
import { CSSObject } from '@emotion/core';
import {
  makeResponsiveObject,
  makeSize,
  makeSpace,
} from '../../../utils/design';
import { MenuButton } from './MenuButton';
import { NavLink } from '../NavLink';
import { beginAt } from '../Layout.styles';

const styleHeader: CSSObject = {
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
};

const styleMenu: CSSObject = {
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

const styleMenuItems: CSSObject = {
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
    <header css={styleHeader}>
      <div css={styleMenu}>
        <MenuButton open={open} onClick={toggleOpen} />
        <NavLink href="/">Matt Gilbride</NavLink>
      </div>
      <ul css={styleMenuItems}>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};
