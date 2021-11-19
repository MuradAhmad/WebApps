import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const ProjectsContainer = styled.div` 
    background: #f6f6f6;
    
`
export const ProjectContent = styled.div`
    background: transparent;
    
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    
    

`


export const HeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 300px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100% );
                    z-index: 2; };

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const HeroContent = styled.div`
    background: transparent;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    margin-bottom: 20px;
    

`

export const HeroH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`

export const HeroP = styled.p`
    margin-top: 24px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`
export const Subtitle = styled.p`
    max-width: 500px;
    //color: #A3A000;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#010606' : 'black')};

`


export const CloseIcon = styled(FaTimes)`
    color: #d0d0d0;
    font-size: 2.5rem;

`
export const CloseIconProp = styled.div`
    position: absolute;
    top 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 

`
export const IconButton = styled.button`
    background: none;
    border: none;

`
export const CardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 30px 50px;
    

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        padding: 30px 20px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 30px 20px;
    }

`

export const ImgCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
    height:400px;
    width: 250px;
    
    
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    }

`

export const ProjectImg = styled.img`
    height: 400px;
    width: 250px;
   

`

export const Heading = styled.h1`
    color: #A3A000;
    //color: #010606;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    Padding: 30px;

    @media screen and (max-width: 480px) {
        font-size: 32px;   
    }

`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    Padding: 20px;

`

export const Description = styled.p`
    color: #010606;
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
    

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`

export const ProjectDescription = styled.p`
    color: #2a2a2a;
    //color: #010606;
    padding: 30px;
    padding-bottom: 20px;
    font-size: 24px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`
