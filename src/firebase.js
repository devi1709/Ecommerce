import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD27zF4PbIfLw7Eg_rLZ4wTXjA42WQYpmE",
  authDomain: "react-authentication-51b7c.firebaseapp.com",
  projectId: "react-authentication-51b7c",
  storageBucket: "react-authentication-51b7c.appspot.com",
  messagingSenderId: "509699107770",
  appId: "1:509699107770:web:40e418e696c51099bb4b83",
  measurementId: "G-D30PMRJGJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;