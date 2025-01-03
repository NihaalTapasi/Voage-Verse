import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "../Firebase/firebase.js";
const auth = getAuth(app);


onAuthStateChanged(auth, (user)=>{
    let show = document.querySelector(".show");
    const logout=document.querySelector(".btn");
    if(user){
        const userEmail=user.email;
        show.innerHTML=`User: ${userEmail}`;
        logout.addEventListener("click",(e)=>{
            signOut(auth)
            .then(()=>{
                logout.remove();
                alert("User Logged Out");
                show.innerHTML=`User: No user Logged In`;
            })
        })
    }else{
        show.innerHTML=`User: No user Logged In`;
        logout.remove()
    }
})