import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyD7XWaT4oSYW7Pqr6H4uzVIGIRHCyEr-dg",
  authDomain: "expense-tracker-4a3f9.firebaseapp.com",
  projectId: "expense-tracker-4a3f9",
  storageBucket: "expense-tracker-4a3f9.appspot.com",  
  messagingSenderId: "1003537398523",
  appId: "1:1003537398523:web:7fc53bf92088a3c64d0e5e",
  measurementId: "G-BGY6NJXJV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { app, auth, analytics };  