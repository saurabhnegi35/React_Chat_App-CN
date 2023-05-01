import React from "react";
import Add from "../images/add-user.png";
import Camera from "../images/camera.png";
import ThreeDot from "../images/threedot.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Saurabh</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={ThreeDot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
