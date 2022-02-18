import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection  from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../Services'
import Footer from '../components/Footer'
import Courses from '../components/Courses'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <Services />
        {/* <InfoSection {...homeObjThree}/> */}
        <Courses />
        <Footer />
    </>
  )
}

export default Home