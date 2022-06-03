// MUI IMPORTS
import { Box, styled, BoxProps } from '@mui/material'

// ===========================|| LANDING - SEPARATOR ||=========================== //

const LandingSeparator = styled(Box)<BoxProps>(({ theme }) => ({
  display: Object.is(theme.palette.mode, 'light') ? 'none' : 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '-20%',
  left: '-5%',
  width: '100%',
  zIndex: 2,
  svg: {
    position: 'relative'
  }
}))

export default LandingSeparator
