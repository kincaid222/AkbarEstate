// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsxG9FWqeSS3kTpL7_b4FjAZVl5gcmi5M",
  authDomain: "akbar-estate.firebaseapp.com",
  projectId: "akbar-estate",
  storageBucket: "akbar-estate.appspot.com",
  messagingSenderId: "730594574585",
  appId: "1:730594574585:web:8ed52b52092b073b2b6228",
  measurementId: "G-QDVNF1E8DP"
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);