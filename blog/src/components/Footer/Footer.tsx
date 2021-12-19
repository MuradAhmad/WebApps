import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap,
        WebsiteRights
      } from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
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
