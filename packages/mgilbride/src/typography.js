'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const typography_1 = tslib_1.__importDefault(require('typography'))
const gray_percentage_1 = tslib_1.__importDefault(require('gray-percentage'))
const typography_breakpoint_constants_1 = require('typography-breakpoint-constants')
const typography = new typography_1.default({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Domine', 'serif'],
  bodyColor: gray_percentage_1.default(10),
  headerWeight: 600,
  bodyWeight: 300,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.2,
    },
    a: {
      color: '#ff5700',
      textDecoration: 'none',
    },
    'a:hover, a:active': {
      color: options.bodyColor,
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray_percentage_1.default(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray_percentage_1.default(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [typography_breakpoint_constants_1.MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${(16 / 16) * 100}%`,
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})
exports.default = typography
//# sourceMappingURL=typography.js.map
