import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBlaMOy8VLG7Tei4KcrFl3ZRc64HFm18GA",
  authDomain: "voyageverse-c6ac2.firebaseapp.com",
  projectId: "voyageverse-c6ac2",
  storageBucket: "voyageverse-c6ac2.appspot.com", 
  messagingSenderId: "43676721405",
  appId: "1:43676721405:web:c96ae70250774194631e94",
  measurementId: "G-LKGV69RH78"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 


document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit-btn");
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Logged In!");
        window.location.href = "../index.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});