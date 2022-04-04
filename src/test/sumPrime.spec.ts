import { sumPrimes } from 'src/sumPrime'

describe('sumPrime Test 100% branch coverage', () => {
  // branches on secret selection
  it('should return (2+3)*1 for x = 2, y = 4', () => {
    expect(sumPrimes(2, 4)).toBe(5)
  })
  it('should return (3)*2 for x = 3, y = 4', () => {
    expect(sumPrimes(3, 4)).toBe(6)
  })
  it('should return (2+3+5)*3 for x = 2, y = 5', () => {
    expect(sumPrimes(2, 5)).toBe(30)
  })
  it('should return (3+5)*4 = 32 for x = 3, y = 5', () => {
    expect(sumPrimes(3, 5)).toBe(32)
  })

  // `num` selection
  it('should return (2+3)*1 = 5 for x = 0, y = 4', () => {
    expect(sumPrimes(0, 4)).toBe(5)
  })
})
