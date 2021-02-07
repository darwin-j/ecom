import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: //your data,
  authDomain: //your data,
  projectId: //your data,
  storageBucket: //your data,
  messagingSenderId: //your data,
  appId: //your data,
});

export const auth = app.auth();

export default app;
