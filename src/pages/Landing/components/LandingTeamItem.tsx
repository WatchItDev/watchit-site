// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Typography, Box, styled, BoxProps } from '@mui/material'

// ===========================|| LANDING - TEAM - ITEM ||=========================== //

interface LandingTeamItemProps {
  img: string
  title: string
  subTitle: string
}

const LandingTeamItem: FC<LandingTeamItemProps> = (props): JSX.Element => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <LandingTeamImageContainer>
        <Box component='img' src={props.img} alt='customer_testimonial' />
      </LandingTeamImageContainer>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h3' color='primary' textAlign='center' sx={{ mt: 1, mb: 0.5 }}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} flexGrow={1} height='6.5rem'>
          <Typography variant='h4' color='text.primary' fontWeight={400} textAlign='center' sx={{ mt: 1 }}>
            {props.subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export const LandingTeamImageContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '5rem',
  height: '5rem',
  background: 'linear-gradient(0deg, rgba(49,0,128,1) 0%, rgba(0,149,195,1) 100%)',
  borderRadius: '50%',
  padding: '3px',
  marginBottom: '1rem',
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  }
}))

export default LandingTeamItem
