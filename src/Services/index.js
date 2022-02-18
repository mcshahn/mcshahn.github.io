import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, Projectsicon, ProjectsH2, ProjectsP } from './ServicesElements'
import Icon1 from '../images/png-1.png'
import Icon2 from '../images/png-2.png'
import Icon3 from '../images/png-1.png'
const Projects = () => {
  return (
    <ProjectsContainer id = "projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <Projectsicon src={Icon1}/>
                <ProjectsH2>iojaifejio</ProjectsH2>
                <ProjectsP>aoijfoeifjei</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <Projectsicon src={Icon2}/>
                <ProjectsH2>otheoreio</ProjectsH2>
                <ProjectsP>aoijfoieajoife</ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <Projectsicon src={Icon3}/>
                <ProjectsH2>afjfoqijgoie</ProjectsH2>
                <ProjectsP>aifjeofiajfoije</ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>

    </ProjectsContainer>
  )
}

export default Projects