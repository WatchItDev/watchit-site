// Global styles can be moved to a separate file for ease of maintenance.
// Need test to be sure that all this settings keep as are defined
import {
  THEME_BACKGROUND_DEFAULT,
  THEME_BACKGROUND_PAPER,
  THEME_COLOR_PRIMARY_LIGHT,
  THEME_COLOR_PRIMARY_MAIN,
  THEME_COLOR_PRIMARY_DARK,
  THEME_COLOR_SECONDARY_LIGHT,
  THEME_COLOR_SECONDARY_MAIN,
  THEME_COLOR_SECONDARY_DARK,
  THEME_COLOR_SUCCESS_LIGHT,
  THEME_COLOR_SUCCESS_MAIN,
  THEME_COLOR_SUCCESS_DARK,
  THEME_COLOR_WARNING_LIGHT,
  THEME_COLOR_WARNING_MAIN,
  THEME_COLOR_WARNING_DARK,
  THEME_COLOR_ERROR_LIGHT,
  THEME_COLOR_ERROR_MAIN,
  THEME_COLOR_ERROR_DARK,
  THEME_COLOR_GREY_50,
  THEME_COLOR_GREY_100,
  THEME_COLOR_GREY_200,
  THEME_COLOR_GREY_300,
  THEME_COLOR_GREY_500,
  THEME_COLOR_GREY_600,
  THEME_COLOR_GREY_700,
  THEME_COLOR_GREY_900,
  THEME_DARK_BACKGROUND_DEFAULT,
  THEME_DARK_BACKGROUND_PAPER,
  THEME_DARK_COLOR_PRIMARY_LIGHT,
  THEME_DARK_COLOR_PRIMARY_MAIN,
  THEME_DARK_COLOR_PRIMARY_DARK,
  THEME_DARK_COLOR_SECONDARY_LIGHT,
  THEME_DARK_COLOR_SECONDARY_MAIN,
  THEME_DARK_COLOR_SECONDARY_DARK,
  THEME_DARK_COLOR_SUCCESS_LIGHT,
  THEME_DARK_COLOR_SUCCESS_MAIN,
  THEME_DARK_COLOR_SUCCESS_DARK,
  THEME_DARK_COLOR_WARNING_LIGHT,
  THEME_DARK_COLOR_WARNING_MAIN,
  THEME_DARK_COLOR_WARNING_DARK,
  THEME_DARK_COLOR_ERROR_LIGHT,
  THEME_DARK_COLOR_ERROR_MAIN,
  THEME_DARK_COLOR_ERROR_DARK,
  THEME_DARK_COLOR_GREY_50,
  THEME_DARK_COLOR_GREY_100,
  THEME_DARK_COLOR_GREY_200,
  THEME_DARK_COLOR_GREY_300,
  THEME_DARK_COLOR_GREY_500,
  THEME_DARK_COLOR_GREY_600,
  THEME_DARK_COLOR_GREY_700,
  THEME_DARK_COLOR_GREY_900,
  THEME_SHAPE_BORDER_RADIUS,
  THEME_TEXT_PRIMARY,
  THEME_TEXT_SECONDARY,
  THEME_DARK_TEXT_PRIMARY,
  THEME_DARK_TEXT_SECONDARY
} from '@styles/CONSTANTS'
import React from 'react'
import { ComponentsOverrides, PaletteMode } from '@mui/material'

/* eslint-disable  @typescript-eslint/consistent-type-assertions */

export const globalComponentOverrides = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        margin: 0,
        padding: 0,
        height: '100%'
      } as ComponentsOverrides['MuiCssBaseline'],
      body: {
        margin: 0,
        padding: 0,
        height: '100%',
        backgroundColor: '#070113',
        overflowX: 'hidden'
      } as ComponentsOverrides['MuiCssBaseline'],
      '#root': {
        margin: 0,
        padding: 0,
        height: '100%'
      } as ComponentsOverrides['MuiCssBaseline']
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: 'none !important',
        borderRadius: `${THEME_SHAPE_BORDER_RADIUS}px !important`
      } as ComponentsOverrides['MuiButtonBase']
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        textTransform: 'capitalize',
        borderRadius: '4px'
      } as ComponentsOverrides['MuiButton']
    }
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      } as ComponentsOverrides['MuiPaper'],
      rounded: {
        borderRadius: `${THEME_SHAPE_BORDER_RADIUS}px`
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '16px'
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: '24px'
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        '&.MuiChip-deletable .MuiChip-deleteIcon': {
          color: 'inherit'
        }
      }
    }
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        '@media (min-width: 1280px)': {
          maxWidth: '1200px'
        }
      }
    }
  }
}

