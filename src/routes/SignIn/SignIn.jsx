import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/Firebase/Firebase";


const SignIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        console.log("response", user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with google Popup
            </button>
        </div>
    )
}

export default SignIn;