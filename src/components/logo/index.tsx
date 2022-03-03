/* eslint-disable */
import React, { useState, useEffect ,FC} from 'react';
import IMG from '@assets/img'
import {
  styled,Box,BoxProps,Typography,TypographyProps
} from '@mui/material'

export const Logo:FC = (): JSX.Element => {
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
        <LogoImg src={IMG.ImgWatchit} />
        <LogoText>
            ATCH 
            <LogoIt color={color}>
                IT
            </LogoIt>
        </LogoText>
    </Container>;
};

const Container = styled(Box)<BoxProps>(() => ({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '1rem 0',
  transform: 'translateX(-5px)'
}))

const LogoImg = styled('img')({
    width: '9rem',
    height: 'auto',
    userSelect: 'none',
    '@media (max-width: 500px)': {
     width: '6rem'
    }
  })

const LogoText = styled(Typography)<TypographyProps>(() => ({
  fontWeight: '600',
  fontSize: '4rem',
  fontFamily: `'Oswald', 'Cantarell', Arial, sans-serif`,
  lineHeight: '1',
  marginLeft: '-0.5rem',
  userSelect: 'none',
  display:'flex',
  '@media (max-width: 500px)': {
    fontsize:  '2.5rem'
  }
}))

const LogoIt = styled(Typography)<{color?:String}>(({color})=>({
  color: `${color}`,
  userSelect: 'none',
  fontWeight: '600',
  fontSize: '4rem',
  fontFamily: `'Oswald', 'Cantarell', Arial, sans-serif`,
  lineHeight: '1',
  '@media (max-width: 500px)': {
    fontsize:  '2.5rem'
  }
}))
