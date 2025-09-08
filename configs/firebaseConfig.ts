// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "interior-ai-b1907.firebaseapp.com",
  projectId: "interior-ai-b1907",
  storageBucket: "interior-ai-b1907.firebasestorage.app",
  messagingSenderId: "372654822390",
  appId: "1:372654822390:web:90689798ea865b6030add7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)