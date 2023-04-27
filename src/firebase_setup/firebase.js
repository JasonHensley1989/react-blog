import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, getDocs } from '@firebase/firestore';
import dbData from '../db.json';
import { firestore } from "../firebase_setup/firebase";

console.log(dbData)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZ3AJ_yArV8LBQ-pcsL_ToAMaPHrW71I",
  authDomain: "the-daily-blogger.firebaseapp.com",
  projectId: "the-daily-blogger",
  storageBucket: "the-daily-blogger.appspot.com",
  messagingSenderId: "9591758421",
  appId: "1:9591758421:web:1063463b899f53423b7edc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// // Read data from a Firestore collection
// const blogsRef = collection(db, "blogs");
// getDocs(blogsRef).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// });

// // Add the data to Firestore
// dbData.blogs.forEach((blog) => {
//   console.log("For Each Executed");
//   addDoc(collection(db, "blogs"), blog)
//     .then((docRef) => {
//       console.log(`Document written with ID: ${docRef.id}`);
//     })
//     .catch((error) => {
//       console.error(`Error adding document: ${error}`);
//     });
// });

// // Add the data to Firestore
// // dbData.blogs.forEach((blog) => {
// //   const docRef = collection(db, "blogs").doc();
// //   setDoc(docRef, blog)
// //     .then(() => {
// //       console.log(`Document written with ID: ${docRef.id}`);
// //     })
// //     .catch((error) => {
// //       console.error(`Error adding document: ${error}`);
// //     });
// // });

const blogsData = {
  "blogs": [
    {
      "title": "My First Blog",
      "body": "Why do we use it? Its a long established fact that the more that we do things the more we do them",
      "author": "Jason H.",
      "id": 1
    },
    {
      "title": "My Second Blog",
      "body": "Why do we use it? Its a long established fact that the more that we do things the more we do them and things change. ",
      "author": "J.H.",
      "id": 2
    },
    {
      "title": "Jason",
      "body": "Today is a day",
      "author": "",
      "id": 7
    },
    {
      "title": "Hello",
      "body": "Programmatic Redirection",
      "author": "J.H.",
      "id": 9
    }
  ]
};

// Read data from a Firestore collection
const blogsRef = collection(firestore, "blogs");
getDocs(blogsRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});

// Add the data to Firestore
blogsData.blogs.forEach((blog) => {
  addDoc(collection(firestore, "blogs"), blog)
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
    })
    .catch((error) => {
      console.error(`Error adding document: ${error}`);
    });
});