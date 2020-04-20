'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const react_helmet_1 = tslib_1.__importDefault(require('react-helmet'))
const ContentList_1 = require('../components/ContentList')
const Pager_1 = require('../components/Pager')
const Layout_1 = require('../components/Layout')
const TagTemplate = (props) => {
  const { edges } = props.data.allMdx
  const { page, prefix, pageTotal, tag } = props.pageContext
  return react_1.default.createElement(
    Layout_1.Layout,
    null,
    react_1.default.createElement(react_helmet_1.default, { title: `Content Tagged "${tag}"` }),
    react_1.default.createElement('h2', null, `Content tagged with "${tag}"`),
    react_1.default.createElement(ContentList_1.ContentList, { edges: edges }),
    react_1.default.createElement(Pager_1.Pager, { page: page, prefix: prefix, total: pageTotal }),
    react_1.default.createElement('hr', null),
    react_1.default.createElement(gatsby_1.Link, { to: '/tags' }, 'All tags')
  )
}
exports.default = TagTemplate
exports.query = gatsby_1.graphql`
  query TagPage($tag: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { draft: { ne: true }, tags: { in: [$tag] } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
//# sourceMappingURL=TagTemplate.js.map
