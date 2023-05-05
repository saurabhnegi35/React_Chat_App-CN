import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// This object contains the Firebase configuration, including the API key and other settings.
const firebaseConfig = {
  apiKey: "AIzaSyD_Nx5qTj49jbbbIBYx9R_ks7wGSKhx1T8",
  authDomain: "react-chat-app-12ee3.firebaseapp.com",
  projectId: "react-chat-app-12ee3",
  storageBucket: "react-chat-app-12ee3.appspot.com",
  messagingSenderId: "423006948938",
  appId: "1:423006948938:web:940cb4b0f1e9b7f0a260b3",
};

// Initialize Firebase by passing the Firebase configuration object to the initializeApp function from the Firebase app package.
export const app = initializeApp(firebaseConfig);

// Get the Firebase authentication service instance using the getAuth function from the Firebase auth package.
export const auth = getAuth();

// Get the Firebase Cloud Firestore service instance using the getFirestore function from the Firebase firestore package.
export const db = getFirestore();

// Get the Firebase Cloud Storage service instance using the getStorage function from the Firebase storage package.
export const storage = getStorage();
