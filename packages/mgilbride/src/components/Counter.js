'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const react_1 = tslib_1.__importStar(require('react'))
const styled_1 = tslib_1.__importDefault(require('@emotion/styled'))
const Wrapper = styled_1.default('div')`
  margin: 1rem 0;
  text-align: center;
`
const Button = styled_1.default('button')`
  padding: 1rem 2rem;
`
const Count = styled_1.default('span')`
  padding: 1rem 2rem;
`
exports.Counter = () => {
  const [count, setCount] = react_1.useState(0)
  return react_1.default.createElement(
    Wrapper,
    null,
    react_1.default.createElement(Button, { onClick: () => setCount(count - 1) }, '-'),
    react_1.default.createElement(Count, null, count),
    react_1.default.createElement(Button, { onClick: () => setCount(count + 1) }, '+')
  )
}
//# sourceMappingURL=Counter.js.map
