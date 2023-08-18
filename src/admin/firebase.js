import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAcUGc0FD2B2IXoS2yIiNVtk_tD8AWJzC4",
  authDomain: "aspire-c50ec.firebaseapp.com",
  projectId: "aspire-c50ec",
  storageBucket: "aspire-c50ec.appspot.com",
  messagingSenderId: "270553657136",
  appId: "1:270553657136:web:06019e84e1f50a918ba2f5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()