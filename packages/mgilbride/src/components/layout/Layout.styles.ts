import { CSSObject } from '@emotion/core';
import {
  makeColor,
  makeResponsiveObject,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';

export const white = makeColor('light');
export const accent = makeColor('accent');
export const darkGray = makeColor('gray', -3);
export const primary = makeColor('primary', -2);

export const documentReset = {
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    background: `radial-gradient(circle, ${darkGray} 0%, ${darkGray} 95%, ${primary} 100%)`,
    color: white,
    // plagiarized from sarah drasner
    fontFamily:
      'Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;',
  },
  html: {
    height: '100%',
    width: '100%',
  },
  button: {
    ':focus': {
      outline: 'none',
    },
  },
};

export const styleContainer = (open: boolean): CSSObject => ({
  // resets
  position: 'absolute',
  overflow: 'hidden',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 'auto',
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
  // grid
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'min-content auto',
  gridTemplateAreas: `
    'menu home'   
    'main main'
  `,
  // defaults
  maxWidth: responsiveBreakpoints.desktop,
  a: {
    textDecoration: 'none',
    color: white,
    fontWeight: 500,
  },
  // home link
  '> a': {
    gridArea: 'home',
    justifySelf: 'flex-end',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    padding: makeSpace('xs'),
  },
  // menu
  '> button': {
    gridArea: 'menu',
    justifySelf: 'flex-start',
    alignSelf: 'flex-start',
    padding: `${makeSpace('xs')} 0`,
    backgroundColor: 'transparent',
    border: 'none',
    svg: {
      height: makeSpace('sm'),
    },
  },
  // main nav
  '> nav': {
    gridArea: 'main',
    display: open ? 'block' : 'none',
    ul: {
      margin: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
      li: {
        paddingTop: makeSpace('xs'),
        a: {
          textTransform: 'uppercase',
          color: white,
          padding: makeSpace('xs'),
        },
      },
    },
  },
  // content
  '> div': {
    gridArea: 'main',
    zIndex: open ? -1 : 'inherit',
    alignSelf: 'center',
    display: 'grid',
    height: '100%',
    overflowY: 'auto',
  },
  ...styleContainerTablet(),
});

function styleContainerTablet(): CSSObject {
  return makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      color: 'inherit',
      // home link
      '> a': {
        gridArea: 'menu',
        justifySelf: 'flex-start',
        alignSelf: 'flex-start',
        color: white,
      },
      // hamburger menu
      '> button': {
        display: 'none',
      },
      // main nav
      '> nav': {
        gridArea: 'home',
        display: 'block',
        justifySelf: 'flex-end',
        backgroundColor: 'inherit',
        padding: makeSpace('xs'),
        ul: {
          display: 'flex',
          li: {
            paddingTop: 'inherit',
            a: {
              color: white,
            },
          },
        },
      },
      // content
      '> div': {
        zIndex: 'inherit',
      },
    },
  });
}
