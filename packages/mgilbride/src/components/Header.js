'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const styled_1 = tslib_1.__importDefault(require('@emotion/styled'))
const core_1 = require('@emotion/core')
const gatsby_1 = require('gatsby')
const LunrSearch_1 = require('./LunrSearch')
const style = {
  container: core_1.css`
    background: #ff5700;
    margin-bottom: 1.45rem;
  `,
  wrapper: core_1.css`
    display: grid;
    grid-template-columns: auto 10rem;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  title: core_1.css`
    margin: 0;
    display: inline-block;
  `,
}
const TitleLink = styled_1.default(gatsby_1.Link)`
  color: #fff;

  &:active,
  &:hover {
    color: #fff;
  }
`
exports.Header = ({ title }) =>
  react_1.default.createElement(
    'div',
    { css: style.container },
    react_1.default.createElement(
      'div',
      { css: style.wrapper },
      react_1.default.createElement(
        'h1',
        { css: style.title },
        react_1.default.createElement(TitleLink, { to: '/' }, title)
      ),
      react_1.default.createElement(LunrSearch_1.LunrSearch, { limit: 10 })
    )
  )
//# sourceMappingURL=Header.js.map
