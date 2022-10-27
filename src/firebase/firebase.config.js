// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

  //   apiKey: "AIzaSyD7GOB5ORP0EAC-9YoP36Rb7MhzhOeKdVE",
  //   authDomain: "skill-nation-b6ffb.firebaseapp.com",
  //   projectId: "skill-nation-b6ffb",
  //   storageBucket: "skill-nation-b6ffb.appspot.com",
  //   messagingSenderId: "717496735255",
  //   appId: "1:717496735255:web:c212b2c611ea6707ca6e52",

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;