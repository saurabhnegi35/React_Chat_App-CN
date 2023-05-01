import React, { useState } from "react";
import Add from "../images/add-user.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../style.scss";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" /> <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went Wrong...</span>}
        </form>
        <p>Have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
