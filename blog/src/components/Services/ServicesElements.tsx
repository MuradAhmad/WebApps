import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
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

export const Description = styled.p`
    color: black;
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