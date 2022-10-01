import React from 'react';
import { Button } from 'react-scroll';
import Icon from '../../images/profile.svg';
import profilePicture from '../../images/murad.JPG';
import Data from '../InfoSection' ;

/*import { Button } from 'react-scroll'*/
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading,
    Subtitle, BtnWrap, ImgWrap, Img, CardWrapper, ImageCard, InfoCard } from './infoElements' ;



const InfoSection = ({lightText, id, imgStart, interests, topLine, lightBg,
     headline, darkText, description, sports, buttonLabel, img, alt }) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  
                  <CardWrapper>
                      <ImageCard>
                      <Img src={profilePicture} alt={alt} />
                      </ImageCard>
                      <InfoCard>
                      <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <Subtitle>{interests}</Subtitle>
                          <Subtitle darkText={darkText}>{sports}</Subtitle>
                      </InfoCard>
                  </CardWrapper>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
