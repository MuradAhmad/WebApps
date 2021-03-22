import React from 'react'
import { ContactContainer, Icon, FormButton, TopLine,
        FormInput, FormLabel, FormWrap, FormContent, Form 
        } from './ContactElements'

const Contact = () => {
    return (
        <>
        <ContactContainer id='contact'>
            <FormWrap> 
                <FormContent>
                    <Form action='#'>
                        <TopLine>Contact</TopLine>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Subject</FormLabel>
                        <FormInput type="text" />
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <textarea/>
                        <FormButton type='submit'>Send</FormButton>
                        
                    </Form>
                </FormContent> 
            </FormWrap>
        </ContactContainer>
            
        </>
    )
}

export default Contact;