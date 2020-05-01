import React, { FC, useCallback, useState } from 'react';
import { CSSObject, Global } from '@emotion/core';
import { Link } from 'gatsby';
import { makeColor, makeResponsiveObject } from '../utils/design';

const styleNav = (open: boolean): CSSObject => ({
  display: 'flex',
  flexDirection: 'column' as const,
  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  a: {
    textDecoration: 'none',
    color: makeColor('light'),
  },
  ul: {
    width: '100%',
    display: open ? 'flex' : 'none',
    margin: 0,
    flexDirection: 'column' as const,
    listStyle: 'none',
    paddingInlineStart: 0,
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between',
      div: {
        width: 'initial',
        button: {
          display: 'none',
        },
      },
      ul: {
        flexDirection: 'row' as const,
      },
    },
  }),
});

const styleContent = {
  top: 0,
};

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen((isOpen) => !isOpen), []);

  return (
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
      <nav css={styleNav(open)}>
        <div>
          <button onClick={onOpen}>menu</button>
          <Link to="/">Matt Gilbride</Link>
        </div>
        <div>
          <ul>
            <li>
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
        </div>
      </nav>
      <div css={styleContent}>{children}</div>
    </>
  );
};
