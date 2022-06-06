// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Box, styled, BoxProps } from '@mui/material'

// PROJECT IMPORTS
import { Translation } from '@src/i18n'

// ===========================|| LANDING - COMING SOON ||=========================== //

const LandingComingSoon: FC<BoxProps> = (props): JSX.Element => {
  return (
    <LandingComingSoonWrapper {...props}>
      <Translation target='LANDING_COIN_COMING_SOON' />
    </LandingComingSoonWrapper>
  )
}

const LandingComingSoonWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  top: '-2.5rem',
  lineHeight: 1.5,
  right: 0,
  padding: '0.1rem 0.5rem',
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '15px',
  color: theme.palette.secondary.main,
  fontSize: '1rem !important'
}))

export default LandingComingSoon
