/* eslint-disable  @typescript-eslint/no-namespace */
/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

export namespace Color {

  /**
  * Add alpha opacity to hex color
  *
  * @param {string} color
  * @param {number} opacity
  * @return {*}  {string}
  */
  export const addAlpha = (color: string, opacity: number): string => {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
    return color + _opacity.toString(16).toUpperCase()
  }

  /**
  * Return random colors for
  *
  * @return {*}  {string}
  */
  export const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}
