// REACT IMPORTS
import React, { ReactElement } from 'react'

// MUI IMPORTS
import { Card, CardContent, CardHeader, CardProps, Divider, Theme, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */

// ===========================|| CARD - MAIN ||=========================== //

export interface MainCardProps extends Omit<CardProps, 'title'> {
  border?: boolean
  boxShadow?: boolean
  content?: boolean
  contentSx?: SxProps<Theme>
  secondary?: React.ReactNode | string
  shadow?: string
  sx?: SxProps<Theme>
  title?: ReactElement | string
}

const MainCard = React.forwardRef<HTMLDivElement, MainCardProps>(({ border, content, contentSx, boxShadow, title, ...props }, ref) => {
  const theme = useTheme()

  return (
    <Card
      {...props}
      ref={ref}
      sx={{
        border: border ? '1px solid' : 'none',
        borderColor: theme.palette.primary.light,
        ':hover': {
          boxShadow: boxShadow ? props.shadow ?? '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
        },
        ...props.sx
      }}
    >
      {/* card header and action */}
      {title && <CardHeader sx={{ p: 2, '& .MuiCardHeader-action': { mr: 0 } }} title={title} action={props.secondary} />}

      {/* content & header divider */}
      {title && <Divider />}

      {/* card content */}
      {content && (
        <CardContent sx={contentSx}>
          {props.children}
        </CardContent>
      )}
      {!content && props.children}
    </Card>
  )
})

export default MainCard
