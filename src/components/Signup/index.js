import React, { useState } from 'react';
import {Container, Form, Icon, FormButton, FormContentRight, FormContentLeft, FormH1, FormWrap, FormLabel, FormInput, Text, Img} from './SignUpElements';
import Footer from '../Footer/index';


const SignUp = () => {

  return(
    <>
<div>
  <Container>
  <FormWrap>
  <FormContentLeft>
    <Img src={require('../../images/organize-resume.svg').default}/>
  </FormContentLeft>
<FormContentRight>
  <Form>
    <FormH1>Create your account</FormH1>
    <FormLabel htmlFor='for'>Email</FormLabel>
    <FormInput typed='email' required></FormInput>
    <FormLabel htmlFor='for'>Password</FormLabel>
    <FormInput typed='password' required></FormInput>
    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
    <FormInput typed='password' required></FormInput>
    <FormButton type='submit'>Continue</FormButton>
  </Form>
</FormContentRight>
</FormWrap>
</Container>
</div>
</>
  )
}



export default SignUp;