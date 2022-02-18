import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
    <Icon onClick = {toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick = {toggle}>
                About Me
            </SidebarLink>
            <SidebarLink to="projects" onClick = {toggle}>
                Projects
            </SidebarLink>
            <SidebarLink to="courses" onClick = {toggle}>
                Courses
            </SidebarLink>
            <SidebarLink to="contact" onClick = {toggle}>
                Contact Me
            </SidebarLink>
            {/* <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarMenu>
    </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar