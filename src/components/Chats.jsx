import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  // Define state variables for chats and current user
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  // Fetch chats data from Firestore
  useEffect(() => {
    const getChats = () => {
      // Subscribe to changes to the user's chat document in Firestore
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    // Only fetch chats if the current user is defined
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // Handle selecting a chat user
  const handleSelect = (u) => {
    // Dispatch an action to update the chat context with the selected user
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {/* Map over the user's chat documents and display each chat */}
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo?.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo?.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
