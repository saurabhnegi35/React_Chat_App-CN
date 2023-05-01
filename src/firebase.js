
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Nx5qTj49jbbbIBYx9R_ks7wGSKhx1T8",
  authDomain: "react-chat-app-12ee3.firebaseapp.com",
  projectId: "react-chat-app-12ee3",
  storageBucket: "react-chat-app-12ee3.appspot.com",
  messagingSenderId: "423006948938",
  appId: "1:423006948938:web:940cb4b0f1e9b7f0a260b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
