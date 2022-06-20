// REACT IMPORTS
import React, { FC, useLayoutEffect, useState } from 'react'

// MUI IMPORTS
import {Box, styled, BoxProps, Typography, TypographyProps} from '@mui/material'
import { IconCopy } from '@tabler/icons'

// PROJECT IMPORTS
import { String } from '@src/utils'

// ===========================|| LANDING - KEY ||=========================== //

/* eslint-disable  @typescript-eslint/strict-boolean-expressions */
/* eslint-disable  @typescript-eslint/no-floating-promises */

interface KeyElement {
  from: string
  to: string
  start: number
  end: number
  char?: string
}

interface LandingKeyProps {
  text: string,
  delay?: number
}

const LandingKey: FC<LandingKeyProps> = (props): JSX.Element => {
  const [copied, setCopied] = useState(false)
  const chars = '!<>-_\\/[]{}—=+*^?#________QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let el: HTMLElement | null = null
  let queue: KeyElement[] = []
  let frameRequest: any
  let frame = 0

  useLayoutEffect(() => {
    el = document.querySelector('#landingKey')
    setTimeout(()=> {
      setText(props.text)
    }, props.delay ?? 500)
  }, [])

  const setText = (newText: string): void => {
    new Promise((resolve) => {
      if (el == null) return
      const oldText = el.innerText
      const length = Math.max(oldText.length, newText.length)
      queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(frameRequest)
      frame = 0
      update(() => {
        resolve(true)
      })()
    }).then(() => {})
  }

  const update = (onComplete: () => void) => (): void => {
    if (el == null) return
    let output = ''
    let complete = 0
    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i]
      if (frame >= end) {
        complete++
        output += to
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar()
          queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    el.innerHTML = output
    if (complete === queue.length) {
      onComplete()
    } else {
      frameRequest = requestAnimationFrame(update(onComplete))
      frame++
    }
  }

  const randomChar = (): string => {
    return chars[Math.floor(Math.random() * chars.length)]
  }

  const handleOnClick = (): void => {
    String.copyToClipboard(props.text)

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 500)
  }

  return (
    <LandingKeyWrapper onClick={handleOnClick} color={(theme) => copied ? theme.palette.success.dark : 'inherit'}>
      <LandingKeyText
        variant='h5' color='inherit' id='landingKey'
        lineHeight={1.4} fontWeight={400}
      />
      <LandingKeyIcon>
        <IconCopy stroke={1.5} />
      </LandingKeyIcon>
    </LandingKeyWrapper>
  )
}

export const LandingKeyWrapper = styled(Box)<BoxProps>(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '1rem',
  cursor: 'pointer',
  transition: 'all 0.5s ease-in-out',
  '.dud': {
    opacity: 0.6
  }
}))

export const LandingKeyText = styled(Typography)<TypographyProps>(() => ({
  maxWidth: 'calc(100% - 1.5rem)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}))

export const LandingKeyIcon = styled(Box)<BoxProps>(() => ({
  width: '1rem',
  height: '1rem',
  marginLeft: '0.5rem',
  svg: {
    width: '100%',
    height: 'auto'
  }
}))

export default LandingKey
