import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8Ukm2yEWpCYN-w-GqKI7uUSPN0UMsNBc",
    authDomain: "my-firebase-project-de1f3.firebaseapp.com",
    projectId: "my-firebase-project-de1f3",
    storageBucket: "my-firebase-project-de1f3.firebasestorage.app",
    messagingSenderId: "45594695056",
    appId: "1:45594695056:web:29c415055ae8e4ade7cf15"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);