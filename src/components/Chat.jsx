import React, { useContext } from "react";
import Add from "../images/add-user.png";
import Camera from "../images/camera.png";
import ThreeDot from "../images/threedot.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
    // console.log("data...............",data);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={ThreeDot} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
