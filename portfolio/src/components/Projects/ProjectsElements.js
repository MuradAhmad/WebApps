import styled from 'styled-components';
import  {Link as LinkR}  from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const ProjectsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;


`

export const ProjectsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 10px 50px;
    margin-bottom: 50px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;    
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    @media screen and (max-width: 480px) {
        
        padding: 20px;
    }

`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    }

`

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;

` 

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 50px;

`
export const Btn = styled.div`
    display: flex;
    align-items: center;

`

export const BtnLink = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 20px;
    color: #A3A000;
    font-size: 16px;
    outline: none;
    
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        brackground: #fff;
        color: #01bf71; 
    }

`
