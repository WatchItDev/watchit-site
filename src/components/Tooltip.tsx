// REACT IMPORTS
import * as React from 'react'

// MUI IMPORTS
import { Tooltip as TooltipMui, TooltipProps, tooltipClasses, styled } from '@mui/material'

/* eslint-disable  @typescript-eslint/restrict-template-expressions */

// ===========================|| TOOLTIP ||=========================== //

export const LightTooltip = styled(({ className, children, ...props }: TooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }}>{children}</TooltipMui>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    fontSize: '0.75rem',
    fontWeight: 500,
    textAlign: 'center'
  }
}))

const Tooltip = styled(({ className, children, ...props }: TooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }}>{children}</TooltipMui>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    fontSize: '0.75rem',
    fontWeight: 500,
    textAlign: 'center'
  }
}))

export default Tooltip
