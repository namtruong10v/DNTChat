import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAyw6mbvjGArHk3_TnPw7KnCS7B32CcSh4",
    authDomain: "chat-2e5c1.firebaseapp.com",
    projectId: "chat-2e5c1",
    storageBucket: "chat-2e5c1.appspot.com",
    messagingSenderId: "788883101692",
    appId: "1:788883101692:web:a54b1bd62e83f354b78479"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()