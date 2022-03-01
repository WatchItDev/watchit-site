/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ICONS from '@assets/img'
import {
  styled,
} from '@mui/material'

export const Logo = () => {
    let [color, setColor] = useState("#fff");
    let colors = ["#43b2f8","#f07a39","#bf357b","#abd462","#409890","#944fc3"];
    let interval: NodeJS.Timeout;

    function getRandomMedia() {
        let length = colors.length;
        return colors[Math.floor(Math.random() * (length + 1))];
    }

    useEffect(() => {
        interval = setInterval(() => setColor(getRandomMedia()), 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <Container>
        <LogoImg src={ICONS.IconWatchit} />
        <LogoText>
            ATCH
            <LogoIt color={color}>
                IT
            </LogoIt>
        </LogoText>
    </Container>;
};

const Container = styled('div')({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '1rem 0',
  transform: 'translateX(-5px)'
})

const LogoImg = styled('img')({
    width: '9rem',
    height: 'auto',
    userSelect: 'none',
    '@media (max-width: 500px)': {
     width: '6rem'
    }
  })

const LogoText = styled('span')({
  fontWeight: '600',
  fontSize: '4rem',
  fontFamily: `'Oswald', 'Cantarell', Arial, sans-serif`,
  lineHeight: '1',
  marginLeft: '-0.5rem',
  userSelect: 'none',
  '@media (max-width: 500px)': {
    fontsize:  '2.5rem'
  }
})

const LogoIt = styled('span')<{color?:String}>(({color})=>({
  color: `${color}`,
  userSelect: 'none'
}))
