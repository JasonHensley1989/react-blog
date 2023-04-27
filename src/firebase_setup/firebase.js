import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZ3AJ_yArV8LBQ-pcsL_ToAMaPHrW71I",
  authDomain: "the-daily-blogger.firebaseapp.com",
  projectId: "the-daily-blogger",
  storageBucket: "the-daily-blogger.appspot.com",
  messagingSenderId: "9591758421",
  appId: "1:9591758421:web:1063463b899f53423b7edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);