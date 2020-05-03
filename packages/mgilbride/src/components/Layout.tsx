import React, { FC, useCallback, useState } from 'react';
import { CSSObject, Global } from '@emotion/core';
import { Link } from 'gatsby';
import { makeColor, makeResponsiveObject } from '../utils/design';
import { Bars } from "./svg/Bars";
import { Close } from "./svg/Close";

const white = makeColor('light')
const accent = makeColor('accent', -1)
const primary = makeColor('primary')

const beginAt = 'tabletPortrait'

const styleContainer = (open: boolean): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  gridTemplateAreas: `
    'menu home'   
    'main main'
  `,
  backgroundColor: open ? accent : 'inherit',
  ...makeResponsiveObject({
    beginAt,
    style: {
      backgroundColor: 'inherit',
    }
  }),
  a: {
    textDecoration: 'none',
    color: white,
    padding: 8,
  },
  '> a': {
    gridArea: 'home',
    justifySelf: 'flex-end',
    alignSelf: 'center',
    ...makeResponsiveObject({
      beginAt,
      style: {
        gridArea: 'menu',
        justifySelf: 'inherit',
      }
    })
  },
  button: {
    gridArea: 'menu',
    justifySelf: 'flex-start',
    padding: "12px 0",
    svg: {
      height: 12
    },
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
    height: '100%',
    ul: {
      margin: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
      li: {
        paddingTop: 8,
      }
    },
    ...makeResponsiveObject({
      beginAt,
      style: {
        gridArea: 'home',
        display: 'block',
        justifySelf: 'flex-end',
        backgroundColor: 'inherit',
        padding: 8,
        ul: {
          display: 'flex',
          li: {
            paddingTop: 'inherit'
          }
        }
      }
    })
  },
  div: {
    gridArea: 'main',
    zIndex: open ? -1 : 'inherit',
    ...makeResponsiveObject({
      beginAt,
      style: {
        zIndex: 'inherit'
      }
    })
  },
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
        <button onClick={onOpen}>{open ? <Close color={white} /> : <Bars color={white} />}</button>
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
