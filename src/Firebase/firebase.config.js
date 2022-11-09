// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC9-7Jy86_3OnP64MsJkHDciYaT9CvI-yA",
//   authDomain: "assignment-eleventh.firebaseapp.com",
//   projectId: "assignment-eleventh",
//   storageBucket: "assignment-eleventh.appspot.com",
//   messagingSenderId: "978527258475",
//   appId: "1:978527258475:web:020ab258d0dcaea235ee2e",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;