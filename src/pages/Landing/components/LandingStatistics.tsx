// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, styled, BoxProps, useTheme } from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import LandingStaticsLight from '@assets/img/watchit_statistics_white.svg'
import LandingStatics from '@assets/img/watchit_statistics.svg'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import { Translation } from '@src/i18n'

// ===========================|| LANDING - STATISTICS ||=========================== //

const LandingStatistics: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ zIndex: 2 }}>
      <Grid
        container spacing={3} justifyContent='center' alignItems='center'
        sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, flexWrap: { xs: 'nowrap', sm: 'wrap' } }}
      >
        <Grid item width='100%' xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__fadeOut'>
            <LandingInfo
                title={<Translation target='LANDING_STATISTICS_TITLE' />}
                subTitle={<Translation target='LANDING_STATISTICS_SUBTITLE' />}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
          <AnimationOnScroll
              animateIn='animate__fadeIn' animateOut='animate__fadeOut'
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingStatisticsImage>
              {
                isThemeLight ? <LandingStaticsLight /> : <LandingStatics />
              }
            </LandingStatisticsImage>
          </AnimationOnScroll>
        </Grid>
      </Grid>
    </Container>
  )
}

export const LandingStatisticsImage = styled(Box)<BoxProps>(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  maxWidth: '30rem',
  svg: {
    width: '100%',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '19rem'
  }
}))

export default LandingStatistics
