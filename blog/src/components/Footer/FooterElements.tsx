import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #303131;
    

`

export const FooterWrap = styled.div`
    color: #101522;
    //padding: 18px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-dicoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;

`

export const WebsiteRights = styled.small`
    color: #fff;
    margin: 10px;
    //margin-bottom: 10px;

`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

`