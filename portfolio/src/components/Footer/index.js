import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
        FooterLinkTitle, FooterLink, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap,
        WebsiteRights, Description
      } from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Policy</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>  
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle></FooterLinkTitle>
                            <Description>Contact: </Description>
                            <Description>hireit19@gmail.com</Description>
                            <Description>+358453319542</Description>
                            <Description>90570, Oulu, Finland.</Description> 
                                 
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Murad
                        </SocialLogo>
                        <WebsiteRights>Murad &#169; {new Date().getFullYear()}. 
                        All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/murad-ahmad-04341b49/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/MuradAhmad" target="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
