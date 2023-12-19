// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsrjGBZnNq07bHNtnmAgS9RqJ3R9GCB8M",
    authDomain: "auth-moha-milon-5536d.firebaseapp.com",
    projectId: "auth-moha-milon-5536d",
    storageBucket: "auth-moha-milon-5536d.appspot.com",
    messagingSenderId: "924642781256",
    appId: "1:924642781256:web:2ab496405a1ceee0e9907d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
