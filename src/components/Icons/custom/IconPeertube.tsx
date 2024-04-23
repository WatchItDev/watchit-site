// react imports
import React, { FC, ReactElement } from 'react'

// mui imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

// ===========================|| CUSTOM ICON PEERTUBE ||=========================== //

export const IconPeertube: FC<SvgIconProps> = (props): ReactElement => {
  return (
    <SvgIcon {...props} viewBox="0 0 758 654">
      <path d="M245.985 556.239L243.531 91.1902L647.503 321.59L245.985 556.239Z" fill="transparent" stroke="white" strokeWidth="16"/>
      <path d="M256.703 324.876L438.548 215.184L442.621 427.512L256.703 324.876Z" fill="white" stroke="white" strokeWidth="16"/>
    </SvgIcon>
  )
}
