// import { initializeApp } from "firebase/app";

// myFirebase --> initializeApp(), firestore(), ....

import myFirebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {

  apiKey: "AIzaSyD698q7sS39Iyfcfhw7QOoxiwyAAGqqgXM",
  authDomain: "tripapp-35b88.firebaseapp.com",
  projectId: "tripapp-35b88",
  storageBucket: "tripapp-35b88.appspot.com",
  messagingSenderId: "528255012947",
  appId: "1:528255012947:web:ea6550f1a030a30e9476a6"
};

// Initialize Firebase(Connect to Firebase)
const app = myFirebase.initializeApp(firebaseConfig);

export const database = myFirebase.firestore()

export const myAuth = getAuth(app)//Authentication in Firebase

export const myProvider = new GoogleAuthProvider()//Google Authentication in Firebase