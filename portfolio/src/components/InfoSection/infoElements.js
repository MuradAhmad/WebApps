import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 24px;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 10px 24px;
       
    }
    
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
` 

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const Column2 = styled.div`
   
    padding: 0 15px;
    grid-area: col2;
    
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 30px;
    
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;   
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;

`

export const Img = styled.img`
   width: 200px;
   height: 200px;
   
   padding-right: 0;
   border-radius: 1px;
   background-size: cover;
   display: block;
   border-top-left-radius: 100px;
   -webkit-border-top-left-radius: 100px;
   -moz-border-top-left-radius: 100px;
   border-bottom-right-radius: 100px;
   -webkit-border-bottom-right-radius: 100px;
   -moz-border-bottom-right-radius: 100px;
   
    
`


export const CardWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 10px 20px;
    margin-bottom: 50px;
    
    
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const InfoCard = styled.div`
//background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
   
    //padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    

`
export const ImageCard = styled.div`
    width:300px;
   //background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    }

`
