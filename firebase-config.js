import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  ApiKey: "AIzaSyAGVfIAcVsMh6YcXSqmu_PIkGgjCtwGNYc",
  authDomain: "ska-hosting-buddy-ai.firebaseapp.com",
  projectId: "ska-hosting-buddy-ai",
  storageBucket: "ska-hosting-buddy-ai.firebasestorage.app",
  messagingSenderId: "122658609461",
  appId: "1:122658609461:web:746da8ac58d37c12fed47c",
  measurementId: "G-DXPYQLX3KH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
