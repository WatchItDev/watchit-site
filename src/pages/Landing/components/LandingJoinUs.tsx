// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, styled, BoxProps, useTheme } from '@mui/material'

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

const LandingJoinUs: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ zIndex: 2 }}>
      {/* <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut'> */}
      {/*  <LandingJoinUsImage sx={{ top: { xs: '-5rem', sm: '-2%', md: '-5%' }, right: { xs: 'calc(50% - 8rem)', sm: '3%' }, width: { xs: '16rem', sm: '30%' }, zIndex: 3 }}> */}
      {/*    { */}
      {/*      isThemeLight ? <LandingInvestLight /> : <LandingInvest /> */}
      {/*    } */}
      {/*  </LandingJoinUsImage> */}
      {/* </AnimationOnScroll> */}
      <Grid
        container spacing={3} justifyContent='center' alignItems='center'
        sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, flexWrap: { xs: 'nowrap', sm: 'wrap' } }}
      >
        <Grid item xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOut='animate__fadeOut'>
            <LandingInfo
              title={
                <>
                  <Translation target='LANDING_JOIN_US_1_TITLE' />
                  <Box display='block'>
                    <Translation target='LANDING_JOIN_US_1_TITLE_2' />
                  </Box>
                </>
              }
              subTitle={<Translation target='LANDING_JOIN_US_1_SUBTITLE' />}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
          <AnimationOnScroll
            animateIn='animate__fadeIn' animateOut='animate__fadeOut'
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <LandingJoinUsImage>
              {
                isThemeLight ? <LandingInvestLight /> : <LandingInvest />
              }
            </LandingJoinUsImage>
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
          <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_JOIN_US' />}
              titleSx={{ color: theme.palette.secondary.main, textAlign: 'center', mt: { xs: '6rem', sm: '4rem' }, mb: { xs: '2rem', sm: '1rem' }, textTransform: 'uppercase' }}
              contentSx={{ padding: '0', margin: 0 }}
            />
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
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
        <Grid item xs={12} sm={6} zIndex={10} sx={{ position: 'relative' }}>
          <AnimationOnScroll animateIn='animate__bounceInRight' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_JOIN_US_2_TITLE' />}
              subTitle={<Translation target='LANDING_JOIN_US_2_SUBTITLE' />}
            />
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

export default LandingJoinUs
