import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
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
