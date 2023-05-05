import React, { useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  // Import the AuthContext and retrieve the currentUser variable using the useContext hook.
  const { currentUser } = useContext(AuthContext);

  // Define a ProtectedRoute component, which redirects unauthenticated users to the Login page.
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    // Set up the routing for the app using the Switch and Route components.
    <Switch>
      {/* The first route renders either the Home page or the Login page, depending on whether the user is authenticated. */}
      {/* If currentUser is null or undefined, render the Login component. Otherwise, render the Home component. */}
      {/* Commented out for now, since it's not clear whether this route is necessary given the ProtectedRoute below. */}
      {/* <Route path="/" element={currentUser ? <Home /> : <Login />} /> */}
      {/* OR */}

      {/* Alternatively, use the ProtectedRoute component to ensure that only authenticated users can access the Home page. */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* The second and third routes render the Login and Register pages, respectively. */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Switch>
  );
};

export default App;
