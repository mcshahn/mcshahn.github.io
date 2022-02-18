import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, Projectsicon, ProjectsH2, ProjectsP } from './ServicesElements'
import movieapp from '../images/movieapp.png'
import Icon2 from '../images/png-2.png'
import Icon3 from '../images/png-1.png'
import { Button } from '../components/ButtonElement'
const Projects = () => {
  return (
    <ProjectsContainer id = "projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard >
                <Projectsicon src={movieapp}/>
                <ProjectsH2>Movie App</ProjectsH2>
                <ProjectsP>Javascript: React; Uses IMDB api to access data on movies then ranks them based on desired criteria.</ProjectsP>
                <Button href="https://github.com/mcshahn/react-movie-app">Github</Button>
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