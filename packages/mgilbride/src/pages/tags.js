'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const react_helmet_1 = tslib_1.__importDefault(require('react-helmet'))
const lodash_1 = require('lodash')
const Layout_1 = require('../components/Layout')
const TagsPage = ({ data }) => {
  return react_1.default.createElement(
    Layout_1.Layout,
    null,
    react_1.default.createElement(react_helmet_1.default, { title: 'Tags' }),
    react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement('h2', null, 'Tags'),
      react_1.default.createElement(
        'ul',
        null,
        data.allMdx.group.map(({ tag, totalCount }) =>
          react_1.default.createElement(
            'li',
            { key: tag },
            react_1.default.createElement(
              gatsby_1.Link,
              { to: `/tags/${lodash_1.kebabCase(tag)}/` },
              tag
            ),
            ' (',
            totalCount,
            ')'
          )
        )
      )
    )
  )
}
exports.default = TagsPage
exports.query = gatsby_1.graphql`
  query TagListPage {
    allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
//# sourceMappingURL=tags.js.map
