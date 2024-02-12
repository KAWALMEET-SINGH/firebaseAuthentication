import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import OAuth from "./OAuthGoogle";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(email, password);
      const auth = getAuth(app);
      const userCredetial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredetial.user;
      sessionStorage.setItem('access_token',JSON.stringify(user.accessToken))
      sessionStorage.setItem('current_user',JSON.stringify(user))
      navigate('/authenticated')
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>SignIn</h1>
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
        <button>Submit</button>
      </form>
      <OAuth/>
      <Link to={`/signUp`}>
        <h4>Create an account</h4>
      </Link>
    </div>
  );
};

export default SignIn;
