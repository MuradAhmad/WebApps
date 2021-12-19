import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
    background: #A3A000;
    height: 40px;
    /*margin-top: -40px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-indez: 1;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    `

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    z-indez: 10;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const Logo = styled.div`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`


export const MobileIcon = styled(LinkR)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8 rem;
        cursor: pointer;
        color: #fff;

    }

`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavbarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.125rem;
    height: 3.75rem;
    padding: 2rem;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
         
     }
`

export const NavbarLabel = styled.span`
    margin-left: 1rem;
`

//////  Sidebar

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    background-color: #A3A000;
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    right: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;  

`
export const SidebarWrap = styled.div``

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`