// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import {Grid, Container, Box, styled, BoxProps, Typography, useTheme} from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingBackgroundWaves from '@assets/img/waves.png'
import Arrow from '@assets/img/landing_arrow.svg'
import { RoadMapSections } from "@src/config";
import { Translation } from '@src/i18n'
import LandingRoadmapLight from "@assets/img/roadmap.svg";
import LandingRoadmapDark from "@assets/img/roadmap_dark.svg";

// ===========================|| LANDING - ROADMAP ||=========================== //

const LandingRoadmap: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={10} alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6} zIndex={10}>
              <AnimationOnScroll animateOut='animate__fadeOut' animateIn='animate__bounceIn'>
                <LandingInfo
                  title={<Translation target='LANDING_ROADMAP_TITLE' />}
                  subTitle={<Translation target='LANDING_ROADMAP_SUBTITLE' />}
                  titleSx={{ textAlign: 'center' }}
                  subTitleSx={{ textAlign: 'center' }}
                />
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            {
              RoadMapSections.map(el => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} zIndex={10} key={Math.random()}>
                    <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                      <Grid container spacing={5}>
                        <Grid item xs={12}>
                          <LandingRoadmapArrowWrapper color={el.color}>
                            <Arrow />
                          </LandingRoadmapArrowWrapper>
                          <Typography
                            variant='h3' color={el.color} lineHeight={1.4} fontWeight={400} typography={'Oswald'}
                          >
                            {el.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={1}>
                            {
                              el.items.map(obj => {
                                return (
                                  <Grid item xs={12} key={Math.random()}>
                                    <Typography
                                      variant='h3' lineHeight={1.4} fontWeight={400}
                                      sx={{ textDecoration: obj.done ? 'line-through' : 'none' }}
                                    >
                                      <Translation target={obj.name} />
                                    </Typography>
                                  </Grid>
                                )
                              })
                            }
                          </Grid>
                        </Grid>
                      </Grid>
                    </AnimationOnScroll>
                  </Grid>
                )
              })
            }
            <Grid item xs={12} sm={6} md={4} lg={3} zIndex={10} width='100%'>
              <AnimationOnScroll
                animateIn='animate__fadeIn' animateOut='animate__fadeOut'
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <LandingRoadmapImage sx={{ zIndex: 3 }}>
                  {
                    isThemeLight ? <LandingRoadmapLight /> : <LandingRoadmapDark />
                  }
                </LandingRoadmapImage>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LandingRoadmapBackgroundWaves component='img' src={LandingBackgroundWaves} />
    </Container>
  )
}

export const LandingRoadmapArrowWrapper = styled(Box)<BoxProps & { color:string }>(({ color }) => ({
  width: '100%',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    width: '100%',
    height: 'auto',
    stroke: color,
    fill: color,
    "*": {
      stroke: color,
      fill: color,
    }
  }
}))

export const LandingRoadmapBackgroundWaves = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  width: '24%',
  top: '-25%',
  left: '10%',
  height: 'auto',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none'
}))

export const LandingRoadmapImage = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  maxWidth: '30rem',
  zIndex: 2,
  svg: {
    width: '100%',
    height: 'auto'
  },
  [theme.breakpoints.up('md')]: {
    svg: {
      width: '130%',
      height: 'auto',
      marginLeft: '-10%'
    }
  }
}))

export default LandingRoadmap
