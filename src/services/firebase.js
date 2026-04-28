import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp2BfHnVjiva8noLsXGat5FgDzI5tJYYw",
  authDomain: "taqwaa-f.firebaseapp.com",
  projectId: "taqwaa-f",
  storageBucket: "taqwaa-f.firebasestorage.app",
  messagingSenderId: "916833135392",
  appId: "1:916833135392:web:3a84c06b7f790f30618545",
  measurementId: "G-1M24HCY2VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
