// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, Link, Button } from '@mui/material'

// PROJECT IMPORTS
import LandingInfo from '@pages/Landing/components/LandingInfo'
import orbit from '@assets/img/orbitdb.png'
import ipfs from '@assets/img/ipfs.png'
import { Translation } from '@src/i18n'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { DOCS } from '@navigation/CONSTANTS'

// ===========================|| LANDING - AWESOME ||=========================== //

const LandingAwesome: FC = (): JSX.Element => {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={10} justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6} zIndex={10}>
              <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                <LandingInfo
                  title={<Translation target='LANDING_TOOLS_TITLE' />}
                  titleSx={{ textAlign: 'center' }}
                  subTitle={<Translation target='LANDING_TOOLS_SUBTITLE' />}
                  subTitleSx={{ textAlign: 'center' }}
                  contentSx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Grid item xs={12} sm={6} display='flex' sx={{ justifyContent: { xs: 'center', md: 'center' } }}>
                    <Button
                      color='secondary' variant='contained' size='large' disableElevation
                      sx={{ py: 1, px: 8, fontSize: '1.1rem' }} fullWidth href={DOCS}
                    >
                      Github
                    </Button>
                  </Grid>
                </LandingInfo>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6} justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
              <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                <Link href='https://github.com/orbitdb/awesome-orbitdb'>
                  <Box width='20rem' component='img' src={orbit} />
                </Link>
              </AnimationOnScroll>
            </Grid>
            <Grid item xs={12} md={6} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
              <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                <Link href='https://awesome.ipfs.io/'>
                  <Box width='14rem' component='img' src={ipfs} />
                </Link>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingAwesome
