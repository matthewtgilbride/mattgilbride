import React, { FC, useCallback, useState } from 'react';
import { CSSObject, Global } from '@emotion/core';
import { Link } from 'gatsby';
import { makeColor, makeResponsiveObject } from '../utils/design';

const beginAt = 'tabletPortrait'
const styleContainer = (open: boolean): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  gridTemplateAreas: `
    'menu home'   
    'main main'
  `,
  a: {
    textDecoration: 'none',
    color: makeColor('light'),
  },
  '> a': {
    gridArea: 'home',
    justifySelf: 'flex-end',
    ...makeResponsiveObject({
      beginAt,
      style: {
        gridArea: 'menu',
        justifySelf: 'inherit'
      }
    })
  },
  button: {
    gridArea: 'menu',
    ...makeResponsiveObject({
      beginAt,
      style: {
        display: 'none'
      }
    })
  },
  nav: {
    gridArea: 'main',
    display: open ? 'block' : 'none',
    ul: {
      margin: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
    },
    ...makeResponsiveObject({
      beginAt,
      style: {
        gridArea: 'home',
        display: 'block',
        justifySelf: 'flex-end',
        ul: {
          display: 'flex'
        }
      }
    })
  },
  div: {
    gridArea: 'main'
  }
})

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
      <div css={styleContainer(open)}>
        <button onClick={onOpen}>menu</button>
        <Link to="/">Matt Gilbride</Link>
        <nav>
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
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
};
