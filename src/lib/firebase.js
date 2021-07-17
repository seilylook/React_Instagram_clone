import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJv9L-gR_k95Ry0WmttJPtM8wViI7K3v4",
  authDomain: "instagram-yt-16de2.firebaseapp.com",
  projectId: "instagram-yt-16de2",
  storageBucket: "instagram-yt-16de2.appspot.com",
  messagingSenderId: "473648717413",
  appId: "1:473648717413:web:4235dc394df992766db08c"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
