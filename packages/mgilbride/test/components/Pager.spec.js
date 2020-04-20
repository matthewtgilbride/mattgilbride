'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const react_2 = require('@testing-library/react')
const Pager_1 = require('../../src/components/Pager')
describe('<Pager />', () => {
  it('renders a pager for the first page', () => {
    const { getByText } = react_2.render(
      react_1.default.createElement(Pager_1.Pager, { page: 1, prefix: 'prefix', total: 3 })
    )
    expect(getByText('Next').getAttribute('href')).toBe('/prefix/2')
  })
  it('renders a pager for the second page', () => {
    const { getByText } = react_2.render(
      react_1.default.createElement(Pager_1.Pager, { page: 2, prefix: 'prefix', total: 3 })
    )
    expect(['Previous', 'Next'].map((text) => getByText(text).getAttribute('href'))).toEqual([
      '/prefix',
      '/prefix/3',
    ])
  })
  it('renders a pager for the last page', () => {
    const { getByText } = react_2.render(
      react_1.default.createElement(Pager_1.Pager, { page: 3, prefix: 'prefix', total: 3 })
    )
    expect(getByText('Previous').getAttribute('href')).toBe('/prefix/2')
  })
})
//# sourceMappingURL=Pager.spec.js.map
