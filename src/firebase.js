// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdL7If_ODobqV9-Fb3QpVe3RbemIE3rLM",
  authDomain: "firechat-b0a20.firebaseapp.com",
  projectId: "firechat-b0a20",
  storageBucket: "firechat-b0a20.appspot.com",
  messagingSenderId: "314895280950",
  appId: "1:314895280950:web:2488e9d5ce77ca26b5a197",
  measurementId: "G-SKBT438FRS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// export { app, auth, storage, db };