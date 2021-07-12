import React from 'react';
import {Container, Form, FormWrap, Icon, FormButton, FormContent, FormH1, FormLabel, FormInput, Text} from './SigninElements';
import { Link } from 'react-router-dom';
import SignUp from '../Signup/index';

const SignIn = () => {
  return(
<>
<Container>
<FormWrap>
<Icon>Incline Education</Icon>
<FormContent>
  <Form>
    <FormH1>Sign in to your account</FormH1>
    <FormLabel htmlFor='for'>Email</FormLabel>
    <FormInput type='email' required></FormInput>
    <FormLabel htmlFor='for'>Password</FormLabel>
    <FormInput typed='password' required></FormInput>
    <FormButton type='submit'>Continue</FormButton>
    <Text>Forgot Password</Text>
    <Text><Link to="/signup">Don't have an account? Sign Up Here</Link></Text>
  </Form>
</FormContent>
</FormWrap>
</Container>
</>

  )
}



export default SignIn