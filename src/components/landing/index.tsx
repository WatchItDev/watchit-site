import React from 'react';
//import styled from 'styled-components';
import Particles from 'react-particles-js';
import config from './particleConfig'
import {Logo} from '../logo'
import {
  Box,
  Grid,
  styled,
  Typography, BoxProps, darken, Container, TextField, Button, Link, Divider
} from '@mui/material'

export const Landing = () => {
    return (
      <>
        <LandingContainer>
          <Container maxWidth="xl">
            <Particles  width="100%" height="100vh" params={config}/>
            <Grid container spacing={1} justifyContent='center' alignItems='center'>
              <Grid item xs={12} md={12} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                    display='flex' justifyContent='center' alignItems='center' flexWrap='nowrap'>
                      <LandingContent>
                          <HeaderContainer>
                              <Logo/>
                              <HeaderSecondary>
                                  open movies everywhere
                              </HeaderSecondary>
                              <BtnContainer>
                                <LandingBtn href="https://github.com/ZorrillosDev/watchit-desktop/releases">
                                  Download
                                </LandingBtn>
                                <LandingBtn href="https://github.com/ZorrillosDev/watchit-desktop">                                        
                                  Github
                                </LandingBtn>
                              </BtnContainer>
                          </HeaderContainer>
                      </LandingContent>
              </Grid>
            </Grid>
          </Container>
        </LandingContainer>
      </>
    )
};

export const HeaderContainer  = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily:` 'Nunito Sans', sans-serif`,
    padding: '6rem 0',
    color: 'white',
    cursor: 'default',
}))

export const LandingContent = styled(Box)<BoxProps>(({ theme }) => ({
    zIndex:'10',
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    top:"20%"
}))

export const LandingContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#141518',
  backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/classroom-19991.appspot.com/o/background.jpg?alt=media&token=6fe95652-44ed-4a83-9364-26740c5bdd63')`,
  backgroundSize: 'cover',
  backgroundPosition:'50% 50%',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const HeaderSecondary  = styled(Box)<BoxProps>(({ theme }) => ({
  fontWeight: '200',
  fontSize: '2rem',
  letterSpacing: '3px',
  wordSpacing: '7px',
  userSelect: 'none',
  
   '@media (max-width: 500px)': {
    fontSize: '1.5rem'
  } 
  }))

export const BtnContainer  = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}))

export const LandingBtn = styled('a')({
  width: '14rem',
  height: '3rem',
  border: '2px solid white',
  color:'white',
  borderRadius: '15px',
  margin: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: 'all 0.1s ease-out',
  textDecoration: 'none ',
  
   '&:hover': {
    transform: 'scale(1.05)',
    backgroundcolor: 'rgba(255,255,255,0.1)'
  },
  
  '@media (max-width: 500px)': {
    margin: '0.5rem'
  } 
})


 export const BtnText = styled(Box)<BoxProps>(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '600',
  color: 'white',
  fontFamily: `'Nunito Sans', sans-serif`,
  userSelect: 'none',

})) 


 
/*   #tsparticles {
    height: 100%;
    width: 100%;
    background: rgb(20,21,24);
    background: linear-gradient(0deg, rgba(20,21,24,1) 0%, rgba(20,21,24,0) 30%, rgba(20,21,24,0) 50%, rgba(20,21,24,0) 70%, rgba(20,21,24,1) 100%);
  } */
/* export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #141518;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/classroom-19991.appspot.com/o/background.jpg?alt=media&token=6fe95652-44ed-4a83-9364-26740c5bdd63');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
 
  #tsparticles {
    height: 100%;
    width: 100%;
    background: rgb(20,21,24);
    background: linear-gradient(0deg, rgba(20,21,24,1) 0%, rgba(20,21,24,0) 30%, rgba(20,21,24,0) 50%, rgba(20,21,24,0) 70%, rgba(20,21,24,1) 100%);
  }
`;

export const LandingContent = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Nunito Sans', sans-serif;
  padding: 6rem 0;
  color: white;
  cursor: default;
`;

export const HeaderSecondary = styled.span`
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: 3px;
  word-spacing: 7px;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LandingBtn = styled.a`
  width: 14rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 15px;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.1s ease-out;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255,255,255,0.1);
  }
  
  @media (max-width: 500px) {
    margin: 0.5rem;
  }
`;

export const BtnText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  font-family: 'Nunito Sans', sans-serif;
  user-select: none;
`; 

 <LandingContainer>
        <Particles width="100%" height="100%" params={config}/>
        <LandingContent>
            <HeaderContainer>
                <Logo />
                <HeaderSecondary>
                    open movies everywhere
                </HeaderSecondary>
            </HeaderContainer>
            <BtnContainer>
                <LandingBtn href="https://github.com/ZorrillosDev/watchit-desktop/releases">
                    <BtnText>
                        Download
                    </BtnText>
                </LandingBtn>
                <LandingBtn href="https://github.com/ZorrillosDev/watchit-desktop">
                    <BtnText>
                        Github
                    </BtnText>
                </LandingBtn>
            </BtnContainer>
        </LandingContent>
</LandingContainer>; */