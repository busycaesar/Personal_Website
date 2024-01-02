import db from "../Data/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const importAboutData = () => {
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, "about"), (spanshot) => {
        resolve(spanshot.docs.map((document) => document.data())[0]);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default importAboutData;
