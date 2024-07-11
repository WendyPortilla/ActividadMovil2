// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC87DicF-wy1ZmDXKmdmSusMXrCxExuwAw",
  authDomain: "app-fire-5ad84.firebaseapp.com",
  databaseURL: "https://app-fire-5ad84-default-rtdb.firebaseio.com",
  projectId: "app-fire-5ad84",
  storageBucket: "app-fire-5ad84.appspot.com",
  messagingSenderId: "387368922465",
  appId: "1:387368922465:web:5b75aa71776ad2eebfe920",
  measurementId: "G-BNTM3XFNJ4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);