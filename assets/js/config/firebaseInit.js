
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'

import {firebaseConfig} from "./firebaseConfig.js"

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getFirestore()

export {
    auth,
    database
}