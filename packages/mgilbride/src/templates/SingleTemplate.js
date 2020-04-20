'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const react_helmet_1 = tslib_1.__importDefault(require('react-helmet'))
const Layout_1 = require('../components/Layout')
const MDXRenderer = require('gatsby-plugin-mdx/mdx-renderer')
const ContentTemplate = ({ data }) => {
  const {
    mdx: { frontmatter, body },
  } = data
  return react_1.default.createElement(
    Layout_1.Layout,
    null,
    react_1.default.createElement(react_helmet_1.default, { title: `${frontmatter.title}` }),
    react_1.default.createElement('h2', null, frontmatter.title),
    react_1.default.createElement('h3', null, frontmatter.date),
    react_1.default.createElement(MDXRenderer, null, body)
  )
}
exports.default = ContentTemplate
exports.query = gatsby_1.graphql`
  query SinglePage($path: String!) {
    mdx(frontmatter: { draft: { ne: true }, path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
      }
    }
  }
`
//# sourceMappingURL=SingleTemplate.js.map
