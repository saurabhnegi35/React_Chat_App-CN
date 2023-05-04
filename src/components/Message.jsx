import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  //   console.log("Messages from Message..................", message);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={currentUser} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
