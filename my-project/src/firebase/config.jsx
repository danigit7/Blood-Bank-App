import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOefhJXmLQfNprfGs60ipV-sGQoVas3T8",
  authDomain: "bloodbankapp-81863.firebaseapp.com",
  projectId: "bloodbankapp-81863",
  storageBucket: "bloodbankapp-81863.firebasestorage.app",
  messagingSenderId: "971040097344",
  appId: "1:971040097344:web:e10c375c7f20bc0d698ba5",
  measurementId: "G-M9S7Y54W8D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };