import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

// This component represents the Home page of the chat application.
const Home = () => {
  return (
    // The Home component contains a container div, which has two child components: Sidebar and Chat.
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
