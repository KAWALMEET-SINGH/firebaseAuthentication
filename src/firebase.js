// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "authentication-5593c.firebaseapp.com",
  projectId: "authentication-5593c",
  storageBucket: "authentication-5593c.appspot.com",
  messagingSenderId: "474050573807",
  appId: "1:474050573807:web:2d201fd943ead94b58721a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);