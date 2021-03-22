import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent,
     HeroH1, HeroP, TopLine, Heading, Description, Subtitle 
    } from './HeroElements';

/*import {TopLine, Heading, Description, Subtitle, 
    } from '.src/components/Data/DataElements';
*/
function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Murad Ahmad</HeroH1>
                <TopLine>Software developer</TopLine>
                <Subtitle>Android developer | Full Stack developer </Subtitle>
                <HeroP>    </HeroP>
                <Subtitle>Master's in Ubiquitous Computing</Subtitle>
                <Description>University of Oulu, Finland</Description>
            </HeroContent>
        </HeroContainer>
            
        
    )
}

export default HeroSection
