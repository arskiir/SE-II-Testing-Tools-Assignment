import { calcuator } from 'src/calculator'

// Describes the funciton you are going to test
describe('CalculatorTest', () => {
  // Describes the test situation of the function
  it('Result of 4 plus 6 should be 10', () => {
    expect(calcuator(4, 6, '+')).toBe('4 + 6 = 10')
  })

  it('Result of 4 minus 6 should be -2', () => {
    expect(calcuator(4, 6, '-')).toBe('4 - 6 = -2')
  })

  it('Result of 4 times 6 should be 24', () => {
    expect(calcuator(4, 6, '*')).toBe('4 * 6 = 24')
  })

  it('Result of 4 divided by 2 should be 2', () => {
    expect(calcuator(4, 2, '/')).toBe('4 / 2 = 2')
  })

  // test for invalid operator
  const invalidOperator = '%'
  it('shows error message for invalid operator', () => {
    expect(calcuator(4, 6, '%')).toBe(
      `Operation ${invalidOperator} not supported.`
    )
  })
})
