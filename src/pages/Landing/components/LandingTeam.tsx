// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Link } from '@mui/material'

// PROJECT IMPORTS
import LandingTeamItem from '@pages/Landing/components/LandingTeamItem'
import LandingInfo from '@pages/Landing/components/LandingInfo'
import { Translation } from '@src/i18n'
import { CONTRIBUTIONS } from '@src/config'
import { AnimationOnScroll } from 'react-animation-on-scroll'

// ===========================|| LANDING - TEAM ||=========================== //

const LandingTeam: FC = (): JSX.Element => {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={6} justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={6} zIndex={10}>
          <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
            <LandingInfo
              title={<Translation target='LANDING_TEAM_TITLE' />}
              titleSx={{ textAlign: 'center' }}
              subTitle={<Translation target='LANDING_TEAM_SUBTITLE' />}
              subTitleSx={{ textAlign: 'center' }}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Grid container spacing={3} justifyContent='center' alignItems='center'>
            {
              CONTRIBUTIONS.contributors.map((person) => {
                return (
                  <Grid item xs={6} sm={4} lg={3} zIndex={10} key={person.name}>
                    <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                      <Link href={person.profile} target='_blank' sx={{ textDecoration: 'none' }} rel='noreferrer'>
                        <LandingTeamItem img={person.img} title={person.name} subTitle={person.role} />
                      </Link>
                    </AnimationOnScroll>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingTeam
