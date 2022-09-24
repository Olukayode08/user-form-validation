// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'user-form-validation-fce3a.firebaseapp.com',
  projectId: 'user-form-validation-fce3a',
  storageBucket: 'user-form-validation-fce3a.appspot.com',
  messagingSenderId: '653656960173',
  appId: '1:653656960173:web:df7ad8102d65319cb56a24',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app
