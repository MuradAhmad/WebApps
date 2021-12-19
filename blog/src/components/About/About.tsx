import React from 'react';

import { InfoContainer, InfoWrapper, TopLine,
    Subtitle, CardWrapper, InfoCard } from './AboutElements' ;



const InfoSection = () => {
    return (
        <>
          <InfoContainer>
              <InfoWrapper>
                  <CardWrapper>
                      <InfoCard>
                      <TopLine>topLine</TopLine>
                          <Subtitle >description</Subtitle>
                          <Subtitle>interests</Subtitle>
                          <Subtitle >sports</Subtitle>
                      </InfoCard>
                  </CardWrapper>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
