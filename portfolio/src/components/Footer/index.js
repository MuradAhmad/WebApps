import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
        FooterLinkTitle, FooterLink, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap,
        WebsiteRights
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
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Policy</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact </FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destination</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>  
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Address </FooterLinkTitle>
                            <FooterLink to="/signin">90570, Oulu, Finland.</FooterLink> 
                                 
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Murad
                        </SocialLogo>
                        <WebsiteRights>Murad @c {new Date().getFullYear()}
                        All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
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
