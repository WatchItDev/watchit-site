// REACT IMPORTS
import React, { FC, PropsWithChildren } from 'react'

// MUI IMPORTS
import {
  Hidden, styled, Backdrop, Drawer, Box,
  Divider, IconButton, Grid, BoxProps, Link
} from '@mui/material'

// PROJECT IMPORTS
import { DOCS, APP, TWITTER, DISCORD } from '@navigation/CONSTANTS'
import {
  Menu as MenuIcon,
  ChevronRight as ChevronRightIcon
} from '@components/Icons'
import { Translation } from '@src/i18n'

// ===========================|| HEADER MENU ||=========================== //

export interface HeaderMenuProps {
  isMenuOpen: boolean
  handleToggleMenu: () => void
}

const HeaderMenu: FC<PropsWithChildren<HeaderMenuProps>> = (props): JSX.Element => {
  return (
    <Box display='flex'>
      <Hidden mdDown>
        <HeaderMenuContent />
      </Hidden>
      {props.children}
      <Hidden mdUp>
        <IconButton
          color='primary'
          sx={{ ml: 2 }}
          onClick={() => props.handleToggleMenu()}
        >
          <MenuIcon />
        </IconButton>
        <Backdrop
          sx={{ zIndex: 0 }}
          open={props.isMenuOpen}
          onClick={props.handleToggleMenu}
        />
        <Drawer
          variant='persistent' anchor='right'
          open={props.isMenuOpen} sx={{ '.MuiPaper-root': { borderLeft: 0 } }}
        >
          <Grid
            container
            alignItems='center'
            sx={{
              py: 0,
              px: 2,
              minHeight: { xs: '56px', sm: '64px' }
            }}
          >
            <IconButton
              color='primary'
              onClick={() => props.handleToggleMenu()}
            >
              <ChevronRightIcon />
            </IconButton>
          </Grid>
          <Divider />
          <HeaderMenuContent />
        </Drawer>
      </Hidden>
    </Box>
  )
}

const HeaderMenuContent: FC = (): JSX.Element => {
  return (
    <Grid
      container
      flexGrow={1}
      sx={{
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: { xs: 'flex-start', md: 'flex-end' },
        flexDirection: { xs: 'column', md: 'row' },
        m: 0,
        p: { xs: '1rem 1.5rem', md: '0 1rem 0 0' },
        '& a': {
          textDecoration: 'none'
        }
      }}
    >
      <Link href={APP} target='_blank' rel='noreferrer'>
        <Item>
          <Translation target='LANDING_APP' />
        </Item>
      </Link>
      {/* <Link href={MARKETPLACE} target='_blank' rel='noreferrer'> */}
      {/*  <Item> */}
      {/*    <Translation target='LANDING_MARKETPLACE' /> */}
      {/*  </Item> */}
      {/* </Link> */}
      <Link href={TWITTER} target='_blank' rel='noreferrer'>
        <Item>
          <Translation target='LANDING_MENU_TWITTER' />
        </Item>
      </Link>
      <Link href={DISCORD} target='_blank' rel='noreferrer'>
        <Item>
          <Translation target='LANDING_MENU_DISCORD' />
        </Item>
      </Link>
      <Link href={DOCS} target='_blank' rel='noreferrer'>
        <Item>
          <Translation target='LANDING_MENU_DOCS' />
        </Item>
      </Link>
    </Grid>
  )
}

export const Item = styled(Box)<{ active?: boolean } & BoxProps>(({ active, theme }) => ({
  color: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.main : theme.palette.text.primary,
  position: 'relative',
  listStyle: 'none',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 400,
  padding: '0.5rem 1rem',
  '&:hover': {
    color: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.dark : theme.palette.primary.light,
    textDecoration: 'underline'
  },
  ...(
    (active ?? false)
      ? {
          '&:after': {
            content: '',
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: theme.palette.primary.main,
            bottom: '4px',
            left: 0,
            zIndex: 1
          }
        }
      : {}
  ),
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '0.5rem 1.5rem',
    paddingRight: '0.5rem 1.5rem'
  }
}))

export default HeaderMenu
