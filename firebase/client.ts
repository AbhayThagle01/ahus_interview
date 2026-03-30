// Import the functions you need from the SDKs you need

import { initializeApp,getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj-kugUIMymmM6PDCYs6pL2Mzd2WeqDUg",
  authDomain: "ahus-interview.firebaseapp.com",
  projectId: "ahus-interview",
  storageBucket: "ahus-interview.firebasestorage.app",
  messagingSenderId: "318992346606",
  appId: "1:318992346606:web:6c67a0e66785cb15deb2ff",
  measurementId: "G-HW1KN163CQ"
};

// Initialize Firebase
const app =!getApps.length?  initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const dp=getFirestore(app)