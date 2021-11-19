import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-9.svg';


import { ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, ProjectsCard, ProjectsIcon, TopLine,
    ProjectsP, Btn, BtnLink } from './ProjectsElements'; 

const Projects = ({toggle}) => {
    return (
        <ProjectsContainer id='projects'>
            <TopLine>Projects</TopLine>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Mobile Applications</ProjectsH2>
                    <ProjectsP>I have developed mobile applications during my studies and hobby projects.</ProjectsP>
                    <Btn>
                        <BtnLink to='../Data'>See More..</BtnLink>
                    </Btn>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Solutions</ProjectsH2>
                    <ProjectsP>This section includes solutions and small tasks addresses particular programming challenges.</ProjectsP>
                    <Btn>
                        <BtnLink >Detail comming soon..</BtnLink>
                    </Btn>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Resume</ProjectsH2>
                    <ProjectsP>I have relevant experience in Java, kotlin, HTML/CSS, Reactjs, Android, kubernetes, helm charts and docker.</ProjectsP>
                    <Btn>
                        <BtnLink to='../Resume'>See More..</BtnLink>
                    </Btn>
                </ProjectsCard>                
            </ProjectsWrapper>
        </ProjectsContainer>
        
    )
}

export default Projects