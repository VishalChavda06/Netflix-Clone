// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCW-g_OauKfwxBK76SDu7y31q-8pXdEvoQ",
//   authDomain: "netflixapp-c0d9b.firebaseapp.com",
//   projectId: "netflixapp-c0d9b",
//   storageBucket: "netflixapp-c0d9b.firebasestorage.app",
//   messagingSenderId: "391447086731",
//   appId: "1:391447086731:web:5c6dc31dfe7fbb391a368e"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);

// export { auth, createUserWithEmailAndPassword };


// Firebase.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCW-g_OauKfwxBK76SDu7y31q-8pXdEvoQ",
  authDomain: "netflixapp-c0d9b.firebaseapp.com",
  projectId: "netflixapp-c0d9b",
  storageBucket: "netflixapp-c0d9b.firebasestorage.app",
  messagingSenderId: "391447086731",
  appId: "1:391447086731:web:5c6dc31dfe7fbb391a368e"
};

const app = initializeApp(firebaseConfig);

export default app;
