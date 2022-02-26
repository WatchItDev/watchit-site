import React, { FC } from 'react'

import {
  Box,
  Grid,
  styled,
  Typography, BoxProps, darken, Container, TextField, Button, Link, Divider,Avatar
} from '@mui/material'


interface IProps{
  data:any
}

const Contributors :FC<IProps> =(props): JSX.Element => {
    return(
        <>
          <ImagesContainer>
              {
                props.data?.map((el:any) => {
                    return <ImageWrapper href={el.profile} key={el.login}>
                              <Image src={el?.avatar_url}/>
                            </ImageWrapper>
                })
              } 
          </ImagesContainer>
        </>
    )
}

export default Contributors

const ImagesContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}))

const ImageWrapper =styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'column'
})

const Image =styled('img')({
  width: 'auto',
  height: '6rem',
  margin: '1.5rem',
  borderRadius: '50%',
  border: '4px solid #e58e26'
  //borderRadius: `${(props:any) => props.rounded ? 50 : 0}%`,
  //border: `${(props:any) => props.rounded ? 4 : 0}px solid #e58e26`
})