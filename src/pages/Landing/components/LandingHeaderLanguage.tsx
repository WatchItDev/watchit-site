// REACT IMPORTS
import React, { FC, useEffect } from 'react'

// MUI IMPORTS
import {
  ClickAwayListener, ListItemText, ButtonBase,
  Paper, Popper, Typography, useTheme, ListItemButton
} from '@mui/material'

// THIRD PARTY IMPORTS
import { useTranslation } from 'react-i18next'

// PROJECT IMPORTS
import { HeaderToggleButton } from '@pages/Landing/components/LandingHeaderToggleButton'
import Transitions from '@components/Transitions'
import { IconLanguage } from '@components/Icons'
import { MainCard } from '@components/Cards'

/* eslint-disable  @typescript-eslint/no-floating-promises */

// ===========================|| HEADER - LANGUAGE ||=========================== //

const HeaderLanguage: FC = (): JSX.Element => {
  const theme = useTheme()
  const { i18n } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [lan, setLan] = React.useState('en')
  const anchorRef = React.useRef(null)

  const handleLanguageToggle = (): void => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleLanguageClose = (): void => {
    setOpen(false)
  }

  const handleChangeLanguage = (lan: string): void => {
    i18n.changeLanguage(lan).then(() => {
      setLan(i18n.language)
    })
  }

  useEffect(() => {
    setLan(i18n.language)
  }, [])

  return (
    <>
      <ButtonBase sx={{ borderRadius: (theme) => theme.shape.borderRadius, mr: '16px' }}>
        <HeaderToggleButton
          variant='rounded'
          aria-haspopup='true'
          ref={anchorRef}
          onClick={handleLanguageToggle}
          color='inherit'
          buttonVariant='primary'
        >
          <IconLanguage stroke={1.5} />
        </HeaderToggleButton>
      </ButtonBase>
      <Popper
        popperOptions={{
          modifiers: [{ name: 'offset', options: { offset: [0, 14] } }]
        }}
        open={open}
        disablePortal
        role={undefined}
        transition
        anchorEl={anchorRef.current}
        placement='bottom-end'
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleLanguageClose}>
                <MainCard border={false} elevation={16} boxShadow shadow={theme.shadows[16]}>
                  <ListItemButton
                    selected={Object.is(lan, 'en')} onClick={() => handleChangeLanguage('en')}
                    sx={{
                      '&.Mui-selected': {
                        bgcolor: (theme) => `${theme.palette.primary.dark} !important`,
                        '& p': { color: (theme) => `${theme.palette.primary.light} !important` }
                      }
                    }}
                  >
                    <ListItemText primary={<Typography variant='body2'>English</Typography>} />
                  </ListItemButton>
                  <ListItemButton
                    selected={Object.is(lan, 'es')} onClick={() => handleChangeLanguage('es')}
                    sx={{
                      '&.Mui-selected': {
                        '& p': { color: (theme) => `${theme.palette.primary.light} !important` },
                        bgcolor: (theme) => `${theme.palette.primary.dark} !important`
                      }
                    }}
                  >
                    <ListItemText primary={<Typography variant='body2'>Spanish</Typography>} />
                  </ListItemButton>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  )
}

export default HeaderLanguage
