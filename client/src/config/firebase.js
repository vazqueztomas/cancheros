// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm85ZY4iI-9jFUvq7NVDl1My2iDA6HcUE",
  authDomain: "cancheros-15f93.firebaseapp.com",
  projectId: "cancheros-15f93",
  storageBucket: "cancheros-15f93.appspot.com",
  messagingSenderId: "377535879212",
  appId: "1:377535879212:web:ec768c0ad93026c38d5989",
  measurementId: "G-EPZ7CK8S12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);