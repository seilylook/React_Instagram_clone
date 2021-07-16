import Firebase from "firebase/app";
import "firebase/firesstore";
import "firebase/auth";

const config = {
  apikey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
