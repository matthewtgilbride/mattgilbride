import React, { FC, useCallback, useState } from 'react';
import { CSSObject } from '@emotion/core';
import { makeResponsiveObject } from '../../../utils/design';
import { MenuButton } from './MenuButton';
import { NavLink } from '../NavLink';
import { beginAt } from '../Layout.styles';

const styleHeader: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
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
  a: {
    display: 'unset',
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
