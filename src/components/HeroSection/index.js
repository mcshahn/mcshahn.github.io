import React, {useState} from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
  return (
    <HeroContainer>
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src = {video} type='video/mp4' /> */}
        </HeroBg>
        <HeroContent>
            <HeroH1>Hello, I'm Michelle, a software engineer, web developer, and learner </HeroH1>
            <HeroP>Take a glimpse into my CS life!</HeroP>
            <HeroBtnWrapper>
                <Button to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary = "true" dark = "true">
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection