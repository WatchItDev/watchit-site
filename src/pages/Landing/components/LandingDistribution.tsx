// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import {Grid, Container, Box, styled, BoxProps, useTheme, Typography} from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import LandingCommunityLight from '@assets/img/watchit_community_light.svg'
import LandingInvestLight from '@assets/img/watchit_invest_light.svg'
import LandingCommunity from '@assets/img/watchit_community.svg'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingInvest from '@assets/img/watchit_invest.svg'
import { Translation } from '@src/i18n'

// ===========================|| LANDING - JOIN US ||=========================== //

const LandingDistribution: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ zIndex: 2 }}>
      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_JOIN_US_2_TITLE' />}
              subTitle={<Translation target='LANDING_JOIN_US_2_SUBTITLE' />}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} zIndex={10} sx={{ position: 'relative' }}>
          <AnimationOnScroll
            animateIn='animate__fadeIn' animateOut='animate__fadeOut'
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingJoinUsImage>
              {
                isThemeLight ? <LandingCommunityLight /> : <LandingCommunity />
              }
            </LandingJoinUsImage>
          </AnimationOnScroll>
        </Grid>
      </Grid>
    </Container>
  )
}

export const LandingJoinUsImage = styled(Box)<BoxProps>(({ theme }) => ({
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

export default LandingDistribution
