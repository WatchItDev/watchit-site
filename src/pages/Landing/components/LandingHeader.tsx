// REACT IMPORTS
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

// MUI IMPORTS
import {
  Box, styled, Container, Toolbar,
  ButtonBase, useScrollTrigger,
  AppBar, AppBarProps, useTheme
} from '@mui/material'

// PROJECT IMPORTS
import { HeaderToggleButton } from '@pages/Landing/components/LandingHeaderToggleButton'
import HeaderLanguage from '@pages/Landing/components/LandingHeaderLanguage'
import HeaderMenu from '@pages/Landing/components/LandingHeaderMenu'
import { Brightness4, Brightness7 } from '@components/Icons'
import LogoPng from '@assets/img/watchitlogo.png'
import { ColorModeContext } from '@styles/theme'
import { LANDING } from '@navigation/CONSTANTS'
import { Color } from '@src/utils'

// ===========================|| LANDING - HEADER ||=========================== //

const LandingHeader: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()
  const trigger = useScrollTrigger()
  const handleToggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <LandingHeaderWrapper scrolled={trigger}>
        <Container>
          <Toolbar sx={{ px: '0px !important' }}>
            <ButtonBase disableRipple component={Link} to={LANDING} sx={{ flexGrow: 1, justifyContent: 'flex-start' }}>
              <Box
                component='img' alt='Logo Image' src={LogoPng}
                sx={{ maxWidth: '50px', transform: 'translateY(-1px)' }}
              />
            </ButtonBase>
            <Box>
              <HeaderMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu}>
                <HeaderLanguage />
                <ButtonBase sx={{ borderRadius: (theme) => theme.shape.borderRadius }}>
                  <HeaderToggleButton
                    variant='rounded' aria-haspopup='true' color='inherit' buttonVariant='primary'
                    onClick={() => colorMode.toggleColorMode()}
                  >
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </HeaderToggleButton>
                </ButtonBase>
              </HeaderMenu>
            </Box>
          </Toolbar>
        </Container>
      </LandingHeaderWrapper>
    </>
  )
}

export default LandingHeader

const LandingHeaderWrapper = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<AppBarProps & { scrolled: boolean }>(({ scrolled, theme }) => ({
  '&, & *': {
    transition: 'all .2s ease-in-out'
  },
  '.MuiButtonBase-root, .MuiButtonBase-root *': {
    transition: 'all .05s ease-in-out !important'
  },
  'a > svg': {
    width: '6rem',
    height: '2rem'
  },
  ...(scrolled
    ? {
        backgroundColor: Object.is(theme.palette.mode, 'light')
          ? theme.palette.background.default
          : theme.palette.background.paper,
        borderBottomWidth: 'initial',
        borderBottomStyle: 'none',
        color: 'rgb(33, 33, 33)',
        borderBottom: `1px solid ${Color.addAlpha(theme.palette.divider, 0.2)}`,
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px'
      }
    : {
        backgroundColor: Object.is(theme.palette.mode, 'light')
          ? theme.palette.background.paper
          : theme.palette.background.default,
        borderColor: 'transparent',
        color: 'rgb(33, 33, 33)',
        borderTopColor: 'rgb(238, 238, 238)',
        borderRightColor: 'rgb(238, 238, 238)',
        borderLeftColor: 'rgb(238, 238, 238)',
        boxShadow: 'none'
      }
  )
}))
