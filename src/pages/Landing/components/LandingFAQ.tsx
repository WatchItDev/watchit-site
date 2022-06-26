// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Container, Box, styled, BoxProps } from '@mui/material'

// PROJECT IMPORTS
import LandingInfo from '@pages/Landing/components/LandingInfo'
import { Translation } from '@src/i18n'
import LandingBackgroundCircle from '@assets/img/circle.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { MainCard } from '@components/Cards'
import AccordionItem from '@components/AccordionItem'

// ===========================|| LANDING - FAQ ||=========================== //

const LandingFAQ: FC = (): JSX.Element => {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={10} justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item zIndex={10} xs={12} md={8}>
              <AnimationOnScroll animateOut='animate__fadeOut' animateIn='animate__bounceIn'>
                <LandingInfo
                  title={<Translation target='LANDING_FAQ_TITLE' />}
                  subTitle={<Translation target='LANDING_FAQ_SUBTITLE' />}
                  subTitleSx={{ textAlign: 'center' }}
                  titleSx={{ textAlign: 'center' }}
                />
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ '& .mb-1': { marginBottom: '0.5rem' } }}>
          <Grid container alignItems='center' justifyContent='center'>
            <Grid item xs={12} sm={10} zIndex={10} display='flex' justifyContent='center' alignItems='center'>
              <AnimationOnScroll animateIn='animate__bounceIn' animateOut='animate__fadeOut'>
                <MainCard
                  title='FAQ' content
                  sx={{
                    backgroundColor: (theme) => Object.is(theme.palette.mode, 'light')
                      ? '#fff'
                      : theme.palette.background.paper
                  }}
                >
                  <Grid container direction='column' alignItems='center' justifyContent='center' width='100%'>
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_1' answerTranslation='LANDING_FAQ_ANSWER_1' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_2' answerTranslation='LANDING_FAQ_ANSWER_2' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_3' answerTranslation='LANDING_FAQ_ANSWER_3' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_4' answerTranslation='LANDING_FAQ_ANSWER_4' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_5' answerTranslation='LANDING_FAQ_ANSWER_5' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_6' answerTranslation='LANDING_FAQ_ANSWER_6' />
                    <AccordionItem questionTranslation='LANDING_FAQ_QUESTION_7' answerTranslation='LANDING_FAQ_ANSWER_7' />
                  </Grid>
                </MainCard>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LandingFAQBackground component='img' src={LandingBackgroundCircle} />
    </Container>
  )
}

export const LandingFAQBackground = styled(Box)<BoxProps & { src: string }>(({ theme }) => ({
  position: 'absolute',
  width: '20%',
  top: '-35%',
  right: '5%',
  height: 'auto',
  filter: Object.is(theme.palette.mode, 'light')
    ? 'invert(23%) sepia(25%) saturate(1306%) hue-rotate(148deg) brightness(39%) contrast(67%)'
    : 'none',
  opacity: Object.is(theme.palette.mode, 'light') ? 0.3 : 0.15,
  [theme.breakpoints.up('lg')]: {
    right: '-15%'
  }
}))

export default LandingFAQ
