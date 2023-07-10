console.log("testings");

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1vivdiF6e5FgWdwVxNOgsGdn3GAdgobY",
  authDomain: "cooking-ninja-site-748ac.firebaseapp.com",
  projectId: "cooking-ninja-site-748ac",
  storageBucket: "cooking-ninja-site-748ac.appspot.com",
  messagingSenderId: "631316023083",
  appId: "1:631316023083:web:973bca70adfc98ccaf276e",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const ref = collection(db, "books");

getDocs(ref)
  .then((snapshot) => {
    // console.log(snapshot.docs);
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((error) => console.error(error));
// lesson 5
