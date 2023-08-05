import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, database, ref ,set};
