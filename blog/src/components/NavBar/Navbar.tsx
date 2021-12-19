import React, { FC, useState, useEffect} from 'react';
import {  AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { NavbarData } from './NavbarData';
import Submenu from '../NavBar/Submenu';

import {
    Nav, NavbarContainer, MobileIcon,  
    NavMenu,  Logo, SidebarNav, SidebarWrap,
 } from './NavbarElements';



const Navbar: FC = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 40) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <IconContext.Provider value={{ color: '#fff'}}>
             <Nav>
             <NavbarContainer>
                <Logo>
                    Murad
                </Logo>
                <MobileIcon to = "#" onClick = {showSidebar}>
                    <AiOutlineMenu />
                </MobileIcon>
                <SidebarNav sidebar={sidebar}>
                 <SidebarWrap>
                 <MobileIcon to = "#" onClick = {showSidebar}> 
                     <AiOutlineClose />
                     </MobileIcon>
                        {NavbarData.map((item, index) => {
                            return <Submenu item={item} key={index}/>; 
                            })
                        } 
                 </SidebarWrap>
                </SidebarNav>
                <NavMenu> 
                    {NavbarData.map((item, index) => {
                            return <Submenu item={item} key={index}/>; 
                            })
                        } 
                </NavMenu> 
             </NavbarContainer>
             </Nav>

             

        </IconContext.Provider>
   
    );
    
};

export default Navbar;

