import React from 'react';
import {Container, Form, FormWrap, Icon, FormButton, FormContent, FormH1, FormLabel, FormInput, Text, FormMessage} from './SigninElements';
import { Link } from 'react-router-dom';
import SignUp from '../Signup/index';

const SignIn = () => {
  return(
<>
<Container>
<FormWrap>
<FormContent>
  <Form>
    <FormH1>Please fill out this information.</FormH1>
    <FormLabel htmlFor='for'>Name</FormLabel>
    <FormInput type='name' required></FormInput>
    <FormLabel htmlFor='for'>Phone</FormLabel>
    <FormInput typed='password' required></FormInput>
    <FormLabel htmlFor='for'>Email</FormLabel>
    <FormInput typed='email' required></FormInput>
    <FormLabel htmlFor='for'>Write Message</FormLabel>
    <FormMessage typed='message' required></FormMessage>
    <FormButton type='submit'>Continue</FormButton>
  </Form>
</FormContent>
</FormWrap>
</Container>
</>

  )
}



export default SignIn