import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { NavLink } from './NavLink';
import { ColorSchemePicker } from './ColorSchemePicker';

export const NavItems: FC<{ childCss: CSSObject }> = ({ childCss }) => (
  <nav>
    <ul css={childCss}>
      <li>
        <ColorSchemePicker />
      </li>
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
  </nav>
);
