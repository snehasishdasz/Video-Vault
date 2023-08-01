// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLxV4SMVFY0xtVg598IXBag6pTiA57qk",
  authDomain: "videovault-443fb.firebaseapp.com",
  projectId: "videovault-443fb",
  storageBucket: "videovault-443fb.appspot.com",
  messagingSenderId: "606202808687",
  appId: "1:606202808687:web:e10e62443346d41804009a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
