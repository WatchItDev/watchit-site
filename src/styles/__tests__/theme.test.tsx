import * as theme from '@styles/theme'

describe('Theme', () => {
  describe('Theme Typography', () => {
    it('should typography be defined', () => {
      expect(theme.typography('light').typography).toBeDefined()
    })

    it('should have valid font family', () => {
      const typo = theme.typography('light').typography
      expect(typo.fontFamily).toBeDefined()
      expect(typo.fontFamily).toBe('\'Roboto\', sans-serif')
    })

    it('should have valid h6', () => {
      const typo = theme.typography('light').typography
      expect(typo.h6).toBeDefined()
      expect(typo?.h6?.fontWeight).toBe(500)
    })

    it('should have valid h5', () => {
      const typo = theme.typography('light').typography
      expect(typo.h5).toBeDefined()
      expect(typo?.h5?.fontWeight).toBe(500)
    })

    it('should have valid h4', () => {
      const typo = theme.typography('light').typography
      expect(typo.h4).toBeDefined()
      expect(typo?.h4?.fontWeight).toBe(600)
    })

    it('should have valid h3', () => {
      const typo = theme.typography('light').typography
      expect(typo.h3).toBeDefined()
      expect(typo?.h3?.fontWeight).toBe(600)
    })

    it('should have valid h2', () => {
      const typo = theme.typography('light').typography
      expect(typo.h2).toBeDefined()
      expect(typo?.h2?.fontWeight).toBe(700)
    })

    it('should have valid h1', () => {
      const typo = theme.typography('light').typography
      expect(typo.h1).toBeDefined()
      expect(typo?.h1?.fontWeight).toBe(700)
    })

    it('should have valid subtitle1', () => {
      const typo = theme.typography('light').typography
      expect(typo.subtitle1).toBeDefined()
    })

    it('should have valid subtitle2', () => {
      const typo = theme.typography('light').typography
      expect(typo.subtitle2).toBeDefined()
    })

    it('should have valid caption', () => {
      const typo = theme.typography('light').typography
      expect(typo.caption).toBeDefined()
    })

    it('should have valid body1', () => {
      const typo = theme.typography('light').typography
      expect(typo.body1).toBeDefined()
    })

    it('should have valid body2', () => {
      const typo = theme.typography('light').typography
      expect(typo.body2).toBeDefined()
    })
  })

  describe('Theme Default Theme', () => {
    it('should default theme be defined', () => {
      expect(theme.defaultTheme).toBeDefined()
    })

    it('should have valid palette mode', () => {
      const palette = theme?.defaultTheme?.palette
      expect(palette).toBeDefined()
      expect(palette.mode).toBe('light')
    })

    it('should have valid palette primary light', () => {
      const palette = theme?.defaultTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#f3f9fd')
    })

    it('should have valid palette primary main', () => {
      const palette = theme?.defaultTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#155f75')
    })

    it('should have valid palette primary dark', () => {
      const palette = theme?.defaultTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#154958')
    })

    it('should have valid palette secondary light', () => {
      const palette = theme?.defaultTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#f3c5ad')
    })

    it('should have valid palette secondary main', () => {
      const palette = theme?.defaultTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#e17b22')
    })

    it('should have valid palette secondary dark', () => {
      const palette = theme?.defaultTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#a75206')
    })

    it('should have valid palette warning light', () => {
      const palette = theme?.defaultTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#fff8e1')
    })

    it('should have valid palette warning main', () => {
      const palette = theme?.defaultTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#ffe57f')
    })

    it('should have valid palette warning dark', () => {
      const palette = theme?.defaultTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#ffc107')
    })

    it('should have valid palette success light', () => {
      const palette = theme?.defaultTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#b9f6ca')
    })

    it('should have valid palette success main', () => {
      const palette = theme?.defaultTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#20bf6b')
    })

    it('should have valid palette success dark', () => {
      const palette = theme?.defaultTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#02883a')
    })

    it('should have valid palette error light', () => {
      const palette = theme?.defaultTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#ef9a9a')
    })

    it('should have valid palette error main', () => {
      const palette = theme?.defaultTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#f44336')
    })

    it('should have valid palette error dark', () => {
      const palette = theme?.defaultTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#c62828')
    })

    it('should have valid palette grey 50', () => {
      const palette = theme?.defaultTheme?.palette?.grey[50]
      expect(palette).toBeDefined()
      expect(palette).toBe('#fafafa')
    })

    it('should have valid palette grey 100', () => {
      const palette = theme?.defaultTheme?.palette?.grey[100]
      expect(palette).toBeDefined()
      expect(palette).toBe('#f5f5f5')
    })

    it('should have valid palette grey 200', () => {
      const palette = theme?.defaultTheme?.palette?.grey[200]
      expect(palette).toBeDefined()
      expect(palette).toBe('#eeeeee')
    })

    it('should have valid palette grey 300', () => {
      const palette = theme?.defaultTheme?.palette?.grey[300]
      expect(palette).toBeDefined()
      expect(palette).toBe('#e0e0e0')
    })

    it('should have valid palette grey 500', () => {
      const palette = theme?.defaultTheme?.palette?.grey[500]
      expect(palette).toBeDefined()
      expect(palette).toBe('#9e9e9e')
    })

    it('should have valid palette grey 600', () => {
      const palette = theme?.defaultTheme?.palette?.grey[600]
      expect(palette).toBeDefined()
      expect(palette).toBe('#757575')
    })

    it('should have valid palette grey 700', () => {
      const palette = theme?.defaultTheme?.palette?.grey[700]
      expect(palette).toBeDefined()
      expect(palette).toBe('#616161')
    })

    it('should have valid palette grey 900', () => {
      const palette = theme?.defaultTheme?.palette?.grey[900]
      expect(palette).toBeDefined()
      expect(palette).toBe('#212121')
    })

    it('should have valid palette text primary', () => {
      const palette = theme?.defaultTheme?.palette?.text.primary
      expect(palette).toBeDefined()
      expect(palette).toBe('#154958')
    })

    it('should have valid palette divider', () => {
      const palette = theme?.defaultTheme?.palette?.divider
      expect(palette).toBeDefined()
      expect(palette).toBe('#eeeeee')
    })

    it('should have valid palette background', () => {
      const palette = theme?.defaultTheme?.palette?.background.default
      expect(palette).toBeDefined()
      expect(palette).toBe('#ffffff')
    })

    it('should have valid palette background paper', () => {
      const palette = theme?.defaultTheme?.palette?.background.paper
      expect(palette).toBeDefined()
      expect(palette).toBe('#b8d2e4')
    })

    it('should have valid shape border radius', () => {
      const palette = theme?.defaultTheme?.shape.borderRadius
      expect(palette).toBeDefined()
      expect(palette).toBe(12)
    })
  })

  describe('Theme Dark Theme', () => {
    it('should default theme be defined', () => {
      expect(theme.darkTheme).toBeDefined()
    })

    it('should have valid dark palette mode', () => {
      const palette = theme?.darkTheme?.palette
      expect(palette).toBeDefined()
      expect(palette.mode).toBe('dark')
    })

    it('should have valid dark palette primary light', () => {
      const palette = theme?.darkTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#29314f')
    })

    it('should have valid dark palette primary main', () => {
      const palette = theme?.darkTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#0095C3')
    })

    it('should have valid dark palette primary dark', () => {
      const palette = theme?.darkTheme?.palette?.primary
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#29bce9')
    })

    it('should have valid dark palette secondary light', () => {
      const palette = theme?.darkTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#efa597')
    })

    it('should have valid dark palette secondary main', () => {
      const palette = theme?.darkTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#CC7462')
    })

    it('should have valid dark palette secondary dark', () => {
      const palette = theme?.darkTheme?.palette?.secondary
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#915b50')
    })

    it('should have valid dark palette warning light', () => {
      const palette = theme?.darkTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#3a4058')
    })

    it('should have valid dark palette warning main', () => {
      const palette = theme?.darkTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#ffe57f')
    })

    it('should have valid dark palette warning dark', () => {
      const palette = theme?.darkTheme?.palette?.warning
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#d6a62e')
    })

    it('should have valid dark palette success light', () => {
      const palette = theme?.darkTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#3a4a5b')
    })

    it('should have valid dark palette success main', () => {
      const palette = theme?.darkTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#00e676')
    })

    it('should have valid dark palette success dark', () => {
      const palette = theme?.darkTheme?.palette?.success
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#17b956')
    })

    it('should have valid dark palette error light', () => {
      const palette = theme?.darkTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.light).toBe('#ef9a9a')
    })

    it('should have valid dark palette error main', () => {
      const palette = theme?.darkTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.main).toBe('#f44336')
    })

    it('should have valid dark palette error dark', () => {
      const palette = theme?.darkTheme?.palette?.error
      expect(palette).toBeDefined()
      expect(palette.dark).toBe('#c62828')
    })

    it('should have valid dark palette grey 50', () => {
      const palette = theme?.darkTheme?.palette?.grey[50]
      expect(palette).toBeDefined()
      expect(palette).toBe('#fafafa')
    })

    it('should have valid dark palette grey 100', () => {
      const palette = theme?.darkTheme?.palette?.grey[100]
      expect(palette).toBeDefined()
      expect(palette).toBe('#f5f5f5')
    })

    it('should have valid dark palette grey 200', () => {
      const palette = theme?.darkTheme?.palette?.grey[200]
      expect(palette).toBeDefined()
      expect(palette).toBe('#bdc8f0')
    })

    it('should have valid dark palette grey 300', () => {
      const palette = theme?.darkTheme?.palette?.grey[300]
      expect(palette).toBeDefined()
      expect(palette).toBe('#353c5a')
    })

    it('should have valid dark palette grey 500', () => {
      const palette = theme?.darkTheme?.palette?.grey[500]
      expect(palette).toBeDefined()
      expect(palette).toBe('#8492c4')
    })

    it('should have valid dark palette grey 600', () => {
      const palette = theme?.darkTheme?.palette?.grey[600]
      expect(palette).toBeDefined()
      expect(palette).toBe('#757575')
    })

    it('should have valid dark palette grey 700', () => {
      const palette = theme?.darkTheme?.palette?.grey[700]
      expect(palette).toBeDefined()
      expect(palette).toBe('#bdc8f0')
    })

    it('should have valid dark palette grey 900', () => {
      const palette = theme?.darkTheme?.palette?.grey[900]
      expect(palette).toBeDefined()
      expect(palette).toBe('#d7dcec')
    })

    it('should have valid dark palette text primary', () => {
      const palette = theme?.darkTheme?.palette?.text.primary
      expect(palette).toBeDefined()
      expect(palette).toBe('#E6E8E9')
    })

    it('should have valid dark palette text secondary', () => {
      const palette = theme?.darkTheme?.palette?.text.secondary
      expect(palette).toBeDefined()
      expect(palette).toBe('#A3A8AE')
    })

    it('should have valid dark palette divider', () => {
      const palette = theme?.darkTheme?.palette?.divider
      expect(palette).toBeDefined()
      expect(palette).toBe('#bdc8f0')
    })

    it('should have valid dark palette background', () => {
      const palette = theme?.darkTheme?.palette?.background.default
      expect(palette).toBeDefined()
      expect(palette).toBe('#070113')
    })

    it('should have valid dark palette background paper', () => {
      const palette = theme?.darkTheme?.palette?.background.paper
      expect(palette).toBeDefined()
      expect(palette).toBe('#001B2F')
    })

    it('should have valid dark shape border radius', () => {
      const palette = theme?.darkTheme?.shape.borderRadius
      expect(palette).toBeDefined()
      expect(palette).toBe(12)
    })
  })
})
