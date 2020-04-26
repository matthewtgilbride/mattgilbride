import React, { FC } from 'react';
import { Global } from '@emotion/core';
import { Link } from 'gatsby';
import { makeColor, makeResponsiveObject } from '../utils/design';

const styleNav = {
  div: {
    width: '100%',
  },
  ul: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    listStyle: 'none',
    paddingInlineStart: 0,
    li: {
      a: {
        textDecoration: 'none',
        color: makeColor('light'),
      },
    },
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      div: {
        display: 'none',
      },
      ul: {
        flexDirection: 'row' as const,
      },
    },
  }),
};

const styleMenuRight = makeResponsiveObject({
  beginAt: 'tabletPortrait',
  style: {
    marginLeft: 'auto',
  },
});

const styleContent = {
  top: 0,
};

export const Layout: FC = ({ children }) => (
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          backgroundColor: makeColor('gray', -2),
          color: makeColor('light'),
        },
      }}
    />
    <nav css={styleNav}>
      <div>
        <button>menu</button>
      </div>
      <ul>
        <li>
          <Link to="/">Matt Gilbride</Link>
        </li>
        <li css={styleMenuRight}>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <div css={styleContent}>{children}</div>
  </>
);
