import React from 'react';
import { FormContentRight, FormH1, Img } from './SignUpElements';

const SignupSuccess = () => {
  return (
    <FormContentRight>
      <FormH1>We have received your request!</FormH1>
      <Img src={require('../../images/organize.resume.svg').default} alt='success-image' />
    </FormContentRight>

  );
};

export default SignupSuccess;