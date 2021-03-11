import React from 'react';
import Icon1 from '../images/svg-4.svg';
import Icon2 from '../images/svg-2.svg';
import Icon3 from '../images/svg-9.svg';

import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon,
        ServicesP } from './ServicesElements'; 

const Services = () => {
    return (
        <ServicesContainer id='projects'>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Mobile Applications</ServicesH2>
                    <ServicesP>this text will be replaced with project description.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Code review</ServicesH2>
                    <ServicesP>this text will be replaced with project description.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Resume</ServicesH2>
                    <ServicesP>this text will be replaced with project description.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    )
}

export default Services