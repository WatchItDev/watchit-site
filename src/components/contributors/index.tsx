import React, { FC } from 'react'

import {
  Box,
  styled,
  BoxProps,
} from '@mui/material'

export class Contributor {
    profile:string = ''
    login:string = ''
    avatar_url:string = ''
}

interface ContributorsProps{
  data:Contributor[]
}

const Contributors :FC<ContributorsProps> =(props): JSX.Element => {
    return(
        <>
          <ImagesContainer>
              {
                props.data?.map((el) => {
                    return <ImageWrapper href={el?.profile} key={el?.login}>
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
})
