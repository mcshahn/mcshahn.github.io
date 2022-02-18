import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'


const Footer = () => {
    
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>More about me</FooterLinkTitle>
                        {/* use atag to get external links */}
                            <FooterLink href="/signin">Resume</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/michelle-ahn/">LinkedIn</FooterLink>
                            <FooterLink href="https://github.com/mcshahn">Github</FooterLink>

                    </FooterLinkItems>
                
                </FooterLinksWrapper>
               
            </FooterLinksContainer>
        </FooterWrap>

    </FooterContainer>
  )
}

export default Footer