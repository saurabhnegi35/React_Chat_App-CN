import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    try {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().message);
        return () => {
          unSub();
        };
      });
    } catch (error) {
      console.log(error);
    }
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
