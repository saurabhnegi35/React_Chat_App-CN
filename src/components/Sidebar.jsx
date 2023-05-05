import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

// Creating a functional component called Sidebar
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Rendering the Navbar component */}
      <Navbar />
      {/* Rendering the Search component */}
      <Search />
      {/* Rendering the Chats component */}
      <Chats />
    </div>
  );
};

// Exporting the Sidebar component as default
export default Sidebar;
