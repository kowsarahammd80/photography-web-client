// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI8YRcxjXZjZN0Tb7xmGCzAtyH5eySNw8",
  authDomain: "photography-web-client.firebaseapp.com",
  projectId: "photography-web-client",
  storageBucket: "photography-web-client.appspot.com",
  messagingSenderId: "492868099471",
  appId: "1:492868099471:web:b5b82d98b8ea2be9377ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;