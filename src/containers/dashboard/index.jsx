import React from 'react';
import {Landing} from '../../components/landing'
import styled from "styled-components";
import orbit from '../../assets/img/orbit.png'
import electron from '../../assets/img/electron.png'
import react from '../../assets/img/react.png'
import ipfs from '../../assets/img/ipfs.png'

export const Dashboard = () => {

  return (
      <DashboardContainer>
        <Landing />
        <Content>
            <Section>
                <Title>A movie platform with a decentralized network approach</Title>
                <TextContent>
                    For a long time watching movies has overwhelmed me, I am simply limited by my time to go to the cinema. I am a movie fan but a developer with very little time to travel hours to buy a ticket and see the "latest" release of the Avengers (plus pandemic factors). <br/><br/>
                    Somehow the internet today helps us to cope with some of these problems, the other problem is that the internet offers very few resources to see good quality movies and those who offer it do so with movies that are definitely not the "last" launch of the Avengers (sarcasm). <br/><br/>
                    For this reason, a team of friends with the same ideology and need decided to take this crossroads to find, compile and expose a safe resource with quality films (no lag please). <br/><br/>
                    Today, having the ability to share information with each other (P2P) directly, is simply amazing to me. My friend can have the Spiderman movie and transmit it to my other friend 300 KM away and that he can instead transmit the last Avengers movie for me to see it comfortably in my chair happily, it is also fantastic. This collective entertainment methodology is amazing. <br/><br/>
                    Well, in order to decentralize our films so that everyone can have access to them, we resorted to incredible tools such as IPFS and OrbitDB, which allowed us to have created a DAPP (Decentralized App). In simple words, Watchit is an application that does not require external resources, but rather everyone helps everyone to make it work and this classifies it as a "Decentralized Autonomous Organization". We are all happy together :) yay!!
                </TextContent>
                <SubTitle>
                    Important note:
                </SubTitle>
                <TextContent>
                    Some resources contain intellectual property or copyright so there are two versions of the application: Official App and Warez App (Use at your own risk). <br/><br/>
                    The difference between these is that one provides public domain content (old and boring movies) and the other version provides access to a database containing a wide variety of movies (constantly growing) from the oldest to the most recent. <br/><br/>
                    The real goal is to entertain but also to show the potential of decentralized networks, so whatever the goal, you will love Watchit!
                </TextContent>
            </Section>
            <Section>
                <Title>Stack</Title>
                <ImagesContainer>
                    <ImageWrapper>
                        <Image src={orbit} />
                        <ImageTitle>
                            orbit db
                        </ImageTitle>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={ipfs} />
                        <ImageTitle>
                            ipfs
                        </ImageTitle>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={react} />
                        <ImageTitle>
                            React
                        </ImageTitle>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={electron} />
                        <ImageTitle>
                            electron
                        </ImageTitle>
                    </ImageWrapper>
                </ImagesContainer>
            </Section>
        </Content>
        <Footer>© 2020 ZorrillosDev Community.</Footer>
      </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141518;
  overflow: scroll;
`;

const Footer = styled.div`
  width: 100%;
  padding: 3rem 0 3rem;
  text-align: center;
  color: #eee;
  font-family: 'Nunito Sans',sans-serif;
  box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2), 0 36px 94px 0 rgba(0,0,0,0.19);
  font-size: 0.8rem;
  font-weight: 200;
  background-color: #14161b;
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Image = styled.img`
  width: auto;
  height: 6rem;
  margin: 1.5rem;
`;

const ImageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #475e71;
  text-transform: capitalize;
  font-family: 'Nunito Sans',sans-serif;
  margin: 1rem;
`;

const Section = styled.div`
  width: 60%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 500px) {
    width: 90%;
    padding: 1rem 0;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  text-transform: capitalize;
  font-family: 'Nunito Sans',sans-serif;
  margin-bottom: 2rem;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-family: 'Nunito Sans',sans-serif;
  margin: 1.5rem 0 0.5rem;
`;

const TextContent = styled.div`
  width: 80%;
  min-width: 36rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: justify;
  color: #999;
  text-transform: none;
  font-family: 'Nunito Sans',sans-serif;
  
  @media (max-width: 500px) {
    width: 90%;
    min-width: auto;
    font-size: 1rem;
  }
`;

const Command = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem;
  background-color: rgba(255,255,255,0.8);
  color: #000;
  border-radius: 0.5rem;
  margin: 1.5rem 0 0.5rem;
  width: auto;
  display: inline-block;
  text-transform: none;
  font-family: 'Nunito Sans',sans-serif;
`;