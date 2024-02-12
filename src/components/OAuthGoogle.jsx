import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const userCredetial = await signInWithPopup(auth, provider);

      
      const user = userCredetial.user;
      console.log(user);
      sessionStorage.setItem('access_token',JSON.stringify(user.accessToken))
      sessionStorage.setItem('current_user',JSON.stringify(user))
      navigate('/authenticated')
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
    >
      Continue With Google
    </button>
  );
};

export default OAuth;