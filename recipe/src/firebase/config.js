import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1vivdiF6e5FgWdwVxNOgsGdn3GAdgobY",
  authDomain: "cooking-ninja-site-748ac.firebaseapp.com",
  projectId: "cooking-ninja-site-748ac",
  storageBucket: "cooking-ninja-site-748ac.appspot.com",
  messagingSenderId: "631316023083",
  appId: "1:631316023083:web:973bca70adfc98ccaf276e",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
export { projectFirestore };
