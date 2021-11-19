import React, { useState } from 'react';
import {db} from './firebase';

import { ContactContainer, Icon, FormButton, TopLine,
        FormInput, FormLabel, FormWrap, FormContent, FormTextInput, Form 
        } from './ContactElements'

const Contact = () => {
    
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        let errors = {};
        let formIsValid = true;

         //Name
    if(!subject["subject"]){
        formIsValid = false;
        errors["subject"] = "Cannot be empty";
     }
 
     if(typeof subject["subject"] !== "undefined"){
        if(!subject["subject"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["subject"] = "Only letters";
        }        
     }

        db.collection('PortfolioContacts').add({
            email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            alert("Message has been submitted");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setEmail("");
        setSubject("");
        setMessage("");
    } 

    return (
        <>
        <ContactContainer id='contact'>
            <FormWrap> 
                <FormContent>
                     <Form onSubmit={handleSubmit} type='form'>
                        <TopLine>Contact</TopLine>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput placeholder='Email' type='email'
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required />
                        <FormLabel htmlFor='for'>Subject</FormLabel>
                        <FormInput placeholder='Subject' type="text"
                         value={subject}
                         onChange={(e) => setSubject(e.target.value)}
                         />
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormTextInput placeholder='Message' type='textarea'
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                        />
                        <FormButton type='submit' onClick={handleSubmit}
                         style={ { background: loader ? "#555555" : "#A3A000" }}
                        >Send</FormButton>
                        
                    </Form> 
                </FormContent> 
            </FormWrap>
        </ContactContainer>
            
        </>
    )
}

export default Contact; 

