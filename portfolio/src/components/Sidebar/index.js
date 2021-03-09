import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink
        
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About me</SidebarLink> 
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink> 
                    <SidebarLink to='reviews' onClick={toggle}>Reviews</SidebarLink> 
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink> 
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
