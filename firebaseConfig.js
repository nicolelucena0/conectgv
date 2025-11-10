import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPWBtOwv222xdDOR0zoSjmCRvdl8J00Jg",
  authDomain: "conectgv.firebaseapp.com",
  projectId: "conectgv",
  storageBucket: "conectgv.firebasestorage.app",
  messagingSenderId: "601801742961",
  appId: "1:601801742961:web:2513675086591ba99519d0",
  measurementId: "G-1MZ07WNH16"
};


const app = initializeApp(firebaseConfig);

const auth =initializeAuth(app);
const db = getFirestore(app);

export { auth, db };
