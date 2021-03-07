import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks
 } from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Murad</NavLogo> 
                <MobileIcon>
                    <FaBars/>
                </MobileIcon> 
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About me</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projetcs">Projects</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to="reviews">Reviews</NavLinks> 
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks> 
                    </NavItem>
                </NavMenu>
            </NavbarContainer>

        </Nav>

        </>
    );
};

export default Navbar;
