import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">React Chat App</span>
      <div className="user">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
        <span>John</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
          type=""
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
