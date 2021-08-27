import styled from 'styled-components';


export const HeroContainer = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100px;
    position: relative;
    z-index: 1;
`

export const HeroContent = styled.div`
    background: transparent;
    padding: 30px 24px;
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







