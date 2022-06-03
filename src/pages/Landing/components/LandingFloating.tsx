// MUI IMPORTS
import { Box, BoxProps, styled } from '@mui/material'

// ===========================|| LANDING - FLOATING ||=========================== //

const LandingFloating = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  svg: {
    width: '100%',
    height: 'auto'
  },
  '@keyframes slideY': {
    '0%': {
      transform: 'translateY(0)'
    },
    '25%': {
      transform: 'translateY(-10px)'
    },
    '50%': {
      transform: 'translateY(0)'
    },
    '75%': {
      transform: 'translateY(10px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  },
  animation: '7s linear 0s infinite normal none running slideY',
  '& img': {
    maxWidth: '100%'
  },
  '& svg': {
    width: '100%',
    height: '100%'
  }
}))

export default LandingFloating
