// MUI IMPORTS
import { Avatar, styled, AvatarProps, lighten } from '@mui/material'

// ===========================|| HEADER - TOGGLE BUTTON ||=========================== //

export const HeaderToggleButton = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'buttonVariant'
})<AvatarProps & { buttonVariant: 'primary' | 'secondary' }>(({ theme, buttonVariant }) => ({
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  width: '34px',
  height: '34px',
  fontSize: '1.2rem',
  transition: 'all .2s ease-in-out',
  ml: 2,
  svg: {
    fontSize: 'inherit !important'
  },
  background: Object.is(theme.palette.mode, 'light') ? theme.palette[buttonVariant].light : theme.palette.primary.light,
  color: Object.is(theme.palette.mode, 'light') ? theme.palette[buttonVariant].dark : theme.palette[buttonVariant].main,
  '&[aria-controls="menu-list-grow"],&:hover': {
    background: Object.is(theme.palette.mode, 'light') ? theme.palette[buttonVariant].dark : theme.palette[buttonVariant].main,
    color: Object.is(theme.palette.mode, 'light') ? theme.palette[buttonVariant].light : lighten(theme.palette[buttonVariant].light, 0.7)
  }
}))
