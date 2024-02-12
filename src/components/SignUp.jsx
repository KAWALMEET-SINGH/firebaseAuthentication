import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase'
import { Link } from "react-router-dom";
import OAuth from "./OAuthGoogle";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        return
      }
      console.log(email, password);
      const auth = getAuth(app);
      const userCredetial = await createUserWithEmailAndPassword(auth,email,password)
      const user = userCredetial.user;
      console.log(user);
      sessionStorage.setItem('access_token',JSON.stringify(user.accessToken))
      sessionStorage.setItem('current_user',JSON.stringify(user))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password"
          name="password"
          id="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="rewrite enter your password"
          name="confirmPassword"
          id="confirmPassword"
        />
        <button>Submit</button>
      </form>
      <OAuth/>
      {(password !== confirmPassword) &&
      (<h2>Passwords Must be same</h2>)

      }

      <Link to={`/`}>
        <h4>Have an account? Sign In</h4>
      </Link>
    </div>
  );
};

export default SignUp;
