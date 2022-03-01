import React, { FC } from 'react'

// MUI IMPORTS
import {
  Box,
  Grid,
  styled,
  Typography, BoxProps, Container,
} from '@mui/material'

const Footer: FC = (): JSX.Element => {
    return( 
          <FooterWrapper>
                <Container>
                    <Grid container spacing={1} justifyContent='center' alignItems='center'>
                        <Grid item xs={12} md={5} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                              display='flex' justifyContent='center' alignItems='center' flexWrap='nowrap'>
                                <Typography  variant="h3">© 2021 ZorrillosDev Community.</Typography>
                        </Grid>
                    </Grid>
                </Container> 
          </FooterWrapper>
    )
}

export default Footer

export const FooterWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  background: '#14161b',
  padding:'3rem 0 3rem',
  color:'#eee',
  boxShadow:'0 0px 17px 0 rgba(0,0,0,0.2), 0 36px 94px 0 rgba(0,0,0,0.19)',
  fontFamily:` 'Nunito Sans', sans-serif`,

    h3:{
      fontSize:'0.8rem',
      fontFamily:` 'Nunito Sans', sans-serif`,
      fontWeight:'normal',
      wordSpacing:'2px'
      
    }
}))
