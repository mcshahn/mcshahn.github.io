import styled from 'styled-components'

export const CoursesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #DFE0E2;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const CoursesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    ${'' /* grid-template-columns: 1fr 1fr 1fr; */}
    align-items: center;
    grid-gap: auto;
    padding: 0 50px;

    ${'' /* @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    } */}
`


export const CoursesH1 = styled.h1`
    font-size: 2.5rem;
    color: #2B4162;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const CoursesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #2B4162;
`



export const CoursesUL = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-tempate-rows: repeat(6, 60px);
    }
`
export const CoursesItem = styled.li`
    height: 40px;
    color: #2B4162;
`