// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqMJag1uXmUdkGWoeGCBLdrKBo35C0rmg",
  authDomain: "moviegpt-728b2.firebaseapp.com",
  projectId: "moviegpt-728b2",
  storageBucket: "moviegpt-728b2.firebasestorage.app",
  messagingSenderId: "473517399366",
  appId: "1:473517399366:web:4ba55052142d1eccf91947",
  measurementId: "G-BX6Y3M43KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);