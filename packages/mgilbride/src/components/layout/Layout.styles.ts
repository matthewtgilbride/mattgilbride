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

export const beginAt = 'tabletPortrait';

export const documentReset = {
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    backgroundColor: darkGray,
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
    padding: 0,
  },
};

export const styleContainer: CSSObject = {
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
  display: 'flex',
  flexDirection: 'column',
  // defaults
  maxWidth: responsiveBreakpoints.desktop,
  a: {
    textDecoration: 'none',
    color: white,
    fontWeight: 500,
    cursor: 'pointer',
  },
  ...makeResponsiveObject({
    beginAt,
    style: {
      color: 'inherit',
    },
  }),
};

export const styleHeaderContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  ...makeResponsiveObject({
    beginAt,
    style: {
      flexDirection: 'row',
    },
  }),
};

export const styleHeader: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: makeSpace('md'),
  // TODO: home link because we can't style LayoutLink directly for some reason
  '> a': {
    textTransform: 'uppercase',
    ...makeResponsiveObject({
      beginAt,
      style: {
        color: white,
      },
    }),
  },
};

export const styleNav = (open: boolean): CSSObject => ({
  display: open ? 'block' : 'none',
  padding: makeSpace('md'),
  marginTop: makeSpace('xs'),
  ul: {
    margin: 0,
    listStyle: 'none',
    paddingInlineStart: 0,
    li: {
      paddingBottom: makeSpace('lg'),
      a: {
        textTransform: 'uppercase',
        color: white,
        padding: makeSpace('xs'),
      },
    },
  },
  ...makeResponsiveObject({
    beginAt,
    style: {
      display: 'block',
      justifySelf: 'flex-end',
      marginTop: 'initial',
      backgroundColor: 'inherit',
      ul: {
        display: 'flex',
        li: {
          paddingBottom: 'inherit',
          a: {
            color: white,
          },
        },
      },
    },
  }),
});

export const styleMenuButton: CSSObject = {
  marginLeft: `-${makeSpace('xs')}`,
  backgroundColor: 'transparent',
  border: 'none',
  svg: {
    height: makeSpace('md'),
  },
  ...makeResponsiveObject({
    beginAt,
    style: {
      display: 'none',
    },
  }),
};

export const styleContent = (open: boolean): CSSObject => ({
  padding: makeSpace('sm'),
  margin: makeSpace('xs'),
  borderRadius: makeSpace('xxs'),
  boxShadow: `0 0 8px 2px ${makeColor('gray', -2)}`,
  zIndex: open ? -1 : 'inherit',
  alignSelf: 'center',
  display: 'grid',
  height: '100%',
  minWidth: '75%',
  overflowY: 'auto',
  ...makeResponsiveObject({
    beginAt,
    style: {
      zIndex: 'inherit',
    },
  }),
});
