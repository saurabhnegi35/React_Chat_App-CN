import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  // set initial state for messages using useState hook
  const [messages, setMessages] = useState([]);
  // access chat data from context using useContext hook
  const { data } = useContext(ChatContext);

  // set up useEffect hook to subscribe to changes in messages collection
  useEffect(() => {
    try {
      // create an onSnapshot listener for the specified document in the "chats" collection
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        // check if document exists and update state with messages
        doc.exists() && setMessages(doc.data().message);
        // return an unsubscribe function to avoid memory leaks
        return () => {
          unSub();
        };
      });
    } catch (error) {
      // log any errors
      console.log(error);
    }
  }, [data.chatId]);

  // render messages using map method
  return (
    <div className="messages">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
