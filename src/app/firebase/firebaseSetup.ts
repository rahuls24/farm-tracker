// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxT65sfrZYyzf1XYAQvtQqlJyE784SWi0",
  authDomain: "farm-tracker-d399f.firebaseapp.com",
  projectId: "farm-tracker-d399f",
  storageBucket: "farm-tracker-d399f.appspot.com",
  messagingSenderId: "819467537503",
  appId: "1:819467537503:web:8ea9977a93932fca875fea",
  measurementId: "G-0BHN226P3Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);