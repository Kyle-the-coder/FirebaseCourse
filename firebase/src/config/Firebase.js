import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

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
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)