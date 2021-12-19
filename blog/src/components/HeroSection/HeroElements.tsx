import styled from 'styled-components';


export const HeroContainerBackground = styled.div`
    background: #f6f6f6;
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

export const HeroContent = styled.div`
    background: transparent;
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    margin-bottom: 20px;
    position: absolute;
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
    color: #fff;
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



