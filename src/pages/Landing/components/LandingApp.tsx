// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, styled, BoxProps, Button, useTheme } from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import LandingBackgroundTriangles from '@assets/img/triangles.png'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingAppSvg from '@assets/img/watchit_app.svg'
import LandingAppLight from '@assets/img/watchit_app_light.svg'
import { Translation } from '@src/i18n'
import { APP, APP_DOWNLOAD } from '@navigation/CONSTANTS'

// ===========================|| LANDING - APP ||=========================== //

const LandingApp: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <Grid
        container spacing={3} justifyContent='center' alignItems='center'
        sx={{ flexWrap: { xs: 'nowrap', sm: 'wrap' }, flexDirection: { xs: 'column-reverse', sm: 'row' } }}
      >
        <Grid item xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_APP_TITLE' />}
              subTitle={<Translation target='LANDING_APP_SUBTITLE' />}
              contentSx={{ my: 0 }}
            >
              <Grid item xs={12} md={6} display='flex' sx={{ pt: 0, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  color='primary' variant='contained' size='large' disableElevation
                  sx={{ py: 1, px: 8, fontSize: '1.1rem' }} fullWidth href={APP}
                >
                  <Translation target='LANDING_APP' />
                </Button>
              </Grid>
              <Grid item xs={12} md={6} display='flex' sx={{ pt: 0, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  color='secondary' variant='contained' size='large' disableElevation
                  sx={{ py: 1, px: 8, fontSize: '1.1rem' }} fullWidth href={APP_DOWNLOAD}
                >
                  <Translation target='LANDING_APP_DOWNLOAD' />
                </Button>
              </Grid>
            </LandingInfo>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
          <AnimationOnScroll
            animateIn='animate__fadeIn' animateOut='animate__fadeOut'
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingAppImage sx={{ zIndex: 3 }}>
              {
                isThemeLight ? <LandingAppLight /> : <LandingAppSvg />
              }
            </LandingAppImage>
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <LandingAppBackgroundTriangle component='img' src={LandingBackgroundTriangles} />
    </Container>
  )
}

export const LandingAppImage = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  maxWidth: '30rem',
  zIndex: 2,
  svg: {
    width: '100%',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '19rem'
  }
}))

export const LandingAppBackgroundTriangle = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '-35%',
  left: '5%',
  width: '13%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  height: 'auto',
  transform: 'rotate(90deg)',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    width: '22%',
    top: '-30%'
  }
}))

export default LandingApp
