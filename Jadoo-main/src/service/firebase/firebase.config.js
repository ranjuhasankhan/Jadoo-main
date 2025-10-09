// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   measurementId: import.meta.env.VITE_measurementId,
// };
const firebaseConfig = {
apiKey: "AIzaSyAuA9Uiyvi5_-DVnMsMlIhGGoIqMXcYIC4",
authDomain: "jadoo-f5286.firebaseapp.com",
projectId: "jadoo-f5286",
storageBucket: "jadoo-f5286.firebasestorage.app",
messagingSenderId: "680656110452",
appId: "1:680656110452:web:ba0c50ed5996be85c06221",
measurementId: "G-5SXTT4TXNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)