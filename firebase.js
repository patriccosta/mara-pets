import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9nTckFZD0xCAcSFAbcn-BjIT2Q3b49TE",
  authDomain: "mara-pets-a87a4.firebaseapp.com",
  projectId: "mara-pets-a87a4",
  storageBucket: "mara-pets-a87a4.firebasestorage.app",
  messagingSenderId: "358357707843",
  appId: "1:358357707843:web:ee7d66e7f83b4fecc138f6",
  measurementId: "G-454S477VQ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
