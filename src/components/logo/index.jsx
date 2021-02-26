import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/watchitlogo.png'

export const Logo = () => {
    let [color, setColor] = useState("#fff");
    let colors = ["#43b2f8","#f07a39","#bf357b","#abd462","#409890","#944fc3"];
    let interval = null;

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
        <LogoImg src={logo} />
        <LogoText>
            ATCH
            <LogoIt color={color}>
                IT
            </LogoIt>
        </LogoText>
    </Container>;
};

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem 0;
  transform: translateX(-5px);
`;

const LogoImg = styled.img`
    width: 9rem;
    height: auto;
    user-select: none;
    
    @media (max-width: 500px) {
     width: 6rem;
    }
`;

const LogoText = styled.span`
  font-weight: 600;
  font-size: 4rem;
  font-family: 'Oswald', 'Cantarell', Arial, sans-serif;
  line-height: 1;
  margin-left: -0.5rem;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const LogoIt = styled.span`
  color: ${props => props.color};
  user-select: none;
`;