export const globalOverrides = {
  mixins: {
    toolbar: {
      minHeight: '48px',
      padding: '16px',
      '@media (min-width: 600px)': {
        minHeight: '48px'
      },
      '@media (max-width: 600px)': {
        padding: '8px 16px'
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
}

export const themeOverrides = (mode: string): object => ({
  ...globalOverrides,
  components: {
    ...globalComponentOverrides,
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900,
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: Object.is(mode, 'light') ? THEME_COLOR_GREY_700 : THEME_DARK_COLOR_GREY_700,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_DARK : THEME_DARK_COLOR_SECONDARY_MAIN,
            backgroundColor: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_LIGHT : THEME_DARK_COLOR_SECONDARY_LIGHT,
            '&:hover': {
              backgroundColor: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_LIGHT : THEME_DARK_COLOR_SECONDARY_LIGHT
            },
            '& .MuiListItemIcon-root': {
              color: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_DARK : THEME_DARK_COLOR_SECONDARY_MAIN
            }
          },
          '&:hover': {
            backgroundColor: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_LIGHT : THEME_DARK_COLOR_SECONDARY_LIGHT,
            color: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_DARK : THEME_DARK_COLOR_SECONDARY_MAIN,
            '& .MuiListItemIcon-root': {
              color: Object.is(mode, 'light') ? THEME_COLOR_SECONDARY_DARK : THEME_DARK_COLOR_SECONDARY_MAIN
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: Object.is(mode, 'light') ? THEME_COLOR_GREY_700 : THEME_DARK_COLOR_GREY_700,
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900,
          '&::placeholder': {
            color: Object.is(mode, 'light') ? THEME_COLOR_GREY_500 : THEME_DARK_COLOR_GREY_500,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `${THEME_SHAPE_BORDER_RADIUS}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: Object.is(mode, 'light') ? THEME_COLOR_GREY_300 : THEME_DARK_COLOR_GREY_300
          },
          '&:hover $notchedOutline': {
            borderColor: Object.is(mode, 'light') ? THEME_COLOR_PRIMARY_LIGHT : THEME_DARK_COLOR_PRIMARY_LIGHT
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: Object.is(mode, 'light') ? THEME_COLOR_GREY_50 : THEME_DARK_BACKGROUND_PAPER,
          padding: '15.5px 14px',
          borderRadius: `${THEME_SHAPE_BORDER_RADIUS}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: `${THEME_SHAPE_BORDER_RADIUS}px`
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: Object.is(mode, 'light') ? THEME_COLOR_GREY_700 : THEME_DARK_COLOR_GREY_700
          }
        },
        mark: {
          backgroundColor: Object.is(mode, 'light') ? THEME_BACKGROUND_PAPER : THEME_DARK_BACKGROUND_PAPER,
          width: '4px'
        },
        valueLabel: {
          color: Object.is(mode, 'light') ? THEME_COLOR_PRIMARY_LIGHT : THEME_DARK_COLOR_PRIMARY_LIGHT
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Object.is(mode, 'light') ? THEME_COLOR_GREY_200 : THEME_DARK_COLOR_GREY_200,
          opacity: Object.is(mode, 'light') ? 1 : 0.2
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: Object.is(mode, 'light') ? THEME_COLOR_PRIMARY_DARK : '#fff',
          background: Object.is(mode, 'light') ? THEME_COLOR_PRIMARY_LIGHT : THEME_DARK_COLOR_PRIMARY_LIGHT
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: Object.is(mode, 'light') ? THEME_BACKGROUND_PAPER : THEME_DARK_BACKGROUND_PAPER,
          background: Object.is(mode, 'light') ? THEME_COLOR_GREY_700 : THEME_DARK_COLOR_GREY_700
        }
      }
    }
  }
})

export const typography = (mode: string): any => ({
  typography: {
    fontFamily: '\'Roboto\', sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: '0.75rem',
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_900 : THEME_DARK_COLOR_GREY_900
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_500 : THEME_DARK_COLOR_GREY_500
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_500 : THEME_DARK_COLOR_GREY_500
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: Object.is(mode, 'light') ? THEME_COLOR_GREY_700 : THEME_DARK_COLOR_GREY_700
    }
  }
})

