import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./Firebase/firebase.js"; // Import the app from firebase.js if needed
const auth = getAuth(app);

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#f8f9fa";
  } else {
      navbar.style.backgroundColor = "transparent";
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in
    const userEmail = user.email;
  
    //Showing which user logged in: 

    const loginButton = document.querySelector(".l"); 
    if (loginButton) {
      loginButton.remove();
    }
    const signInButton = document.querySelector(".s"); 
    if (signInButton) {
      signInButton.remove();
    }
    const userbtn = document.querySelector(".u");
    userbtn.style.display="inline-block";
    userbtn.innerHTML=`User: ${userEmail}`;
    userbtn.addEventListener("click",()=>{
      window.location.href="./"
    })

    // signInButton.innerHTML = `User: ${userEmail}`;
  } else {
    // No user is logged in
    console.log("No user is logged in");
  }
});
