import React from 'react';
import SmartAgri from '../../images/Mobile/SmartAgri1.png';
import SmartAgri2 from '../../images/Mobile/SmartAgri2.png';
import SmartAgri3 from '../../images/Mobile/SmartAgri3.png';
import SmartAgri4 from '../../images/Mobile/SmartAgri4.png';
import Extrema0 from '../../images/Mobile/Extrema0.png';
import Extrema01 from '../../images/Mobile/Extrema01.png';
import Extrema1 from '../../images/Mobile/Extrema1.png';
import Extrema2 from '../../images/Mobile/Extrema2.png';
import Extrema3 from '../../images/Mobile/Extrema3.png';
import Extrema4 from '../../images/Mobile/Extrema4.png';
import Extrema5 from '../../images/Mobile/Extrema5.png';
import Diabetes1 from '../../images/Mobile/Diabetes1.png';
import Diabetes2 from '../../images/Mobile/Diabetes2.png';
import Diabetes3 from '../../images/Mobile/Diabetes3.png';
import Diabetes4 from '../../images/Mobile/Diabetes4.png';
import Diabetes5 from '../../images/Mobile/Diabetes5.png';




import Home from '../../pages';


import {ProjectsContainer,CloseIconProp,ImgCard ,ProjectsCard, ProjectsIcon, ProjectDescription ,ProjectsH1, ProjectsH2,
        ProjectsP,CardWrapper,ProjectContent, ProjectImg,TopLine, Heading, Description, HeroContainer, IconB,HeroContent,IconButton,CloseIcon, Subtitle, HeroP, HeroH1} from './ProjectsElements';


const Data = (props) => {
    return (
        <ProjectsContainer>
             <HeroContainer>
                <HeroContent>
                <CloseIconProp>
                <IconButton onClick={() => {
                            props.history.push('/');
                            }} ><CloseIcon /></IconButton>
                    </CloseIconProp>
                    <HeroH1>Projects</HeroH1>
                    <HeroP>    </HeroP>
                    <Subtitle>Android mobile applications | Java projects | Web apps | C++ projects | Programming tasks </Subtitle> 
                </HeroContent>
            </HeroContainer>
            <ProjectContent>
            <Heading >Android Mobile Applications</Heading>
            <TopLine >Smart Agriculture</TopLine>
            <ProjectDescription>This android application is developed for home plants. Ruuvitag sensors are used to collect temperature and air humidity data. When the environmental temperature and air humidity is not suitable for a particular plant, the app sends a notification to the user to change plant position. The app is developed with basic features and it needs future work such as plant database for information. This application is a semester project developed in a team. I believe in team work because innovative solutions are always developed together.</ProjectDescription>
            
            <CardWrapper>
                <ImgCard>
                    <ProjectImg src={SmartAgri}  />
                </ImgCard >
                <ImgCard>
                    <ProjectImg src={SmartAgri2}  />
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={SmartAgri3}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={SmartAgri4}  /> 
                </ImgCard>
            </CardWrapper>
            <TopLine >Extrema</TopLine>
            <ProjectDescription>This work focuses on developing an intelligent mobile application that presents and highlights the health effects of climate change on asthma patients. The Android mobile application ‘EXTREMA’ is targeted towards patients in various scenarios, e.g., health, lifestyle, and education. The ‘EXTREMA’ application receives input from a patient along with smart weather sensor and the GPS (Global Positioning System) location sensor in the smartphone and communicates over the Internet with a remote server (Aware) accessible by research professionals who are in charge of the remote monitoring of the patients. </ProjectDescription>
            <CardWrapper>
                <ImgCard>
                    <ProjectImg src={Extrema0}  />
                </ImgCard >
                <ImgCard>
                    <ProjectImg src={Extrema01}  />
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Extrema1}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Extrema2}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Extrema3}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Extrema4}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Extrema5}  /> 
                </ImgCard>
        
            </CardWrapper>
            
            
            <TopLine >Diabetes fitness</TopLine>
            <ProjectDescription>This android application is a wellbeing fitness application developed for people who are diabetic. This application allow user to view statistics on his activities to track the physical activities. We tried to cover social spectrum by adding friends feature such as, if a user is going for exercise or any other activities he can invite his friends. The app is developed with basic features and it needs future work. This application is a semester project developed in a team. </ProjectDescription>
            
            <CardWrapper>
                <ImgCard>
                    <ProjectImg src={Diabetes1}  />
                </ImgCard >
                <ImgCard>
                    <ProjectImg src={Diabetes2}  />
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Diabetes3}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Diabetes4}  /> 
                </ImgCard>
                <ImgCard>
                    <ProjectImg src={Diabetes5}  /> 
                </ImgCard>
        
            </CardWrapper>
            <TopLine >Calmify</TopLine>
            <ProjectDescription>
            Calmify (Android app), an innovative well-being solution which quantifies the effectiveness of meditation by providing adaptive feedback based on measurable physiological data from everyday fitness wearables (Fitbit versa). Calmify also tracks subjective feedback before and after a meditation session to measure which kind of practice can have the best effect on a person’s mood. Research article: Measuring the Effectiveness of Personalized Meditation Techniques Using Mobile Technologies. Team work. I believe in team work because the innovative solutions are always developed together.
            </ProjectDescription>
            
            </ProjectContent>
              
        </ProjectsContainer> 
         
    )
}

export default Data
