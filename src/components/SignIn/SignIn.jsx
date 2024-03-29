import React, { useState} from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/Firebase/Firebase'
import './SignIn.scss'



const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log('formFields', formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password')
          break
        case 'auth/user-not-found':
          alert('please use correct email')
          break
        default:
          console.log('error', error)
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
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
          <Button type= 'button' onClick={signInWithGoogle} buttonType='google'>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
