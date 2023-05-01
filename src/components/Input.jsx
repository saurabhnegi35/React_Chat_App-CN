import React from "react";
import Images from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Your Message..." value="" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Images} alt="" />
        </label>
        <button type="">Send</button>
      </div>
    </div>
  );
};

export default Input;
