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

const LandingRenting: FC = (): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')

  return (
    <Container sx={{ zIndex: 2 }}>
      <Grid
        container spacing={3} justifyContent='center' alignItems='center'
        sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' }, flexWrap: { xs: 'nowrap', sm: 'wrap' } }}
      >
        <Grid item xs={12} sm={6} zIndex={10}>
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
        <Grid item xs={12} sm={6} zIndex={10} width='100%'>
          <AnimationOnScroll animateIn='animate__bounceInRight' animateOut='animate__fadeOut'>
            <LandingInfo
              title={
                <>
                  <Translation target='LANDING_JOIN_US_1_TITLE' />
                  {/*<Box display='block'>*/}
                  {/*  <Translation target='LANDING_JOIN_US_1_TITLE_2' />*/}
                  {/*</Box>*/}
                </>
              }
              subTitle={<Box>
                <Translation target='LANDING_JOIN_US_1_SUBTITLE' />
                <Typography
                  variant='h4' color={theme.palette.text.secondary} lineHeight={1.4} fontWeight={400}
                  sx={{ textAlign: { xs: 'center', sm: 'left' }, mt: 5 }}
                >
                  <Translation target='LANDING_JOIN_US_1_SUBTITLE_2' />
                </Typography>
              </Box>}
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

export default LandingRenting
