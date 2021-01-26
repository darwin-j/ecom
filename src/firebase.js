import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1jibTlY9FRY_6DEQxGYlkagkqA7RmvVA",
  authDomain: "ecommerce-app-e6972.firebaseapp.com",
  projectId: "ecommerce-app-e6972",
  storageBucket: "ecommerce-app-e6972.appspot.com",
  messagingSenderId: "279469611852",
  appId: "1:279469611852:web:ee5cabbe4ab9aab70e0de9",
});

export const auth = app.auth();

export default app;
