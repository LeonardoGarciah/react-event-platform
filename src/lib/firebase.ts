// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCugJqYmTIENhGzgFcpljVokWdEMqxbfKU",
  authDomain: "event-platform-aff4d.firebaseapp.com",
  projectId: "event-platform-aff4d",
  storageBucket: "event-platform-aff4d.appspot.com",
  messagingSenderId: "143739113795",
  appId: "1:143739113795:web:99abf36d60bcfae2bc1ff6",
  measurementId: "G-YC2PQBYL0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}