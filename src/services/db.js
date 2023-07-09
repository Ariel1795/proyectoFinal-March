
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "proyecto-final-march.firebaseapp.com",
    projectId: "proyecto-final-march",
    storageBucket: "proyecto-final-march.appspot.com",
    messagingSenderId: "703844028090",
    appId: "1:703844028090:web:f8c8e33e91928c0baabc83"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);