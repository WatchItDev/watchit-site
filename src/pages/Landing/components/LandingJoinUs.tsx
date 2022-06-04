// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, Button, styled, BoxProps, useTheme } from '@mui/material'

// THIRD PARTY IMPORTS
import { AnimationOnScroll } from 'react-animation-on-scroll'

// PROJECT IMPORTS
import { Translation } from '@src/i18n'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import LandingInvest from '@assets/img/watchit_invest.svg'
import LandingInvestLight from '@assets/img/watchit_invest_light.svg'
import LandingCommunity from '@assets/img/watchit_community.svg'
import LandingCommunityLight from '@assets/img/watchit_community_light.svg'
import { MARKETPLACE } from '@navigation/CONSTANTS'

// ===========================|| LANDING - JOIN US ||=========================== //

const LandingJoinUs: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ zIndex: 2 }}>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
        <LandingJoinUsImage sx={{ top: { xs: '-5rem', sm: '-2%', md: '-5%' }, right: { xs: 'calc(50% - 8rem)', sm: '3%' }, width: { xs: '16rem', sm: '30%' }, zIndex: 3 }}>
          {
            isThemeLight ? <LandingInvestLight /> : <LandingInvest />
          }
        </LandingJoinUsImage>
      </AnimationOnScroll>
      <Grid container spacing={3} justifyContent='space-between' alignItems='center' sx={{ pt: { xs: '13rem', sm: 0 } }}>
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
        <Grid item xs={12} sm={6} zIndex={10} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
          <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_JOIN_US' />}
              titleSx={{ textAlign: 'center', mt: { xs: '2rem', sm: '4rem' }, textTransform: 'uppercase' }}
              contentSx={{ alignItems: 'center', justifyContent: 'center', mt: '-1rem', mb: '5rem' }}
            >
              <Grid item xs={12} md={4} display='flex' alignItems='center' justifyContent='center' sx={{ maxWidth: 'inherit !important', flexBasis: 'max-content !important' }}>
                <Button
                  variant='outlined' size='large' disableElevation fullWidth href={MARKETPLACE} color='secondary'
                  sx={{ py: 1, px: 6, fontSize: '1.1rem', maxWidth: '17rem' }}
                >
                  <Translation target='LANDING_JOIN_US_BUTTON' />
                </Button>
              </Grid>
            </LandingInfo>
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent='space-between' alignItems='center' sx={{ pt: { xs: '13rem', sm: 0 } }}>
        <Grid item xs={12} sm={6} zIndex={10} />
        <Grid item xs={12} sm={6} zIndex={10}>
          <AnimationOnScroll animateIn='animate__bounceInRight' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_JOIN_US_2_TITLE' />}
              subTitle={<Translation target='LANDING_JOIN_US_2_SUBTITLE' />}
            />
          </AnimationOnScroll>
        </Grid>
      </Grid>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate__fadeOut'>
        <LandingJoinUsImage sx={{ bottom: { xs: '13rem', sm: '0', md: '-5%' }, left: { xs: 'calc(50% - 8rem)', sm: '5%' }, width: { xs: '16rem', sm: '30%' }, zIndex: 3 }}>
          {
            isThemeLight ? <LandingCommunityLight /> : <LandingCommunity />
          }
        </LandingJoinUsImage>
      </AnimationOnScroll>
    </Container>
  )
}

export const LandingJoinUsImage = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  zIndex: 2,
  svg: {
    width: '100%',
    height: 'auto'
  }
}))

export default LandingJoinUs
