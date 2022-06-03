/* eslint-disable  @typescript-eslint/no-namespace */
/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

export namespace String {
  /**
   * Check for invalid string
   * @param {string} text
   * @return {boolean} invalid or valid string
   */
  export const invalidString = (text: string): boolean => {
    return (!text || /^\s*$/.test(text) || text.length === 0)
  }

  /**
   * Minify hash to '0x000...000'
   * @param {string} hash
   * @param {number} length size
   * @return {boolean} invalid or valid string
   */
  export const minifyHash = (hash: string, length: number = 4): string => {
    return `${hash.substr(0, length)}...${hash.substr(hash.length - 3)}`
  }

  /**
   * Generate hex from string
   * @param {string} text
   * @return {string} Hex color based on string
   */
  export const toHex = (text: string): string => {
    const colors = [
      '#e51c23',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#5677fc',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#259b24',
      '#8bc34a',
      '#afb42b',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#607d8b'
    ]

    let hash = 0
    if (text.length === 0) return '#e51c23'
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash)
      hash = hash & hash
    }

    hash = ((hash % colors.length) + colors.length) % colors.length
    return colors[hash]
  }

}
