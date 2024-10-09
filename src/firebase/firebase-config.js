
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw3Ao1nZr2-ndHZSFM3dsgU5c3BPg5IHk",
  authDomain: "e-commerce-15423.firebaseapp.com",
  projectId: "e-commerce-15423",
  storageBucket: "e-commerce-15423.appspot.com",
  messagingSenderId: "875525298559",
  appId: "1:875525298559:web:422757642e28d32d45224a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };