import React, { Children, useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = (children) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <Switch>
      {/* <Route path="/" element={currentUser ? <Home /> : <Login />} /> */}
      {/* OR */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Switch>
  );
};

export default App;
