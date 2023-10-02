// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDfgg2oN4msrMCOC_KLkA7BZW0huauWI-s",
  authDomain: "snapchat-clone-772fc.firebaseapp.com",
  projectId: "snapchat-clone-772fc",
  storageBucket: "snapchat-clone-772fc.appspot.com",
  messagingSenderId: "370702957129",
  appId: "1:370702957129:web:77837e0625b3050b151d98",
  measurementId: "G-8NS8JJ0RH4",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
