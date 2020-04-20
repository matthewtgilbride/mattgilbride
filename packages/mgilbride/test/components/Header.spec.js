'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importDefault(require('react'))
const react_2 = require('@testing-library/react')
const Header_1 = require('../../src/components/Header')
describe('<Header />', () => {
  it('renders the title', () => {
    const title = 'Test Title'
    const { getByText } = react_2.render(
      react_1.default.createElement(Header_1.Header, { title: title })
    )
    expect(getByText(title).tagName).toBeTruthy()
  })
})
//# sourceMappingURL=Header.spec.js.map
