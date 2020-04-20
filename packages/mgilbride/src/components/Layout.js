'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const gatsby_1 = require('gatsby')
const react_helmet_1 = require('react-helmet')
const core_1 = require('@emotion/core')
const Header_1 = require('./Header')
const wrapper = core_1.css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`
exports.Layout = ({ children }) => {
  const data = gatsby_1.useStaticQuery(gatsby_1.graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return react_1.default.createElement(
    'main',
    null,
    react_1.default.createElement(react_helmet_1.Helmet, {
      titleTemplate: `%s - ${data.site.siteMetadata.title}`,
      defaultTitle: data.site.siteMetadata.title,
      meta: [
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        {
          name: 'keywords',
          content: 'gatsby, gatsbyjs, sample, demo, typescript',
        },
      ],
    }),
    react_1.default.createElement(Header_1.Header, { title: data.site.siteMetadata.title }),
    react_1.default.createElement('div', { css: wrapper }, children)
  )
}
//# sourceMappingURL=Layout.js.map
