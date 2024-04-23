// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Box, Grid, styled, Typography, BoxProps, darken, Container, Link, Divider, useTheme } from '@mui/material'

// PROJECT IMPORTS
import Logo from '@assets/img/watchit_logo.svg'
import Mastodon from '@assets/img/mastodon.svg'
import { FooterSections } from '@src/config'
import {
  IconBrandReddit,
  IconBrandTelegram
} from '@tabler/icons'
import {
  MATRIX,
  MASTODON,
  REDDIT,
  TELEGRAM,
  PEERTUBE
} from '@navigation/CONSTANTS'
import { IconBrandMatrix } from '@components/Icons'
import { Random } from "@src/utils";
import {IconPeertube} from "@components/Icons/custom/IconPeertube";

// ===========================|| FOOTER ||=========================== //

const Footer: FC = (): JSX.Element => {
  const theme = useTheme()

  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={1} justifyContent='center' alignItems='center'>
          <Grid
            item xs={12} sm={5} display='flex'
            sx={{
              alignItems: { xs: 'center', sm: 'start' },
              justifyContent: { xs: 'center', sm: 'start' },
              mb: { xs: 3, sm: 0 }
            }}
          >
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' sx={{ mr: { xs: 0, sm: 4 } }}>
              <FooterLogoWrapper>
                <Logo />
              </FooterLogoWrapper>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='nowrap' sx={{ mt: 1 }}>
                <Link href={TELEGRAM} target='_blank' rel='noreferrer'>
                  <FooterSocialItem>
                    <IconBrandTelegram stroke={1} />
                  </FooterSocialItem>
                </Link>
                <Link href={REDDIT} target='_blank' rel='noreferrer'>
                  <FooterSocialItem>
                    <IconBrandReddit stroke={1} />
                  </FooterSocialItem>
                </Link>
                <Link href={MATRIX} target='_blank' rel='noreferrer'>
                  <FooterSocialItem>
                    <IconBrandMatrix sx={{ width: '1.8em' }} />
                  </FooterSocialItem>
                </Link>
                <Link href={MASTODON} target='_blank' rel='noreferrer'>
                  <FooterSocialItem>
                    <Mastodon />
                  </FooterSocialItem>
                </Link>
                <Link href={PEERTUBE} target='_blank' rel='noreferrer'>
                  <FooterSocialItem>
                    <IconPeertube />
                  </FooterSocialItem>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }} />
          <Grid item xs={12} sm={5}>
            <Grid container spacing={1} sx={{ justifyContent: { xs: 'center', sm: 'end' } }}>
              {
                Object.keys(FooterSections).map((sectionKey) => {
                  const section = FooterSections[sectionKey]

                  return (
                    <Grid item xs={4} sm={4} key={Random.getRandomNumberBetween(0,1000)}>
                      <Grid container spacing={0.3}>
                        <Grid item xs={12}>
                          <Typography
                            gutterBottom variant='h3'
                            color={Object.is(theme.palette.mode, 'light') ? 'primary.light' : 'text.primary'}
                          >
                            {sectionKey}
                          </Typography>
                        </Grid>
                        {
                          section.map((item) => {
                            return (
                              <Grid item xs={12} key={Random.getRandomNumberBetween(0,1000)}>
                                {
                                  item.obj ? (
                                    <Link
                                      color={Object.is(theme.palette.mode, 'light') ? 'primary.light' : 'text.primary'}
                                      variant='body2' href={item?.obj?.url} target='_blank'
                                    >
                                      {item?.obj?.name}
                                    </Link>
                                  ) : item.content
                                }
                              </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mt: 3, mb: 2, opacity: 0.4, borderColor: (theme) => theme.palette.background.paper }} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='body1' color={Object.is(theme.palette.mode, 'light') ? 'primary.light' : 'text.primary'} textAlign='center'
              fontWeight={400} width={1} sx={{ marginBottom: 2 }}
            >
              © 2022 ZorrillosDev Comunity
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

export default Footer

export const FooterWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  zIndex: 2,
  paddingTop: theme.spacing(5),
  marginBottom: '-3rem',
  borderTop: `1px solid ${theme.palette.background.paper}`,
  backgroundColor: Object.is(theme.palette.mode, 'light')
    ? darken(theme.palette.primary.dark, 0.6)
    : darken(theme.palette.background.default, 0.2),
  a: {
    opacity: 0.6,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export const FooterLogoWrapper = styled(Box)<BoxProps>(() => ({
  width: '10rem',
  height: '5rem',
  position: 'relative',
  flexShrink: 0,
  svg: {
    position: 'absolute',
    top: '-2.5rem',
    left: 0,
    width: '100%',
    height: 'auto'
  }
}))

export const FooterSocialItem = styled(Box)<BoxProps>(({ theme }) => ({
  color: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.light : theme.palette.text.primary,
  stroke: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.light : theme.palette.text.primary,
  position: 'relative',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 400,
  padding: '0.2rem',
  '&:hover': {
    color: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.dark : theme.palette.primary.main,
    stroke: Object.is(theme.palette.mode, 'light') ? theme.palette.primary.dark : theme.palette.primary.main,
    textDecoration: 'underline'
  },
  'svg': {
    stroke: 'inherit',
    minWidth: '1.2rem',
    height: 'auto'
  }
}))
