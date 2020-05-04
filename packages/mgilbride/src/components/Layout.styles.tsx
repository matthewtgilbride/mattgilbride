import { CSSObject, keyframes } from '@emotion/core';
import { makeColor, makeResponsiveObject } from '../utils/design';

const white = makeColor('light');
const accent = makeColor('accent', -1);
const primary = makeColor('primary', 2);

const ease = (
  animation: ReturnType<typeof keyframes>,
  firstRender: boolean,
  seconds = 1,
): string => (firstRender ? 'none' : `${animation} ease ${seconds}s`);

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 100,
  },
});

const fadeDarkToAccent = keyframes({
  '0%': {
    color: white,
    backgroundColor: 'inherit',
  },
  '100%': {
    color: primary,
    backgroundColor: accent,
  },
});

const fadeAccentToDark = keyframes({
  '0%': {
    color: primary,
    backgroundColor: accent,
  },
  '100%': {
    color: white,
    backgroundColor: 'inherit',
  },
});

const fadeWhiteToPrimary = keyframes({
  '0%': {
    color: white,
  },
  '100%': {
    color: primary,
  },
});

const fadePrimaryToWhite = keyframes({
  '0%': {
    color: primary,
  },
  '100%': {
    color: white,
  },
});

const styleContainerTablet: CSSObject = makeResponsiveObject({
  beginAt: 'tabletPortrait',
  style: {
    backgroundColor: 'inherit',
    color: 'inherit',
    '> a': {
      gridArea: 'menu',
      justifySelf: 'flex-start',
      alignSelf: 'flex-start',
      color: white,
      animation: 'initial',
    },
    '> button': {
      display: 'none',
    },
    '> nav': {
      gridArea: 'home',
      display: 'block',
      justifySelf: 'flex-end',
      backgroundColor: 'inherit',
      animation: 'initial',
      padding: 8,
      ul: {
        display: 'flex',
        li: {
          paddingTop: 'inherit',
          a: {
            color: white,
            animation: 'initial',
          },
        },
      },
    },
    '> div': {
      zIndex: 'inherit',
    },
  },
});

export const styleContainer = (
  open: boolean,
  firstRender: boolean,
): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'min-content auto',
  gridTemplateAreas: `
    'menu home'   
    'main main'
  `,
  height: '100vh',
  width: '100vw',
  backgroundColor: open ? accent : 'inherit',
  animation: open
    ? ease(fadeDarkToAccent, firstRender)
    : ease(fadeAccentToDark, firstRender),
  a: {
    textDecoration: 'none',
    color: white,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  '> a': {
    gridArea: 'home',
    justifySelf: 'flex-end',
    alignSelf: 'flex-start',
    color: open ? primary : white,
    animation: open
      ? ease(fadeWhiteToPrimary, firstRender)
      : ease(fadePrimaryToWhite, firstRender),
    padding: 8,
  },
  '> button': {
    gridArea: 'menu',
    justifySelf: 'flex-start',
    alignSelf: 'flex-start',
    padding: '10px 0',
    svg: {
      height: 12,
      animation: ease(fadeIn, firstRender, 2),
      line: {
        stroke: open ? primary : white,
      },
      rect: {
        fill: open ? primary : white,
      },
    },
  },
  '> nav': {
    gridArea: 'main',
    display: open ? 'block' : 'none',
    animation: ease(fadeIn, firstRender),
    ul: {
      margin: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
      li: {
        paddingTop: 8,
        a: {
          color: open ? primary : white,
          animation: open
            ? ease(fadeWhiteToPrimary, firstRender)
            : ease(fadePrimaryToWhite, firstRender),
          padding: 8,
        },
      },
    },
  },
  '> div': {
    gridArea: 'main',
    zIndex: open ? -1 : 'inherit',
    '> *': {
      animation: open ? 'inherit' : ease(fadeIn, false),
    },
    alignSelf: 'center',
    overflowY: 'auto',
  },
  ...styleContainerTablet,
});
