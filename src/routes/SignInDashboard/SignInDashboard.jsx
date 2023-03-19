import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/Firebase/Firebase'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'
import './SignInDashboard.scss';

const SignInDashboard = () => {

  return (
    <div className='dashboard-container'>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUser}>Sign In with google Popup</button> */}
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInDashboard;

