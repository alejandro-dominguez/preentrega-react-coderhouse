import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQdvwzmRszyv74v3zIWWBmYzML2yfowFk",
  authDomain: "geekommerce-95374.firebaseapp.com",
  projectId: "geekommerce-95374",
  storageBucket: "geekommerce-95374.appspot.com",
  messagingSenderId: "747992791057",
  appId: "1:747992791057:web:90cea033fd98d5daa059b0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);