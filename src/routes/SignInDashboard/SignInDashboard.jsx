import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'
import './SignInDashboard.scss';

const SignInDashboard = () => {

  return (
    <div className='dashboard-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInDashboard;