export const defaultTheme = Object.assign({}, themeOverrides('light'), typography('light'),
  {
    palette: {
      mode: 'light' as PaletteMode,
      primary: {
        light: THEME_COLOR_PRIMARY_LIGHT,
        main: THEME_COLOR_PRIMARY_MAIN,
        dark: THEME_COLOR_PRIMARY_DARK
      },
      secondary: {
        light: THEME_COLOR_SECONDARY_LIGHT,
        main: THEME_COLOR_SECONDARY_MAIN,
        dark: THEME_COLOR_SECONDARY_DARK
      },
      warning: {
        light: THEME_COLOR_WARNING_LIGHT,
        main: THEME_COLOR_WARNING_MAIN,
        dark: THEME_COLOR_WARNING_DARK
      },
      success: {
        light: THEME_COLOR_SUCCESS_LIGHT,
        main: THEME_COLOR_SUCCESS_MAIN,
        dark: THEME_COLOR_SUCCESS_DARK
      },
      error: {
        light: THEME_COLOR_ERROR_LIGHT,
        main: THEME_COLOR_ERROR_MAIN,
        dark: THEME_COLOR_ERROR_DARK
      },
      grey: {
        50: THEME_COLOR_GREY_50,
        100: THEME_COLOR_GREY_100,
        200: THEME_COLOR_GREY_200,
        300: THEME_COLOR_GREY_300,
        500: THEME_COLOR_GREY_500,
        600: THEME_COLOR_GREY_600,
        700: THEME_COLOR_GREY_700,
        900: THEME_COLOR_GREY_900
      },
      text: {
        primary: THEME_TEXT_PRIMARY,
        secondary: THEME_TEXT_SECONDARY
      },
      divider: THEME_COLOR_GREY_200,
      background: {
        default: THEME_BACKGROUND_DEFAULT,
        paper: THEME_BACKGROUND_PAPER
      }
    },
    shape: {
      borderRadius: THEME_SHAPE_BORDER_RADIUS
    }
  }
)

export const darkTheme = Object.assign({}, themeOverrides('dark'), typography('dark'),
  {
    palette: {
      mode: 'dark' as PaletteMode,
      primary: {
        light: THEME_DARK_COLOR_PRIMARY_LIGHT,
        main: THEME_DARK_COLOR_PRIMARY_MAIN,
        dark: THEME_DARK_COLOR_PRIMARY_DARK
      },
      secondary: {
        light: THEME_DARK_COLOR_SECONDARY_LIGHT,
        main: THEME_DARK_COLOR_SECONDARY_MAIN,
        dark: THEME_DARK_COLOR_SECONDARY_DARK
      },
      warning: {
        light: THEME_DARK_COLOR_WARNING_LIGHT,
        main: THEME_DARK_COLOR_WARNING_MAIN,
        dark: THEME_DARK_COLOR_WARNING_DARK
      },
      success: {
        light: THEME_DARK_COLOR_SUCCESS_LIGHT,
        main: THEME_DARK_COLOR_SUCCESS_MAIN,
        dark: THEME_DARK_COLOR_SUCCESS_DARK
      },
      error: {
        light: THEME_DARK_COLOR_ERROR_LIGHT,
        main: THEME_DARK_COLOR_ERROR_MAIN,
        dark: THEME_DARK_COLOR_ERROR_DARK
      },
      grey: {
        50: THEME_DARK_COLOR_GREY_50,
        100: THEME_DARK_COLOR_GREY_100,
        200: THEME_DARK_COLOR_GREY_200,
        300: THEME_DARK_COLOR_GREY_300,
        500: THEME_DARK_COLOR_GREY_500,
        600: THEME_DARK_COLOR_GREY_600,
        700: THEME_DARK_COLOR_GREY_700,
        900: THEME_DARK_COLOR_GREY_900
      },
      text: {
        primary: THEME_DARK_TEXT_PRIMARY,
        secondary: THEME_DARK_TEXT_SECONDARY
      },
      divider: THEME_DARK_COLOR_GREY_200,
      background: {
        default: THEME_DARK_BACKGROUND_DEFAULT,
        paper: THEME_DARK_BACKGROUND_PAPER
      }
    },
    shape: {
      borderRadius: THEME_SHAPE_BORDER_RADIUS
    }
  }
)

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
