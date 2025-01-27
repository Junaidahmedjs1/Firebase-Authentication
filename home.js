import {onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      
      
    } else {
      window.location=`index.html`
    }
  });

  const logOut=document.querySelector(`#logout-btn`)
  logOut.addEventListener(`click` , ()=>{
    signOut(auth).then(() => {
        alert(`Logout Successfully`)
        window.location=`index.html`
      }).catch((error) => {
        console.log(error);
        
      });
  })