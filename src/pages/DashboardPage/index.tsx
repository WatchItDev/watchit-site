import React,{useRef} from "react";
import {Landing} from "../../components/landing"
import Footer from "../../components/footer"
import Contributors from "../../components/contributors"
import { CONTRIBUTIONS } from "../../config/contributors"; 
import { CopyButton } from "../../components/button/copy"
import orbit2 from '../../assets/img/orbit2.png'
import ipfs from '../../assets/img/ipfs.png'

import {
    Box,
    styled,
    BoxProps
  } from '@mui/material'

const DashboardPage =()=>{
    let pdmRef = useRef(null);

    const copyCodeToClipboard=(ref:any)=>{
        ref.current.select();
        document.execCommand("copy")
    }
        
    return(
        <>
            <DashboardContainer>
                <Landing/>
                    <Content>
                        <Section>
                                <HashesContainer>
                                <Title>Public Domain Movies Key</Title>
                                <HashOption>
                                    <HashClipboard>
                                        <InputElement ref={pdmRef} value={process.env.REACT_APP_PDM_HASH} readOnly/>
                                        {/* <Hash type='text' ref={pdmRef} value={process.env.REACT_APP_PDM_HASH} readOnly/>
                                        <CopyButton copy={() => copyCodeToClipboard(pdmRef)}/> */}
                                        <CopyButton copy={()=>copyCodeToClipboard(pdmRef)}/>
                                    </HashClipboard>
                                </HashOption>
                            </HashesContainer>
                        </Section>
                        <Section>
                    <Title>A movie platform with a decentralized network approach</Title>
                    <Cite>
                        ... watching movies has overwhelmed me, I am simply limited by my time to go to the
                        cinema. I am a movie fan but a developer with very little time to travel hours to buy a ticket
                        and see the "latest" release of the Avengers (plus pandemic factors). <br/><br/>
                        Somehow the internet today helps us to cope with some of these problems, the other problem is
                        that the internet offers very few resources to see good quality movies and those who offer it do
                        so with movies that are definitely not the "last" launch of the Avengers <a
                        href="https://dev.to/geolffreym/watchit-2b88">read more...</a>
                    </Cite>
                </Section>
                <SectionWhite>
                    <SectionContent>
                        <SubSection>
                            <ImageWrapper href="https://orbitdb.org/">
                                <Image src={orbit2}/>
                            </ImageWrapper>
                            <ImageWrapper href="https://ipfs.io/">
                                <Image src={ipfs}/>
                            </ImageWrapper> 
                        </SubSection>
                        <SubSection>
                            <TextContent>
                                We are part of <a href="https://awesome.ipfs.io/">Awesome IPFS</a> and <a
                                href="https://github.com/orbitdb/awesome-orbitdb">Awesome OrbitDb</a>.
                                You can be part of watchit also collaborating with the community, you can check our <a
                                href="https://github.com/ZorrillosDev/watchit-desktop">github</a> for more information.
                            </TextContent>
                        </SubSection>
                    </SectionContent>
                </SectionWhite>
                        <Section>
                            <Contributors data={CONTRIBUTIONS.contributors}/>
                        </Section>
                    </Content>
                <Footer/>
            </DashboardContainer>
        </>
    )
}

export default DashboardPage
const DashboardContainer = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#141518',
    overflow: 'hidden',
    
    '&, & *, :before, :after': {
      boxSizing: 'border-box'
    }
  }))
  
  
  const Content = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  
  const HashesContainer = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }))
  
  const HashOption = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    flexGrow: '1',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 7px 0 rgba(0,0,0,0.2), 0 5px 22px 0 rgba(0,0,0,0.19)',
    margin: '1rem',
    borderRadius: '1rem',
    width: '100% !important',
    padding: '1rem',
    
    '@media (max-width: 500px)': {
      width: '100%'
    }
  }))
  
  const HashClipboard = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: '1rem'
  }))
  
  const InputElement = styled('input')({
    fontSize: '1.1rem',
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    fontFamily: `'Nunito Sans',sans-serif`,
    margin: '1rem',
    padding: '0.5rem 4rem 0.5rem 0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid white',
    background: 'transparent',
    boxShadow: 'none !important',
    outline: 'none !important',
    cursor: 'text',
    width: '100%'
  })
  
  const Section = styled(Box)<BoxProps>(({ theme }) => ({
    width: '60%',
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    '@media (max-width: 900px)' :{
      width: '90%',
      padding: '1rem 0'
    }
  }))
  
  const SectionContent = styled(Box)<BoxProps>(({ theme }) => ({
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
   '@media (max-width: 900px)': {
      width: '90%'
    } 
  }))
  
  const SubSection = styled(Box)<BoxProps>(({ theme }) => ({
    width: '50%',
    display:  'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    
    p:{
      minWidth: 'auto'
    },
    
    a:{
      color: '#e58e26',
      textDecoration: 'none'
    } 
  }))
  
  const SectionWhite = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    padding: '7rem 0',
    margin: '6rem 0',
    display: 'flex',
    flexCirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    
    span:{
      color: '#444'
    },
    
    p:{
      color: '#555'
    },
    
   '@media (max-width: 900px)': {
      padding: '3rem 0'
    }  
  }))
  
 const Title = styled('span')({
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    fontFamily: `'Nunito Sans',sans-serif`,
    marginBottom: '2rem'
   })
  
  const TextContent = styled('p')({
    width: '80%',
    minWidth: '36rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'justify',
    color: '#ddd',
    textTransform: 'none',
    fontFamily:  `'Nunito Sans',sans-serif`,
    
    '@media (max-width: 650px) ':{
      width: '90%',
      minWidth: 'auto',
      fontSize: '1rem'
    } 
})
  
  const Cite = styled('p')({
    width:'80%',
    minWidth: '36rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'justify',
    color: '#ddd',
    textTransform: 'none',
    fontFamily:  `'Nunito Sans',sans-serif`,
  
    a :{
      color: '#e58e26',
      textDecoration: 'none'
    },
    
    '&:before': {
      color: '#fff',
      content: 'open-quote',
      fontSize: '4em',
      lineHeight: '0.1em',
      marginRight: '0.25em',
      verticalAlign: '-0.4em'
    },
    
    '&:after': {
      color: '#fff',
      content: 'close-quote',
      fontSize: '4em',
      lineHeight: '0.1em',
      marginLeft: '0.25em',
      verticalAlign: '-0.6em'
    },
    
    '@media (max-width: 650px)':{
      width: '90%',
      minWidth: 'auto',
      fontSize: '1rem',
    } 
})

const ImageWrapper = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexwrap: 'wrap',
  flexDirection: 'column'
})

const Image = styled('img')({
  width: 'auto',
  height: '6rem',
  margin: '1.5rem',
})