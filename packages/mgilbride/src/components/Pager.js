'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const styled_1 = tslib_1.__importDefault(require('@emotion/styled'))
const gatsby_1 = require('gatsby')
function pageUrl(prefix, page) {
  return page <= 1 ? `/${prefix}` : `/${prefix}/${page}`
}
const NavLink = styled_1.default(gatsby_1.Link)`
  background-color: #ff5700;
  border-radius: 3px;
  color: #fff;
  font-family: sans-serif;
  margin: 0 1rem 0 0;
  padding: 0.25rem 0.5rem;
  text-decoration: none;

  &:active,
  &:hover {
    color: #fff;
  }
`
exports.Pager = ({ prefix, page, total }) =>
  react_1.default.createElement(
    'div',
    null,
    page > 1 &&
      react_1.default.createElement(NavLink, { to: pageUrl(prefix, page - 1) }, 'Previous'),
    page < total &&
      react_1.default.createElement(NavLink, { to: pageUrl(prefix, page + 1) }, 'Next')
  )
//# sourceMappingURL=Pager.js.map
