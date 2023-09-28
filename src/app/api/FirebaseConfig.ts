// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// instancias das functions do firebase
const functions = getFunctions(app);

// instancia do axios para fazer requisições via http
const instance = axios.create({
  baseURL: "https://southamerica-east1-pick-pega.cloudfunctions.net/api/",
});

export { app, functions, instance };
