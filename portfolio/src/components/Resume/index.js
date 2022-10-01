import React from 'react';
import {Link as LinkR} from 'react-router-dom'
import Icon1 from '../../images/svg-5.svg';
import Home from '../../pages';
import {FaLinkedin, FaGithub} from 'react-icons/fa';




import { ResumeContainer, ResumeWrapper, ResumeIntroTitleCard,List, Icon, CloseIcon, ResumeIcon, ResumeIntro, ResumeIntroCard,
         TopLine, Heading, Heading2, Description, SkillsWrapper, SkillsCard, WorkWrapper,SocialIconLink,SocialIcons,
          WorkCard,HeroContainer,ArticleCard, ArticleWrapper, HeroBg, VideoBg,  HeroContent, HeroH1, HeroP, Subtitle, IconButton,ExpWrapper, ExpCard, ExpCard1, CardBox } from './ResumeElements';


const Resume = (props) => {
    
    

    return (
        <ResumeContainer id='resume'>
            <HeroContainer>
                <HeroContent>
                    <Icon>
                        <IconButton onClick={() => {
                            props.history.push('/');
                            }} ><CloseIcon /></IconButton>
                    </Icon>
                    <HeroH1>Murad Ahmad</HeroH1>
                    <TopLine>Software developer</TopLine>
                    <TopLine>@ Polar Electro Oy</TopLine>
                    <Description>Finland.</Description>
                    <HeroP>    </HeroP>
                    <Subtitle>Master's in Ubiquitous Computing</Subtitle>
                    <Description>University of Oulu, Finland</Description>
                    <HeroP>    </HeroP>
                    <HeroP>    </HeroP>
                    <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/murad-ahmad-04341b49/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/MuradAhmad" target="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                </HeroContent>
            </HeroContainer>
            <ResumeWrapper>
                <Heading2>Let's have a conversation in</Heading2>
                <SkillsWrapper>
                    <SkillsCard>
                        <Heading >Java</Heading>
                        <ul>
                            <List>
                                3+ years of experience
                            </List>
                            <List>
                                Android mobile applications
                            </List>
                            <List>
                                Developed semester projects
                            </List>
                            <List>
                                Lab assignments
                            </List>
                        </ul>
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >Kotlin</Heading>
                        <ul>
                            <List>
                                6 months of experience
                            </List>
                            <List>
                                Android mobile applications
                            </List>
                            <List>
                                Developed backend features
                            </List>
                        </ul>
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >Web Apps</Heading>
                        <ul>
                            <List>
                                HTML/CSS/Javascript/TypeScript
                            </List>
                            <List>
                                React framework
                            </List>
                            <List>
                                Firebase
                            </List>
                            <List>
                                Developed personal Web App
                            </List>
                            
                        </ul>
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >C++</Heading>
                        <ul> 
                            <List>
                                2+ years of experience
                            </List>
                            <List>
                                Developed semester projects
                            </List>
                            <List>
                                Lab assignments
                            </List>
                        </ul>
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >Android</Heading>
                        <ul>
                            <List>
                                2+ years of experience
                            </List>
                            <List>
                                Java and Kotlin
                            </List>
                        </ul>
                    </SkillsCard>
                    
                    <SkillsCard>
                        <Heading >iOS</Heading>
                        <ul>
                            <List>
                                1+ year of experience
                            </List>
                            <List>
                                iOS mobile applications
                            </List>
                            <List>
                                Objective-C
                            </List>
                        </ul>
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >IDE</Heading>
                        
                            <ul>
                                <List>
                                IntelliJ idea
                                </List>
                                <List>
                                Vs Code
                                </List>
                                <List>
                                Android Studio
                                </List>
                                <List>
                                xCode
                                </List>
                            </ul>
                        
                    </SkillsCard>
                    <SkillsCard>
                        <Heading >Other skills</Heading>
                          
                            <ul>
                                <List>
                                Kubernetes, Helm
                                </List>
                                <List>
                                Docker, docker registry
                                </List>
                                <List>
                                Confluence, Jira, Git, .drone CI/CD Kanban/Scrum
                                </List>
                                <List>
                                Adobe XD, Adobe photoshop
                                </List>
                                <List>
                                 lucidchart
                                </List>
                                
                            </ul>
                        
                    </SkillsCard>
                </SkillsWrapper>
                <Heading>Work Experience</Heading>
                <ExpWrapper  >
                    <ExpCard>
                    <Heading2 >Software Developer Trainee</Heading2>
                        <Description>Elisa Automate, Helsinki, Finland.
                        </Description>
                        <Description>04 May 2020 - 31 August 2020
                        </Description>
                    </ExpCard>
                    <ExpCard1>
                    Main Tasks
                    
                        
                        <ul>
                            <List>
                                Integrations with base station (base station reset)
                            </List>
                            <List>
                                Software testing (unit testing, mock testing)
                            </List>
                            <List>
                                Creating helm charts for application deployment
                            </List>
                            <List>
                                Working as part of a scrum team in SaFe model
                            </List>
                            </ul>
                            <Description>
                                Worked on: Kotlin, Java, Python, Spring boot, kafka, Mariadb, Kubernetes, helm,  docker, confluence, jira, git
                            </Description>
                        
                        
                    </ExpCard1>
                    <ExpCard>
                    <Heading2 >Research Assistant</Heading2>
                    <Description>University of Oulu, Finland.
                        </Description>
                        <Description>01 June 2018 - 31 August 2018
                        </Description>
                        </ExpCard>
                        <ExpCard1>
                        <Description>Android Application Development And Thesis Work</Description>
                        <Description>01 June, 2018 - 15 June, 2019</Description>
                        <Description></Description>
                        <Description></Description>
                        <Description>Research work</Description>
                        <Description>EXTREMA: A portable assesment of asthma symptoms due to extreme climate change.
                        </Description>
                        
                    </ExpCard1>
                    <ExpCard>
                        <Heading2 >Junior Mobile Application Developer</Heading2>
                        <Description>SWAM TECH, NUST ISLAMABAD, PAKISTAN
                        </Description>
                        <Description>OCT 2013 - OCT 2014
                        </Description>
                    </ExpCard>
                    <ExpCard1>
                    <ul>
                            <List>
                            Developed ESLKidSongs app for kids
                            </List>
                            <List>
                            Application UI for multiple screen size
                            </List>
                            <List>
                                Objective-C
                            </List>
                        </ul>
                        
                    </ExpCard1>
                </ExpWrapper>
                <Heading>Education</Heading>
                <ExpWrapper>
                    <ExpCard>
                        <Heading2 >Master's in Ubiquitous Computing</Heading2>
                        <Description>University of Oulu, Finland
                        </Description>
                        <Description>2017 - 2019
                        </Description>
                    </ExpCard>
                    <ExpCard>
                        <Heading2 >Bachelor of Information Technology</Heading2>
                        <Description>SEECS-NUST Islamabad, Pakistan
                        </Description>
                        <Description>2014
                        </Description>
                    </ExpCard>
                </ExpWrapper>
                <Heading>Publication</Heading>
                <ArticleWrapper>
                    <ArticleCard>
                       
                        <Description>Calmify (2018).  Research article published based on Calmify android application. </Description><Description>
Devender Kumar, Elena Di Lascio, Murad Ahmad, and Mikko Yliniemi. 2018. Calmify: Measuring the Effectiveness of Personalized Meditation Techniques Using Mobile Technologies. In Proceedings of the 2018 ACM International Joint Conference and 2018 International Symposium on Pervasive and Ubiquitous Computing and Wearable Computers (UbiComp ’18)
                        </Description>
                        
                    </ArticleCard>
                    
                </ArticleWrapper>
            
                </ResumeWrapper>
        </ResumeContainer> 
         
    )
}

export default Resume
