import { String } from '@src/utils'

describe('String util', () => {
  it('should return true if `arg` is a invalid string', () => {
    const isInvalid = String.invalidString('')
    expect(isInvalid).toBeTruthy()
  })

  it('should return false if a valid string is passed as arg', () => {
    const isInvalid = String.invalidString('hello world')
    expect(isInvalid).toBeFalsy()
  })

  it('should return expected minified hash', () => {
    const minifiedHash = String.minifyHash('0xEe99CeFF640d37Edd9cac8c7cfF4Ed4cD609f435')
    expect(minifiedHash).toBe('0xEe...435')
  })

  it('should return always same hash color from string', () => {
    const hash = '0xEe99CeFF640d37Edd9cac8c7cfF4Ed4cD609f435'
    const colorFromHash = String.toHex(hash)
    expect(colorFromHash).toBe('#5677fc')
  })
})
