// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDix-J_gSkNRTdla4-PpTMNTBzM5eIcUm0",
  authDomain: "ecommerce-app-a20aa.firebaseapp.com",
  projectId: "ecommerce-app-a20aa",
  storageBucket: "ecommerce-app-a20aa.appspot.com",
  messagingSenderId: "254401256519",
  appId: "1:254401256519:web:61ace9173c06f75501a562",
  measurementId: "G-C03WV9H2CJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);