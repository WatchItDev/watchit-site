import { Theme } from '@mui/material'

export default (theme: Theme): object => ({
  marginRight: '0.5rem !important',
  '&::-webkit-scrollbar': {
    width: '0.5rem',
    height: '0.4rem',
    paddingRight: '0.5rem',
    backgroundColor: theme.palette.background.default,
    transition: 'all 0.3s ease-in-out'
  },
  '&::-webkit-scrollbar-button, &::-webkit-scrollbar-corner, &::-webkit-resizer': {
    display: 'none'
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#999',
    borderRadius: '0.25rem',
    transition: 'all 0.3s ease-in-out'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#666'
  }
})
