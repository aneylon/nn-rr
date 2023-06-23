import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBVypE4Boyb3OSLGT6j1M9Z7qbg2CGTUOg",
  authDomain: "finance-ninja-e1bc2.firebaseapp.com",
  projectId: "finance-ninja-e1bc2",
  storageBucket: "finance-ninja-e1bc2.appspot.com",
  messagingSenderId: "961966885277",
  appId: "1:961966885277:web:d46734e43f325a59d50774",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
