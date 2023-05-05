import React, { useContext } from "react";
import Add from "../images/add-user.png";
import Camera from "../images/camera.png";
import ThreeDot from "../images/threedot.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  // Render the chat component UI
  return (
    <div className="chat">
      <div className="chatInfo">
        <img className="img-profile" src={data.user?.photoURL} alt="" />
        <span>{data.user?.displayName}</span>

        {/* Chat icons */}
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={ThreeDot} alt="" />
        </div>
      </div>

      {/* Render chat messages */}
      <Messages />

      {/* Render chat input */}
      <Input />
    </div>
  );
};

export default Chat;
