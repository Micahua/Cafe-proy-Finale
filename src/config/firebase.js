import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyCVwGU-GGFMcJwQFPcdBINBl0r5QOjnA3E",
    authDomain: "cafecito-proy.firebaseapp.com",
    projectId: "cafecito-proy",
    storageBucket: "cafecito-proy.firebasestorage.app",
    messagingSenderId: "370727290716",
    appId: "1:370727290716:web:6122298396342fbfd9a399"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
