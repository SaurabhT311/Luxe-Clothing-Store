import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignIn.scss';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/Firebase/Firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  console.log("formFields",formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
    console.log('response', user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      
    }catch(error) {
      
  }
}; 

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />

          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
          <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} buttonType='google' >Google sign in</Button>
          </div>
        </form>
      </div>
    )
}

export default SignIn;
