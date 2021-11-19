import React from 'react';
import AndroidIcon from '../../images/AndroidIcon.svg';
import {FaReact, FaAndroid, FaJava , FaJira, FaGit, FaConfluence } from 'react-icons/fa';
import {SiKotlin,SiTypescript, SiIos, SiCplusplus, SiJavascript,SiAdobephotoshop, SiAdobexd, SiMysql} from 'react-icons/si';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, TopLine,
         ServicesIcon, ServicesP, SocialIcons, ServicesContent, Description
         } from './ServicesElements'; 

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <TopLine>Services</TopLine>
            <br></br>
            <ServicesWrapper>
                <ServicesCard>
                    <SocialIcons>
                        <FaReact />
                        < FaAndroid/>
                        <SiIos />
                    </SocialIcons>
                </ServicesCard>
                <ServicesCard>
                    <SocialIcons>
                        <FaJava />
                        <SiKotlin />
                        <SiTypescript />
                        <SiCplusplus />
                    </SocialIcons>
                </ServicesCard>
                <ServicesCard>
                    <SocialIcons>
                        <SiMysql />
                        <SiAdobephotoshop />
                        <SiAdobexd />
                    </SocialIcons>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    )
}

export default Services