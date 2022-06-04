// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Box, Grid, Container, Button, styled, BoxProps, useTheme } from '@mui/material'

// PROJECT IMPORTS
import { Translation } from '@src/i18n'
import LandingBackgroundSquare from '@assets/img/square.png'
import LandingBackgroundCircle from '@assets/img/circle.png'
import LandingBackgroundWaves from '@assets/img/waves.png'
import LandingBackgroundTriangles from '@assets/img/triangles.png'
import LandingMainImage from '@assets/img/watchit_landing_main.svg'
import LandingMainImageLight from '@assets/img/watchit_landing_main_light.svg'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import { MARKETPLACE, APP } from '@navigation/CONSTANTS'
import { AnimationOnScroll } from 'react-animation-on-scroll'

// ===========================|| LANDING - MAIN ||=========================== //

const LandingMain: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <>
      <Container>
        <Grid
          container spacing={3} justifyContent='space-between' alignItems='center'
          sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, mt: { xs: '40%', sm: '-24px' }, ml: { xs: '-12px', sm: '-24px' }, zIndex: 3 }}
        >
          <Grid item xs={12} sm={6} zIndex={10} sx={{ minWidth: '24rem', mt: { xs: '7rem', sm: 0 } }}>
            <Grid container spacing={3} justifyContent='space-between' alignItems='center' sx={{ pr: { xs: 0, md: '80px' } }}>
              <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__fadeOut'>
                <LandingInfo
                  title={<Translation target='LANDING_MAIN_TITLE' />}
                  subTitle={<Translation target='LANDING_MAIN_SUBTITLE' />}
                  titleSx={{ fontSize: { xs: '2.2rem', sm: '3rem', lg: '2.9rem', xl: '3.5rem' } }}
                  contentSx={{ mt: 1, mb: 3 }}
                >
                  <Grid item xs={6} display='flex' sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      color='primary' variant='contained' size='large' disableElevation
                      sx={{ py: 1, px: 8, fontSize: '1.1rem' }} fullWidth href={APP}
                    >
                      <Translation target='LANDING_APP' />
                    </Button>
                  </Grid>
                  <Grid item xs={6} display='flex' sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      color='secondary' variant='outlined' size='large' disableElevation
                      sx={{ py: 1, px: 8, fontSize: '1.1rem' }} fullWidth href={MARKETPLACE}
                    >
                      <Translation target='LANDING_MARKETPLACE' />
                    </Button>
                  </Grid>
                </LandingInfo>
              </AnimationOnScroll>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
              <LandingMainImageContainer>
                {
                  isThemeLight ? <LandingMainImageLight /> : <LandingMainImage />
                }
              </LandingMainImageContainer>
            </AnimationOnScroll>
          </Grid>
        </Grid>
      </Container>
      <LandingMainBackgroundCircle component='img' src={LandingBackgroundCircle} />
      <LandingMainBackgroundSquare component='img' src={LandingBackgroundSquare} />
      <LandingMainBackgroundWaves component='img' src={LandingBackgroundWaves} />
      <LandingMainBackgroundTriangleTop component='img' src={LandingBackgroundTriangles} />
      <LandingMainBackgroundTriangleBottom component='img' src={LandingBackgroundTriangles} />
    </>
  )
}

export const LandingMainImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  top: '30%',
  right: '9%',
  width: '40%',
  zIndex: 4,
  svg: {
    width: '100%',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    top: '10%',
    right: '20%',
    width: '65%'
  },
  [theme.breakpoints.up('lg')]: {
    top: '25%'
  }
}))

export const LandingMainBackgroundCircle = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '8%',
  right: '-5%',
  width: '20%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.up('lg')]: {
    right: '-15%'
  }
}))

export const LandingMainBackgroundSquare = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  bottom: '8%',
  left: '0',
  width: '17%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.1,
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.up('lg')]: {
    left: '-8%'
  }
}))

export const LandingMainBackgroundWaves = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '8%',
  right: '35%',
  width: '20%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.12,
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    top: 0,
    right: '20%',
    width: '30%'
  }
}))

export const LandingMainBackgroundTriangleTop = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '8%',
  left: '-5%',
  width: '13%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.1,
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    width: '22%'
  }
}))

export const LandingMainBackgroundTriangleBottom = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  bottom: '6%',
  right: '24%',
  width: '13%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.1,
  transform: 'rotate(90deg)',
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    width: '22%',
    right: '10%',
    bottom: 0
  }
}))

export default LandingMain
