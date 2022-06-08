// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg5_3uoe5IgPAOiXiC28lrsZjUA3Nm5Wo",
  authDomain: "instagram-clone-e47e1.firebaseapp.com",
  projectId: "instagram-clone-e47e1",
  storageBucket: "instagram-clone-e47e1.appspot.com",
  messagingSenderId: "607536800476",
  appId: "1:607536800476:web:ec4e39f5162dc05919ca19",
  measurementId: "G-Z54BEHZQXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);