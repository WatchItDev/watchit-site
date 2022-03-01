import React from 'react';
import Particles from 'react-particles-js';
import config from './particleConfig'
import {Logo} from '../logo'
import { Translation } from '@src/i18n'
import {
  Box,
  Grid,
  styled,
  BoxProps, Container,
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
                                  <Translation target='GLOBAL_SLOGAN'/>
                              </HeaderSecondary>
                              <BtnContainer>
                                <LandingBtn href="https://github.com/ZorrillosDev/watchit-desktop/releases">
                                  <Translation target='GLOBAL_DOWNLOAD'/>
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
