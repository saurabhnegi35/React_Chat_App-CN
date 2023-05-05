import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // Set the current user state to the user object returned by Firebase
    });

    // Unsubscribe from the onAuthStateChanged listener when the component unmounts
    return () => {
      unsub();
    };
  }, []);

  // Provide the current user object to all child components that consume the AuthContext
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
