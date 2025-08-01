import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW-g_OauKfwxBK76SDu7y31q-8pXdEvoQ",
  authDomain: "netflixapp-c0d9b.firebaseapp.com",
  projectId: "netflixapp-c0d9b",
  storageBucket: "netflixapp-c0d9b.firebasestorage.app",
  messagingSenderId: "391447086731",
  appId: "1:391447086731:web:5c6dc31dfe7fbb391a368e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth }
export default db;