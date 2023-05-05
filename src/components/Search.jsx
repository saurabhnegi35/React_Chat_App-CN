import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  // State to hold the value of the input field.
  const [username, setUsername] = useState("");
  // State to hold the user data when it is found.
  const [user, setUser] = useState(null);
  // State to hold whether an error occurs during the search.
  const [err, setErr] = useState(false);

  // Access the current user from the AuthContext.
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      // Reference to the users collection in Firestore.
      collection(db, "users"),
      // Filter the query to look for user with matching displayName.
      where("displayName", "==", username)
    );

    try {
      // Execute the query.
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // Set the user data to the state when a matching user is found.
        setUser(doc.data());
      });
    } catch (err) {
      // Set the error state to true when there is an error during the search.
      setErr(true);
    }
  };

  const handleKey = (e) => {
    // When the Enter key is pressed, execute the search function.
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;       // Combine the two user IDs to create the chat ID.
    try {
      // Check if the chat already exists.
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // If the chat doesn't exist, create a new chat document in the "chats" collection.
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // Update the "userChats" collection for both users.
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);      // Reset the state to clear the user data.
    setUsername("");    // Reset the input field.
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {/* Render an error message if there's an error during the search. */}
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
