// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZKMLK6Y65I1pN-IplpJFvt0tH8ZBS5Ps",
  authDomain: "event-hub-cce01.firebaseapp.com",
  projectId: "event-hub-cce01",
  storageBucket: "event-hub-cce01.appspot.com",
  messagingSenderId: "121355320873",
  appId: "1:121355320873:web:254f362505408beb1fa638",
  measurementId: "G-9V1VWF544X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}