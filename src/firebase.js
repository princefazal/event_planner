// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged,  signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, onSnapshot, collection, addDoc, getDocs, where, query , doc, deleteDoc} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvjmbOsRlGM0ErRIyeOMOKOJ8dholbsE",
  authDomain: "event-palner.firebaseapp.com",
  projectId: "event-palner",
  storageBucket: "event-palner.appspot.com",
  messagingSenderId: "235327431926",
  appId: "1:235327431926:web:f696d18c827dc57b9238d7",
  measurementId: "G-BG49NXP9YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();
const db = getFirestore();
const todoRef = collection(db, 'todo')
const userRef = collection(db, 'user')
const eventRef = collection(db, 'events')


export {
    auth,
    db, todoRef,
    provider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    addDoc, getDocs,
    where, query,
    getStorage, ref,
    getDownloadURL,
    eventRef,
    onSnapshot,
    userRef,
    signOut, uploadBytes,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    doc,
    deleteDoc,
}