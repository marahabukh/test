
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCj3OKu_opXJJ1jP7svAg_Uosm-YUL8048",
    authDomain: "proteina-e82b6.firebaseapp.com",
    projectId: "proteina-e82b6",
    storageBucket: "proteina-e82b6.firebasestorage.app",
    messagingSenderId: "768271965202",
    appId: "1:768271965202:web:075116c611ad78e5c34ccb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
