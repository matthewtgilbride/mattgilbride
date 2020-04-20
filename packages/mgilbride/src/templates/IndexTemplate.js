'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const react_helmet_1 = require('react-helmet')
const ContentList_1 = require('../components/ContentList')
const Pager_1 = require('../components/Pager')
const Layout_1 = require('../components/Layout')
const IndexTemplate = ({ data, pageContext }) =>
  react_1.default.createElement(
    Layout_1.Layout,
    null,
    react_1.default.createElement(react_helmet_1.Helmet, {
      meta: [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ],
    }),
    react_1.default.createElement('h2', null, 'All Markdown Content'),
    react_1.default.createElement(ContentList_1.ContentList, { edges: data.allMdx.edges }),
    react_1.default.createElement(Pager_1.Pager, {
      page: pageContext.page,
      prefix: pageContext.prefix,
      total: pageContext.pageTotal,
    }),
    react_1.default.createElement('hr', null),
    react_1.default.createElement(gatsby_1.Link, { to: '/tags' }, 'All tags')
  )
exports.default = IndexTemplate
exports.query = gatsby_1.graphql`
  query IndexPage($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { draft: { ne: true } } }
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
//# sourceMappingURL=IndexTemplate.js.map
