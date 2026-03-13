import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import { NavLink } from './NavLink';

export const NavItems: FC<{ childCss: CSSObject }> = ({ childCss }) => (
  <nav>
    <ul css={childCss}>
      <li>
        <NavLink href="/resume">Resume</NavLink>
      </li>
      <li>
        <NavLink href="/blog">Blog</NavLink>
      </li>
    </ul>
  </nav>
);
