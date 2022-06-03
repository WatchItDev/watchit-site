// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Box, styled, BoxProps, useTheme } from '@mui/material'

// PROJECT IMPORTS
import Popcorn_1 from '@assets/img/popcorn_1.svg'
import Popcorn_2 from '@assets/img/popcorn_2.svg'
import Popcorn_3 from '@assets/img/popcorn_3.svg'
import Popcorn_4 from '@assets/img/popcorn_4.svg'
import Popcorn_5 from '@assets/img/popcorn_5.svg'
import Popcorn_6 from '@assets/img/popcorn_6.svg'
import Popcorn_7 from '@assets/img/popcorn_7.svg'
import Popcorn_8 from '@assets/img/popcorn_8.svg'
import Popcorn_9 from '@assets/img/popcorn_9.svg'
import { Random } from '@src/utils'

// ===========================|| LANDING - POPCORN ||=========================== //

interface LandingPopcornProps {
  length: number
}

const LandingPopCorn: FC<LandingPopcornProps> = ({ length }): JSX.Element => {
  const theme = useTheme()
  const isThemeLight = Object.is(theme.palette.mode, 'light')
  const popcornArr = [
    Popcorn_1, Popcorn_2, Popcorn_3, Popcorn_4, Popcorn_5,
    Popcorn_6, Popcorn_7, Popcorn_8, Popcorn_9
  ]

  return (
    <>
      {
        new Array(length).fill('0').map((_, i) => {
          const x = Random.getRandomNumberBetween(0, 100)
          const y = Random.getRandomNumberBetween(0, 95)
          const w = Random.getRandomNumberBetween(2, 6)
          const opacity = Random.getRandomNumberBetween(isThemeLight ? 20 : 5, isThemeLight ? 70 : 20)
          const rotate = Random.getRandomNumberBetween(0, 360)
          const Popcorn = Random.getRandomValueFromArray(popcornArr)

          return (
            <LandingPopcornItem sx={{ top: `${y}%`, left: `${x}%`, width: `${w}rem`, opacity: opacity / 100, transform: `rotate(${rotate}deg)` }} key={i}>
              <Popcorn />
            </LandingPopcornItem>
          )
        })
      }
    </>
  )
}

export const LandingPopcornItem = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  zIndex: 1,
  svg: {
    width: '100%',
    height: 'auto'
  }
}))

export default LandingPopCorn
