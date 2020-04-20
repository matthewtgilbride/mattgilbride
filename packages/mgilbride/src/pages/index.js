'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const Layout_1 = require('../components/Layout')
exports.IndexPage = () =>
  react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement('h2', null, 'Hi people'),
    react_1.default.createElement('p', null, 'Welcome to your new Gatsby site.'),
    react_1.default.createElement('p', null, 'Now go build something great.'),
    react_1.default.createElement(
      'p',
      null,
      react_1.default.createElement(gatsby_1.Link, { to: '/another-page/' }, 'Go to another page')
    ),
    react_1.default.createElement(
      'p',
      null,
      react_1.default.createElement(
        gatsby_1.Link,
        { to: '/all/' },
        'See content generated from Markdown files'
      )
    )
  )
const LayoutIndexPage = () =>
  react_1.default.createElement(
    Layout_1.Layout,
    null,
    react_1.default.createElement(exports.IndexPage, null)
  )
exports.default = LayoutIndexPage
//# sourceMappingURL=index.js.map
