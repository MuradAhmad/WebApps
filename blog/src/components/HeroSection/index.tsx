import React from 'react';


import { HeroContainerBackground, TopLine, Description,
     HeroContainer, HeroContent, HeroH1, HeroP, Subtitle 
    } from './HeroElements';


const Hero = () => {
    
    

    return (
        <HeroContainerBackground >
            <HeroContainer>
                <HeroContent>
                    
                    <HeroH1>Murad Ahmad</HeroH1>
                    <TopLine>Software developer</TopLine>
                    <HeroP>    </HeroP>
                    <Subtitle>Master's in Ubiquitous Computing</Subtitle>
                    <Description>University of Oulu, Finland</Description>
                   
                </HeroContent>
            </HeroContainer>
            </HeroContainerBackground> 
         
    )
}

export default Hero
