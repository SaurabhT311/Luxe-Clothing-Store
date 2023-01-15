import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD52nViaQ92Qa5mAZDLfSH--qm9Z8pc_q4",
  authDomain: "luxe-store-db.firebaseapp.com",
  projectId: "luxe-store-db",
  storageBucket: "luxe-store-db.appspot.com",
  messagingSenderId: "211697983511",
  appId: "1:211697983511:web:b5b5edd24965223707fc52"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//creating database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); //user document reference

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) { //it returns true or false
    //if it doesn't exist it will return true and will create one and set the document.
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  } 

  return userDocRef;
}
  // Snapshot allows us to check whether or not there is an instance
  // of it that exists inside of our database and it also allows us to access
  // the data.