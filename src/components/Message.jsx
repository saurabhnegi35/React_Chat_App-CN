import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // get the current user from the AuthContext
  const { currentUser } = useContext(AuthContext);

  // get the chat data from the ChatContext
  const { data } = useContext(ChatContext);

  // create a reference to the div element, using the useRef hook
  const ref = useRef();

  // useEffect hook that scrolls to the bottom of the div element every time a new message is received
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    // a div element that holds the message data, using the ref to create a scrolling effect
    <div
      ref={ref}
      // a conditional class that adds the "owner" class if the message was sent by the current user
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      {/* a div element that holds the message info, including sender's photo and time */}
      <div className="messageInfo">
        <img
          // a conditional src attribute that displays the current user's photo or the other user's photo
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>Just Now</span>
      </div>
      {/* a div element that holds the message content, including the text and image if any */}
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
