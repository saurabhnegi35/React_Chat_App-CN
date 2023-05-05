import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

// This component is responsible for rendering the navbar at the top of the app
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">React Chat App</span>
      <div className="user">
        {/* Displays the profile picture of the logged in user */}
        <img src={currentUser.photoURL} alt="" />
        {/* Displays the display name of the logged in user */}
        <span>{currentUser.displayName}</span>
        {/* When clicked, it logs out the current user */}
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
