import React from 'react';
import { Button } from 'react-scroll';
import Data from '../InfoSection' ;
/*import { Button } from 'react-scroll'*/
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading,
    Subtitle, BtnWrap, ImgWrap, Img } from './infoElements' ;


const InfoSection = ({lightText, id, imgStart, topLine, lightBg,
     headline, darkText, description, buttonLabel, img, alt }) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='home'></Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <Img src={img} alt={alt} />
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
