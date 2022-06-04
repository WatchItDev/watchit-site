// REACT IMPORTS
import React, { FC, PropsWithChildren } from 'react'

// MUI IMPORTS
import { Grid, Container, Typography, Theme, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'

// ===========================|| LANDING - INFO ||=========================== //

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

interface LandingInfoProps {
  title: JSX.Element | string
  titleSx?: SxProps<Theme>
  subTitle?: JSX.Element | string
  subTitleSx?: SxProps<Theme>
  contentSx?: SxProps<Theme>
  sx?: SxProps<Theme>
}

const LandingInfo: FC<PropsWithChildren<LandingInfoProps>> = (props): JSX.Element => {
  const theme = useTheme()

  return (
    <Container sx={{ zIndex: 10, ...props.sx }}>
      <Grid container spacing={3} justifyContent='space-between' alignItems='center'>
        <Grid item xs={12}>
          <Typography
            variant='h1' lineHeight={1.4} color={theme.palette.text.primary}
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.5rem', lg: '2.5rem' },
              textAlign: { xs: 'center', sm: 'left' },
              lineHeight: '2.8rem',
              ...props.titleSx
            }}
          >
            {props.title}
          </Typography>
        </Grid>
        {
          props.subTitle
            ? (
              <Grid item xs={12}>
                <Typography
                  variant='h3' color={theme.palette.text.secondary} lineHeight={1.4} fontWeight={400}
                  sx={{ textAlign: { xs: 'center', sm: 'left' }, ...props.subTitleSx }}
                >
                  {props.subTitle}
                </Typography>
              </Grid>
              )
            : <></>
        }
        {
          props.children
            ? (
              <Grid item xs={12}>
                <Grid container spacing={2} sx={{ my: 3, ...props.contentSx }}>
                  {props.children}
                </Grid>
              </Grid>
              )
            : <></>
        }
      </Grid>
    </Container>
  )
}

export default LandingInfo
