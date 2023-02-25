// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGUiqUb9nJd2HlzOu-ZHF1XBmeI4gHCOE",
  authDomain: "chatapi-7a648.firebaseapp.com",
  projectId: "chatapi-7a648",
  storageBucket: "chatapi-7a648.appspot.com",
  messagingSenderId: "13962537633",
  appId: "1:13962537633:web:16f351e15ccb4615529ee0",
  measurementId: "G-3TTYS3W8HR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", "8080");
// }
export { db, auth };
export default firebase;
