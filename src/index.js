import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

// Use ReactDOM.createRoot to create a new root instance for the app.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrap the entire app in a React.StrictMode component to enable strict mode.
  <React.StrictMode>
    {/* Wrap the App component in several context providers and the Router component. */}
    <AuthContextProvider>
      <ChatContextProvider>
        <Router>
          <App />
        </Router>
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// This code sets up the root component for the React app and renders it to the DOM.
// It imports several modules, including the main App component, the AuthContextProvider, and the ChatContextProvider.
// It also imports the BrowserRouter from the react-router-dom package.
// The ReactDOM.createRoot method is used to create a new root instance, which will be used to render the app.
// The root instance renders the App component wrapped in several context providers and the Router component.
// The AuthContextProvider and ChatContextProvider components provide context for the app, which can be used to pass state down to child components.
// The Router component provides client-side routing for the app, allowing the user to navigate between different pages without triggering a full page refresh.
// The React.StrictMode component is included to enable strict mode, which helps catch potential issues and ensure best practices are followed.
// The root instance is then rendered to the "root" element in the HTML file using the render method.
