// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIUeCwRv9q-7ZNzT6rMm57_uex5Zm8VWQ",
  authDomain: "auth-project-a291e.firebaseapp.com",
  projectId: "auth-project-a291e",
  storageBucket: "auth-project-a291e.appspot.com",
  messagingSenderId: "11659634539",
  appId: "1:11659634539:web:e81e4283ea3760d0b38e2e",
  measurementId: "G-Z3QPZ5JJ7E"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);