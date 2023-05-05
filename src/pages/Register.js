import React, { useState } from "react";
import Add from "../images/add-user.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import "../style.scss";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // State variables
  const [err, setErr] = useState(false);

  // Hooks
  const navigate = useNavigate();

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get values from form fields
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user account using Firebase auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a storage reference for the user's profile picture
      const storageRef = ref(storage, displayName);

      // Upload the profile picture to Firebase storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register observers to listen for events during the upload process
      uploadTask.on(
        (error) => {
          setErr(true); // Handle errors during upload
        },
        () => {
          // Get the download URL of the uploaded file
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update user's display name and profile picture
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });

            // Create a new user document in Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName,
              email,
              photoURL: downloadURL,
            });

            // Create a new document in userChats collection for the user
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Navigate to home page
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true); // Handle errors during account creation
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
        <p>
          Have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
