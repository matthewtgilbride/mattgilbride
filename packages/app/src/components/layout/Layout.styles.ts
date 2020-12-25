import { css, CSSObject } from '@emotion/core';
import { palette } from '../../utils/design';

export const beginAt = 'tabletPortrait';

export const fontMontserrat: ReturnType<typeof css> = css`
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/assets/fonts/montserrat-v15-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/assets/fonts/montserrat-v15-latin-italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/montserrat-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('/assets/fonts/montserrat-v15-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/montserrat-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('/assets/fonts/montserrat-v15-latin-700italic.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/assets/fonts/montserrat-v15-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;

export const meyerReset: ReturnType<typeof css> = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    /* stylelint-disable */
    font-size: 100%;
    font: inherit;
    /* stylelint-enable */
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const documentReset: CSSObject = {
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    backgroundColor: palette.contrast(),
    color: palette.text(),
    fontFamily: 'Montserrat,sans-serif;',
    lineHeight: 'normal',
  },
  html: {
    height: '100%',
    width: '100%',
  },
  button: {
    cursor: 'pointer',
    ':focus': {
      outline: 'none',
    },
    padding: 0,
  },
  a: {
    fontWeight: 500,
    textDecoration: 'underline',
    color: palette.text(),
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
  },
};
