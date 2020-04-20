'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importStar(require('react'))
const react_use_outside_1 = require('@pacote/react-use-outside')
const core_1 = require('@emotion/core')
const gatsby_1 = require('gatsby')
const accent = '#ff5700'
const styles = {
  wrapper: core_1.css`
    display: inline-block;
  `,
  input: core_1.css`
    padding: 0.25rem 0.5rem;
    width: 12rem;
  `,
  list: core_1.css`
    background-color: #fff;
    border: 1px solid ${accent};
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 12rem;
    z-index: 2;
  `,
  item: core_1.css`
    border-bottom: 1px dotted ${accent};
    margin: 0;
  `,
  link: core_1.css`
    display: block;
    padding: 0.25rem 0.5rem;
  `,
  footer: core_1.css`
    font-size: 0.75rem;
    margin: 0;
    padding: 0.5rem;
    border: 0;
  `,
  hidden: core_1.css`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `,
}
const search = (query) => {
  const { index, store } = window.__LUNR__ && window.__LUNR__.en
  return query ? index.search(query).map(({ ref }) => store[ref]) : []
}
exports.LunrSearch = ({ limit }) => {
  const [query, setQuery] = react_1.useState('')
  const [results, setResults] = react_1.useState([])
  const [isActive, setActive] = react_1.useState(false)
  const ref = react_use_outside_1.useOutside('click', () => {
    setActive(false)
  })
  return react_1.default.createElement(
    'div',
    { ref: ref, css: styles.wrapper },
    react_1.default.createElement(
      'label',
      null,
      react_1.default.createElement('span', { css: styles.hidden }, 'Search'),
      react_1.default.createElement('input', {
        type: 'search',
        css: styles.input,
        value: query,
        onChange: (event) => {
          setQuery(event.target.value)
          setResults(search(event.target.value))
          setActive(true)
        },
      })
    ),
    isActive
      ? react_1.default.createElement(
          'ul',
          { css: styles.list },
          results
            .slice(0, limit)
            .map((result, index) =>
              react_1.default.createElement(
                'li',
                { key: index, css: styles.item },
                react_1.default.createElement(
                  gatsby_1.Link,
                  { css: styles.link, to: result.path },
                  result.title
                )
              )
            ),
          react_1.default.createElement(
            'li',
            { css: styles.footer },
            'Showing ',
            limit ? `${Math.min(limit, results.length)} of` : null,
            ' ',
            results.length,
            ' ',
            results.length === 1 ? 'result' : 'results',
            '.'
          )
        )
      : null
  )
}
//# sourceMappingURL=LunrSearch.js.map
