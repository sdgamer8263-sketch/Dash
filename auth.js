import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, query, limit, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const regBtn = document.getElementById('regBtn');
const msg = document.getElementById('msg');

regBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // 1. Check korun Firestore-e age kono user ache kina
        const usersRef = collection(db, "users");
        const q = query(usersRef, limit(1));
        const querySnapshot = await getDocs(q);

        // 2. Firebase Auth diye user create korun
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 3. Logic: Jodi database empty thake (prothom user), role hobe 'admin'
        let userRole = "user"; 
        if (querySnapshot.empty) {
            userRole = "admin";
        }

        // 4. Firestore-e user data save korun
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            role: userRole,
            createdAt: new Date()
        });

        msg.innerText = `Success! You are registered as ${userRole}`;
        msg.style.color = "green";

    } catch (error) {
        msg.innerText = error.message;
        msg.style.color = "red";
    }
});
