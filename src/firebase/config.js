// claramente esto en realidad no se sube a ningun lugar de forma pública

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmZ38B6JZcaR2sh_7lTLibCkvHGN6JtE",
  authDomain: "proyecto-clases-react2026.firebaseapp.com",
  projectId: "proyecto-clases-react2026",
  storageBucket: "proyecto-clases-react2026.firebasestorage.app",
  messagingSenderId: "401338447493",
  appId: "1:401338447493:web:091bde3001f75d2b295bec",
  measurementId: "G-KFS1S0JWJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};