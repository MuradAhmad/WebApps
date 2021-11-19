import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

import {
    Nav, NavbarContainer, NavLogo, MobileIcon,
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
 } from './NavbarElements';

const Navbar = ({ toggle }) => {
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
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Murad
                </NavLogo> 
                <MobileIcon onClick={toggle} >
                    <FaBars/>
                </MobileIcon> 
                <NavMenu>
                    <NavItem>
                        <NavLinks
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-40}
                        >About me</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-40}
                        >Projects
                        </NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-40}
                        >Services</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-40}
                        >Contact</NavLinks> 
                    </NavItem>
                </NavMenu>
            </NavbarContainer>

        </Nav>
        </IconContext.Provider>

        </>
    );
};

export default Navbar;
