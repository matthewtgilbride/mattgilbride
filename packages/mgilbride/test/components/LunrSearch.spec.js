'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
require('@testing-library/jest-dom/extend-expect')
const react_2 = require('@testing-library/react')
const lunr_1 = tslib_1.__importDefault(require('lunr'))
const LunrSearch_1 = require('../../src/components/LunrSearch')
function change(element, value) {
  react_2.fireEvent.change(element, {
    target: { value },
  })
}
function setupLunrIndex(store) {
  window.__LUNR__ = {
    en: {
      index: lunr_1.default(function () {
        this.field('path')
        this.field('title')
        Object.entries(store).map(([id, document]) => this.add({ id, ...document }))
      }),
      store,
    },
  }
}
function cleanupLunrIndex() {
  delete window.__LUNR__
}
describe('LunrSearch', () => {
  afterEach(cleanupLunrIndex)
  it('displays search results from the global Lunr index', () => {
    setupLunrIndex({
      '1': { path: '/1', title: 'Number One' },
      '2': { path: '/2', title: 'Number Two' },
    })
    const { getByText, queryByText, getByLabelText } = react_2.render(
      react_1.default.createElement(LunrSearch_1.LunrSearch, null)
    )
    change(getByLabelText('Search'), 'two')
    expect(queryByText('Number One')).not.toBeInTheDocument()
    expect(getByText('Number Two')).toHaveAttribute('href', '/2')
    expect(getByText('Showing 1 result.')).toBeTruthy()
  })
  it('limit number of search results displayed', () => {
    setupLunrIndex({
      '1': { path: '/1', title: 'Number One' },
      '2': { path: '/2', title: 'Number Two' },
      '3': { path: '/2', title: 'Number Three' },
    })
    const { getByText, getAllByText, getByLabelText } = react_2.render(
      react_1.default.createElement(LunrSearch_1.LunrSearch, { limit: 2 })
    )
    change(getByLabelText('Search'), 'number')
    expect(getAllByText(/Number/)).toHaveLength(2)
    expect(getByText('Showing 2 of 3 results.')).toBeTruthy()
  })
  it('shows the number of results if limit is greater', () => {
    setupLunrIndex({
      '1': { path: '/1', title: 'Number One' },
      '2': { path: '/2', title: 'Number Two' },
      '3': { path: '/3', title: 'Number Three' },
    })
    const { getByText, getByLabelText } = react_2.render(
      react_1.default.createElement(LunrSearch_1.LunrSearch, { limit: 9999 })
    )
    change(getByLabelText('Search'), 'number')
    expect(getByText('Showing 3 of 3 results.')).toBeTruthy()
  })
  it('hides search results on clicking outside the component', () => {
    setupLunrIndex({
      '1': { path: '/test', title: 'Test' },
    })
    const { queryByText, getByLabelText, getByTestId } = react_2.render(
      react_1.default.createElement(
        'div',
        null,
        react_1.default.createElement(LunrSearch_1.LunrSearch, { limit: 9999 }),
        react_1.default.createElement('span', { 'data-testid': 'outside' })
      )
    )
    change(getByLabelText('Search'), 'test')
    react_2.fireEvent.click(getByTestId('outside'))
    expect(queryByText('Test')).not.toBeInTheDocument()
  })
})
//# sourceMappingURL=LunrSearch.spec.js.map
