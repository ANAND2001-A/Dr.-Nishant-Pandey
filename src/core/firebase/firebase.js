import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfLqh4idOL1OShp69cUU-VTywU3SaxQ1s",
  authDomain: "learnwithbuder.firebaseapp.com",
  projectId: "learnwithbuder",
  storageBucket: "learnwithbuder.appspot.com", // ✅ fixed
  messagingSenderId: "692609512717",
  appId: "1:692609512717:web:e89bbc74306a767c412c44"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
