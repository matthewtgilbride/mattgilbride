import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { NavLink } from './NavLink';

export const NavItems: FC<{ childCss: CSSObject }> = ({ childCss }) => (
  <ul css={childCss}>
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
);
