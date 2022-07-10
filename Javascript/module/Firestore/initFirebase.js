import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

// require('dotenv').config();

export function initFirebase() {
    const firebaseConfig = {
        // apiKey: process.env.FIREBASE_API_KEY,
        // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        // databaseURL: process.env.FIREBASE_DATABASE_URL,
        // projectId: process.env.FIREBASE_PROJECT_ID,
        // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        // appId: process.env.FIREBASE_APP_ID,
        // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        apiKey: "AIzaSyA55ZXbJqMAtcx8FJvqb7JdZjUFa2KCwiw",
        authDomain: "jokenpo-5661a.firebaseapp.com",
        databaseURL: "https://jokenpo-5661a-default-rtdb.firebaseio.com",
        projectId: "jokenpo-5661a",
        storageBucket: "jokenpo-5661a.appspot.com",
        messagingSenderId: "1076014675228",
        appId: "1:1076014675228:web:878ff073e8fc418a5a76d9",
        measurementId: "G-Q0L37559HT"
    };

    return firebaseConfig
}
// Initialize Firebase
const app = initializeApp(initFirebase());
const db = getFirestore(app);
// const database = getDatabase(app);

export { app, db, collection, getDocs, Timestamp, addDoc, query, orderBy, limit, where, onSnapshot };
