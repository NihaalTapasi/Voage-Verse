import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "../Firebase/firebase.js"; // Import the app from firebase.js 


const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    const weather = document.querySelector(".weather");
    const currency = document.querySelector(".currency");
    weather.setAttribute("href", "./features/destination/weather.html");
    currency.setAttribute("href", "./features/destination/currency.html");

  } else {
    const box = document.querySelector(".box");
    //<li><a href="#">Login to use this feature</a></li>
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "./login/index.html");
    a.textContent = "LogIn to use this feature";
    li.appendChild(a);
    box.appendChild(li);
    const weather = document.querySelector(".weather");
    weather.setAttribute("href", "./features/slides/index.html");
    const currency = document.querySelector(".currency");
    currency.setAttribute("href", "./features/slides/index.html");

    

}
    console.log("No user is logged in To");
  }
);