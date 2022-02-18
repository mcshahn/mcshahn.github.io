import React from 'react'
import { CoursesContainer, CoursesH1, CoursesWrapper, CoursesUL, CoursesItem, CoursesH2 } from './CoursesElements'

const Courses = () => {
  return (
    <CoursesContainer id = "courses">
        <CoursesH1>Courses Taken</CoursesH1>
        <CoursesH2>All courses were taken at Columbia University. </CoursesH2>  
        <CoursesH2>Courses with * are currently being taken </CoursesH2>
        <br></br>
        <CoursesWrapper>
            <CoursesUL>
                <CoursesItem>
                    Advanced Programming (C, Unix, Web Sockets)
                </CoursesItem>
                <CoursesItem>
                    Foundations of Data Science (Python: Pandas, Numpy, scikit-learn)
                </CoursesItem>
                <CoursesItem>
                    Data Structures (Java)
                </CoursesItem>
                <CoursesItem>
                    Intro to Databases (SQL, Relational Databases)*
                </CoursesItem>
                <CoursesItem>
                    Discrete Mathematics
                </CoursesItem>
                <CoursesItem>
                    Probability for Engineers
                </CoursesItem>
                <CoursesItem>
                    CS Theory*
                </CoursesItem>
                <CoursesItem>
                    Computational Linear Algebra*
                </CoursesItem>
            </CoursesUL>

            <CoursesH2>Please email me at mcshahn@gmail.com for my transcript that contains A LOT more than just CS courses! :)</CoursesH2>
        </CoursesWrapper>

    </CoursesContainer>
  )
}

export default Courses