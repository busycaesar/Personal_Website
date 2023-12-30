// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu9jqZTVxTSPSbQtvm4caZpKlez0tZKu4",
  authDomain: "busycaesar-website.firebaseapp.com",
  projectId: "busycaesar-website",
  storageBucket: "busycaesar-website.appspot.com",
  messagingSenderId: "415789509081",
  appId: "1:415789509081:web:760015940445ea62cb11c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
