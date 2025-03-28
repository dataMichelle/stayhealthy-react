// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Firebase config object (find this in your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCasktzzMX4vnEfyUENpr83Kwwo3C64GmY",
  authDomain: "stay-healthy-3a86a.firebaseapp.com",
  projectId: "stay-healthy-3a86a",
  storageBucket: "stay-healthy-3a86a.appspot.com",
  messagingSenderId: "520758680131",
  appId: "1:520758680131:web:6a22775e43a26f56c612f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
