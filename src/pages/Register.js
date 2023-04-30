import React from "react";
import Add from "../images/add-user.png";
import "../style.scss";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" /> <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
