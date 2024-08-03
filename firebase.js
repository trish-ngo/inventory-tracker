// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13uz4C0Ey3SEnBarkePBUijsAH-TtvHY",
  authDomain: "inventory-tracker-66368.firebaseapp.com",
  projectId: "inventory-tracker-66368",
  storageBucket: "inventory-tracker-66368.appspot.com",
  messagingSenderId: "703759748987",
  appId: "1:703759748987:web:f80645a0135192f3e2b7de",
  measurementId: "G-M4PVLP2RHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}