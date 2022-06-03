// REACT IMPORTS
import React, { FC, PropsWithChildren } from 'react'

// MUI IMPORTS
import {
  Box,
  Collapse, CollapseProps,
  Fade, FadeProps,
  Grow, GrowProps,
  Slide, SlideProps,
  Zoom, ZoomProps
} from '@mui/material'

// ===========================|| TRANSITIONS ||=========================== //

interface TransitionsProps {
  position?: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom'
  type?: 'grow' | 'collapse' | 'fade' | 'slide' | 'zoom'
  direction?: 'left' | 'right' | 'up' | 'down'
}

type MuiTransitions = CollapseProps & FadeProps & GrowProps & SlideProps & ZoomProps

const Transitions: FC<PropsWithChildren<TransitionsProps & MuiTransitions>> = ({ children, position, type, direction, ...others }): JSX.Element => {
  let positionSX

  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      }
      break
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      }
      break
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      }
      break
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      }
      break
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      }
      break
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      }
      break
  }

  return (
    <>
      {type === 'grow' && (
        <Grow {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'collapse' && (
        <Collapse {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Collapse>
      )}
      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 500,
            enter: 600,
            exit: 400
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
      {type === 'slide' && (
        <Slide
          {...others}
          timeout={{
            appear: 0,
            enter: 400,
            exit: 200
          }}
          direction={direction}
        >
          <Box sx={positionSX}>{children}</Box>
        </Slide>
      )}
      {type === 'zoom' && (
        <Zoom {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Zoom>
      )}
    </>
  )
}

Transitions.defaultProps = {
  type: 'grow',
  position: 'top-left',
  direction: 'up'
}

export default Transitions
