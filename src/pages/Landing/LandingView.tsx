// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Box, styled, BoxProps, Theme } from '@mui/material'
import { SxProps } from '@mui/system'

// THIRD PARTY IMPORTS
import { Helmet } from 'react-helmet'
import 'animate.css/animate.min.css'

// PROJECT IMPORTS
import LandingPartners from '@pages/Landing/components/LandingPartners'
import LandingDistribution from '@pages/Landing/components/LandingDistribution'
import LandingHeader from '@pages/Landing/components/LandingHeader'
import LandingCoin from '@pages/Landing/components/LandingCoin'
import LandingMain from '@pages/Landing/components/LandingMain'
import LandingTeam from '@pages/Landing/components/LandingTeam'
import LandingApp from '@pages/Landing/components/LandingApp'
import Footer from '@components/Footer'
import LandingSection, { PointsSx } from '@pages/Landing/components/LandingSection'
import LandingPopCorn from '@pages/Landing/components/LandingPopcorn'
import LandingAwesome from '@pages/Landing/components/LandingAwesome'
import LandingMission from '@pages/Landing/components/LandingMission'
import LandingFAQ from '@pages/Landing/components/LandingFAQ'
import LandingRoadmap from '@pages/Landing/components/LandingRoadmap'
import LandingRenting from "@pages/Landing/components/LandingRenting";

// ===========================|| LANDING - VIEW ||=========================== //

export const LandingView: FC = (props): JSX.Element => {
  return (
    <Box position='relative' sx={{ overflow: 'hidden', pb: '3rem' }}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Watchit</title>
        <meta name='description' content='Open movies Everywhere' />
        <meta
          name='keywords'
          content='Watch,WatchIt,Watchit,Movie,Pelicula,NFT,ver pelicula,watch movie'
        />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      </Helmet>
      <LandingHeader {...props} />
      <LandingWrapper sx={Background1Sx}>
        <LandingSection sx={{ backgroundColor: 'transparent', width: '100%', height: '100%', zIndex: 2, pt: 0, pb: 0, position: 'initial', '&::before': { display: 'none' } }}>
          <LandingMain {...props} />
        </LandingSection>
      </LandingWrapper>
      <LandingSection sx={Background2Sx}>
        <LandingMission />
      </LandingSection>
      <LandingSection sx={Background1Sx}>
        <LandingApp />
      </LandingSection>
      <LandingSection sx={Background2Sx}>
        <LandingRenting />
      </LandingSection>
      <LandingSection sx={Background1Sx}>
        <LandingDistribution />
      </LandingSection>
      <LandingSection sx={Background2Sx}>
        <LandingCoin />
      </LandingSection>
      <LandingSection sx={Background1Sx}>
        <LandingRoadmap />
      </LandingSection>
      {/*<LandingSection sx={Background2Sx}>*/}
      {/*  <LandingFAQ />*/}
      {/*</LandingSection>*/}
      <LandingSection sx={Background2Sx}>
        <LandingTeam />
      </LandingSection>
      <LandingSection sx={{ py: '0px !important', '& > div': { maxWidth: 'none', width: '100%' } }}>
        <Footer />
      </LandingSection>
      <LandingPopCorn length={30} />
    </Box>
  )
}

const Background1Sx: SxProps<Theme> = {
  backgroundColor: (theme) => Object.is(theme.palette.mode, 'light')
    ? theme.palette.background.paper
    : theme.palette.background.default,
  backgroundImage: (theme) => Object.is(theme.palette.mode, 'light')
    ? 'linear-gradient(0deg, #fff 0%, #b8d2e4 100%)'
    : 'linear-gradient(0deg, rgba(0,25,44,1) 0%, #070113 80%)'
}

const Background2Sx: SxProps<Theme> = {
  backgroundColor: (theme) => Object.is(theme.palette.mode, 'light')
    ? theme.palette.background.default
    : theme.palette.background.default,
  backgroundImage: (theme) => Object.is(theme.palette.mode, 'light')
    ? 'linear-gradient(0deg, #b8d2e4 0%, #fff 100%)'
    : 'linear-gradient(0deg, #070113 0%, rgba(0,25,44,1) 80%)'
}

export const LandingWrapper = styled(Box)<BoxProps>(() => ({
  overflow: 'hidden',
  height: '100vh',
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  ...PointsSx
}))
