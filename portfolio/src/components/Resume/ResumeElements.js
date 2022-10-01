import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


export const ResumeContainer = styled.div`
    background: #f6f6f6;
    
    

`

export const ResumeWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px; 
      

`


export const HeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 300px;
    position: relative;
    z-index: 1;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ##192736;
    
`


export const HeroContent = styled.div`
    background: transparent;
    
    
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    
    //box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //transition: 0.3s;  

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }  

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
    max-width: 440px;
    
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#010606' : 'black')};

`


export const CloseIcon = styled(FaTimes)`
    color: #d0d0d0;
    font-size: 2.5rem;

`
export const Icon = styled.div`
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


export const ResumeIntro = styled.div`
    background: #d0d0d0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 500px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20 50px;
        
    }

`

export const ResumeIntroCard = styled.div`
    background: #d0d0d0;
    max-height: 300px;
    width: 400px;
    height: 250px;
    padding: 30px;
    align-items: center;
    display: flex;
    
    justify-content: center;
    

`

export const ResumeIntroTitleCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 170px;
    align-items: center;
    margin: -50px;
    width: 150px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 100px;;
        margin-top:-30px;
        
    }
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

`
export const SkillsWrapper = styled.div`
    
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 30px 20px;
        
    }

`

export const SkillsCard = styled.div`
    //background: #f6f6f6;
    //background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 250px;
    width: 250px;

`

export const ExpWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 30px;


    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const ExpCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
    width: wrap-content;

`
export const ExpCard1 = styled.div`
    border: solid;
    border-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
    width: wrap-content;
    padding: 10px 10px; 

`
export const ArticleWrapper = styled.div`
    max-width: 1100px;
    
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 30px 30px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 10px 20px;
        
    }

`
export const ArticleCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
    width: wrap-content;
    padding: 30px 30px;

`

export const ResumeIcon = styled.img`
    height: 100px;
    width: 100px;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 1px;

`


export const Heading = styled.h1`
    color: #010606;
    Padding: 30px 20px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;   
    }

`
export const Heading2 = styled.h2`
    color: #010606;
    Padding: 30px 20px;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 600;
    
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;   
    }

`

export const TopLine = styled.p`
    //color: #01bf71;
    color: #A3A000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 10px;


`

export const Description = styled.p`
    color: #010606;
    font-size: 16px;
    text-align: left;
    padding: 3px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

`
export const List = styled.li`
    color: #010606;
    font-size: 16px;
    padding: 5px;
    

`

export const SocialIcons = styled.div`
    display: flex;
    
    width: 350px;
    justify-content: right;
    position: absolute;
    bottom: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 

`

export const SocialIconLink = styled.a`
    color: #fff;
    //font-size: 24px;

`