// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD14PdmDPDWJHQkP8IQIPfXr4ynKK-E7EU",
  authDomain: "sympcheck-514d9.firebaseapp.com",
  projectId: "sympcheck-514d9",
  storageBucket: "sympcheck-514d9.appspot.com",
  messagingSenderId: "851462470342",
  appId: "1:851462470342:web:864a0dd07aae6c9a52b5c7",
  measurementId: "G-QRVQ4TW1V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};