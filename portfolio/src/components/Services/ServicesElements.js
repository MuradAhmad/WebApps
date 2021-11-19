import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;


`
export const ServicesContent = styled.div`
    background: transparent;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    margin-bottom: 20px;
    

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }


`

export const ServicesCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    height: wrap-content;
    width: 300px;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    

`

export const ServicesIcon = styled.img`
    height: 30px;
    

`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    font-size: 48px;
    color: #fff;

`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;

`

export const ServicesP = styled.p`
    font-size: 14px;    

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

export const Description = styled.p`
    color: #fff;
    margin-top: 10px;
    font-size: 22px;
    text-align: left;
    

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`