import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../../../firebase";

export default function LogIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <Link to="/">
        <h3>ecom</h3>
      </Link>
      <div className="login__container">
        <h1>sign In</h1>

        <label>E-mail :</label>
        <input onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password :</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => signIn(email, password)}>Sign In</button>

        <button onClick={() => signUp(email, password)}>
          Create your ecom account
        </button>
      </div>
    </>
  );
}
