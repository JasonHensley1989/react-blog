import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from '@firebase/firestore';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZ3AJ_yArV8LBQ-pcsL_ToAMaPHrW71I",
  authDomain: "the-daily-blogger.firebaseapp.com",
  projectId: "the-daily-blogger",
  storageBucket: "the-daily-blogger.appspot.com",
  messagingSenderId: "9591758421",
  appId: "1:9591758421:web:1063463b899f53423b7edc"
};

// Reference to Firstore DB
const db = getFirestore(app)

// Read data from a Firestore collection
const blogsRef = collection(db, "blogs");
getDocs(blogsRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});

// Add the data to Firestore
data.blogs.forEach((blog) => {
  db.collection('blogs').add(blog)
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
    })
    .catch((error) => {
      console.error(`Error adding document: ${error}`);
    });
});