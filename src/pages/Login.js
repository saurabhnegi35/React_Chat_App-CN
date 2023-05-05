import React, { useState } from "react";
import "../style.scss";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// This component represents the Login page of the chat application.
const Login = () => {
  // State variables
  const [err, setErr] = useState(false);

  // Hooks
  const navigate = useNavigate();

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  // The Login component contains a container div with a child form.
  // The form has three inputs: email, password, and a button to submit the form.
  // If there is an error, it displays a message.
  // It also contains a link to the Register page.

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
          {err && <span>Something went Wrong...</span>}
        </form>
        <p>
          Do not have an Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
