import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext();
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.paylaod,
          chatID:
            currentUser.uid > action.paylaod.uid
              ? currentUser.uid + action.paylaod.uid
              : action.paylaod.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
