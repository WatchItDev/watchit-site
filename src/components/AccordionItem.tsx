// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import {
  Accordion, AccordionDetails,
  AccordionSummary, Typography
} from '@mui/material'

// PROJECT IMPORTS
import { ExpandMore } from '@components/Icons'
import { Translation, translationString } from '@src/i18n'

// ===========================|| ACCORDION - ITEM ||=========================== //

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

interface AccordionItemProps {
  question?: string
  questionTranslation?: string
  answer?: string
  answerTranslation?: string
}

const AccordionItem: FC<AccordionItemProps> = (props): JSX.Element => {
  return (
    <Accordion sx={{ width: 1, backgroundColor: 'transparent', '&::before': { backgroundColor: '#bdc8f033' } }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant='h4' sx={{ color: (theme) => theme.palette.grey[700] }}>
          {props.question && props.question}
          {props.questionTranslation && <Translation target={props.questionTranslation ?? ''} />}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='h4' sx={{ color: (theme) => theme.palette.grey[500] }}>
          {props.answer && props.answer}
          {props.answerTranslation && translationString({ target: props.answerTranslation ?? '' })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionItem
