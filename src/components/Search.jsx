import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" value="" />
      </div>
      <div className="userChat">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Saurabh</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
