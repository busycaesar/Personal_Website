import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu9jqZTVxTSPSbQtvm4caZpKlez0tZKu4",
  authDomain: "busycaesar-website.firebaseapp.com",
  projectId: "busycaesar-website",
  storageBucket: "busycaesar-website.appspot.com",
  messagingSenderId: "415789509081",
  appId: "1:415789509081:web:760015940445ea62cb11c8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();
