import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwks2vI6ukBiKC0_bxClxcAsY1GJ-TY4c",
  authDomain: "managr-f5488.firebaseapp.com",
  projectId: "managr-f5488",
  storageBucket: "managr-f5488.appspot.com",
  messagingSenderId: "690359190063",
  appId: "1:690359190063:web:824d746c33d1fdb3c9fcda",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
