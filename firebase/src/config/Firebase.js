// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-50MEc_U_KLFEYvyjdZk-YaxGCO0mfPc",
  authDomain: "fir-course91.firebaseapp.com",
  projectId: "fir-course91",
  storageBucket: "fir-course91.appspot.com",
  messagingSenderId: "1016658627693",
  appId: "1:1016658627693:web:a2df8ebfb3dfaed87a4364",
  measurementId: "G-VV2TNJ56YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);