import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOnjmgZXTunO0lVvWEON-GMOAGXV26yUI",
  authDomain: "commerce-industries.firebaseapp.com",
  projectId: "commerce-industries",
  storageBucket: "commerce-industries.firebasestorage.app",
  messagingSenderId: "894028269304",
  appId: "1:894028269304:web:b97eddc5b2e9cb2bf81d0d",
  measurementId: "G-3LM507FDKH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
