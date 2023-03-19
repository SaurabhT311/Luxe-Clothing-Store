import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/Firebase/Firebase'
import SignUp from '../../components/SignUp/SignUp'

const SignInDashboard = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log('response', user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with google Popup</button>
      <SignUp />
    </div>
  )
}

export default SignInDashboard;

