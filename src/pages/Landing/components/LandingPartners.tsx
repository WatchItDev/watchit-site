// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Typography, Container, Box, styled, ButtonProps, Button, useTheme, BoxProps } from '@mui/material'

// PROJECT IMPORTS
import LandingInfo from '@pages/Landing/components/LandingInfo'
import zorrillos from '@assets/img/zorrillos_dev_logo.png'
import zorrillosDark from '@assets/img/zorrillos_dev_logo_dark.png'
import { Translation } from '@src/i18n'
import LandingBackgroundCircle from '@assets/img/circle.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

// ===========================|| LANDING - PARTNERS ||=========================== //

const LandingPartners: FC = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={10} alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6} zIndex={10}>
              <AnimationOnScroll animateOut='animate__fadeOut' animateIn='animate__bounceIn'>
                <LandingInfo
                  title={<Translation target='LANDING_PARTNERS_TITLE' />}
                  subTitle={<Translation target='LANDING_PARTNERS_SUBTITLE' />}
                  titleSx={{ textAlign: 'center' }}
                  subTitleSx={{ textAlign: 'center' }}
                />
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6} alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={6} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
              <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                <LandingPartnerImage component='img' src={Object.is(theme.palette.mode, 'light') ? zorrillos : zorrillosDark} />
              </AnimationOnScroll>
            </Grid>
            <Grid item xs={12} md={6} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
              <AnimationOnScroll
                animateIn='animate__bounceIn' animateOut='animate__fadeOut'
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <LandingPartnerButton>
                  <Typography
                    variant='h3' lineHeight={1.4} fontWeight={400}
                    color={Object.is(theme.palette.mode, 'light') ? theme.palette.primary.dark : 'text.primary'}
                  >
                    <Translation target='LANDING_PARTNERS_BUTTON' />
                  </Typography>
                </LandingPartnerButton>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LandingPartnersBackgroundCircle component='img' src={LandingBackgroundCircle} />
    </Container>
  )
}

export const LandingPartnerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  height: '10rem',
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='${Object.is(theme.palette.mode, 'light') ? `%23${theme.palette.primary.dark.replace('#', '')}FF` : 'white'}' stroke-width='3' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
  borderRadius: '1rem',
  padding: '2rem',
  color: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.dark : theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    height: '6rem'
  }
}))

export const LandingPartnerImage = styled(Box)<BoxProps & { src: string }>(() => ({
  width: '12rem'
}))

export const LandingPartnersBackgroundCircle = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  width: '20%',
  top: '-35%',
  left: '5%',
  height: 'auto',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.up('lg')]: {
    right: '-15%'
  }
}))

export default LandingPartners
