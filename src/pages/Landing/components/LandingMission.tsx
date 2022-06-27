// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, styled, BoxProps, useTheme, GridProps } from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import LandingBackgroundTriangles from '@assets/img/triangles.png'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingMissionLight from '@assets/img/our_mission.svg'
import LandingMissionDark from '@assets/img/our_mission_dark.svg'
import { Translation } from '@src/i18n'

// ===========================|| LANDING - APP ||=========================== //

const LandingMission: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <LandingMissionWrapper
        container spacing={3}
        sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, flexWrap: { xs: 'nowrap', sm: 'wrap' } }}
      >
        <Grid item xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll animateOut='animate__fadeOut' animateIn='animate__bounceInLeft'>
            <LandingInfo
              title={<Translation target='LANDING_MISSION_TITLE' />}
              subTitle={<blockquote><Translation target='LANDING_MISSION_SUBTITLE' /></blockquote>}
              titleSx={{ textAlign: 'center' }}
              contentSx={{ my: 0 }}
            >
              <Grid item xs={12} md={6} display='flex'>
                <cite><Translation target='LANDING_MISSION_TEAM' /></cite>
              </Grid>
            </LandingInfo>
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} width='100%' zIndex={10}>
          <AnimationOnScroll
            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            animateIn='animate__fadeIn' animateOut='animate__fadeOut'
          >
            <LandingMissionImage sx={{ zIndex: 3 }}>
              {
                isThemeLight ? <LandingMissionLight /> : <LandingMissionDark />
              }
            </LandingMissionImage>
          </AnimationOnScroll>
        </Grid>
      </LandingMissionWrapper>
      <LandingMissionBackgroundTriangle component='img' src={LandingBackgroundTriangles} />
    </Container>
  )
}

export const LandingMissionWrapper = styled(Grid)<GridProps>(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  blockquote: {
    color: theme.palette.text.primary,
    width: '90%',
    margin: '0 auto',
    position: 'relative',
    textAlign: 'center',
    '&::before,&::after': {
      content: '"“"',
      fontSize: '6rem',
      margin: '-2.5rem 0 0 -2.5rem',
      position: 'absolute',
      opacity: 0.5,
      left: 0
    },
    '&::after': {
      content: '"”"',
      margin: '-1rem -4rem 0 0',
      right: '2rem',
      left: 'auto'
    }
  }
}))

export const LandingMissionImage = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  zIndex: 2,
  maxWidth: '30rem',
  svg: {
    height: 'auto',
    width: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '19rem'
  }
}))

export const LandingMissionBackgroundTriangle = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  top: '-35%',
  width: '13%',
  left: '5%',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  transform: 'rotate(90deg)',
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  [theme.breakpoints.down('sm')]: {
    top: '-30%',
    width: '22%'
  }
}))

export default LandingMission
