// REACT IMPORTS
import React, { FC, PropsWithChildren } from 'react'

// MUI IMPORTS
import { Box, styled, BoxProps } from '@mui/material'
import LandingDotsImg from '@assets/img/dots.png'

// ===========================|| LANDING - SECTION ||=========================== //

const LandingSection: FC<PropsWithChildren<BoxProps>> = ({ children, ...props }): JSX.Element => {
  return (
    <LandingSectionWrapper {...props}>
      <LandingSectionContent>
        {children}
      </LandingSectionContent>
    </LandingSectionWrapper>
  )
}

export const PointsSx = {
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: `url(${LandingDotsImg as string})`,
    backgroundSize: 'contain'
  }
}

export const LandingSectionWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: '150px',
  paddingBottom: '150px',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...PointsSx,
  [theme.breakpoints.down('sm')]: {
    paddingTop: '80px',
    paddingBottom: '80px'
  }
}))

export const LandingSectionContent = styled(Box)<BoxProps>(() => ({
  maxWidth: '1200px',
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export default LandingSection
