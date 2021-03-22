import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ContactContainer = styled.div`
    color: #fff;
    background: #010101;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    

    @media screen and (max-width: 400px) {
        height: 80%;
    }

`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media screen and (max-width: 480px) {
        padding: 10px; 
    }
`

export const Form = styled.div`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    
    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;

`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

`

export const FormButton = styled.button`
    background: #A3A000;
    padding: 10px 0;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;

`



