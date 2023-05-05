import { createContext, useContext, useReducer } from "react";

import { AuthContext } from "./AuthContext";

// Create a new context for chat-related state
export const ChatContext = createContext();

// Define the ChatContextProvider component, which will wrap the entire app
export const ChatContextProvider = ({ children }) => {
  // Get the currentUser object from the AuthContext
  const { currentUser } = useContext(AuthContext);

  // Define the initial state of the chat-related data
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  // Define the chatReducer function that will be used to update the chat-related state
  const chatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        // When the user changes, update the chatId accordingly
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  // Use the useReducer hook to create the state and dispatch function for the chat-related data
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  // Return the ChatContextProvider component, passing in the state and dispatch functions as value to the context
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
