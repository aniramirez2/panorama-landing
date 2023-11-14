// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAohkpWRtWmxtHU6Oz2thNqKznCn0nPJbQ",
  authDomain: "panorama-1cf5f.firebaseapp.com",
  databaseURL: "https://panorama-1cf5f-default-rtdb.firebaseio.com",
  projectId: "panorama-1cf5f",
  storageBucket: "panorama-1cf5f.appspot.com",
  messagingSenderId: "548927677028",
  appId: "1:548927677028:web:b8457f8239cbf42044b571",
  measurementId: "G-H0D7P1RWTV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);