import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-9.svg';

import { ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, ProjectsCard, ProjectsIcon, TopLine,
    ProjectsP } from './ProjectsElements'; 

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <TopLine>Projects</TopLine>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Mobile Applications</ProjectsH2>
                    <ProjectsP>this text will be replaced with project description.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Solutions</ProjectsH2>
                    <ProjectsP>this text will be replaced with project description.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Resume</ProjectsH2>
                    <ProjectsP>this text will be replaced with project description.</ProjectsP>
                </ProjectsCard>                
            </ProjectsWrapper>
        </ProjectsContainer>
        
    )
}

export default Projects