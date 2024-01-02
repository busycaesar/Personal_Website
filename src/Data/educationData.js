import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const importEducationData = () => {
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, "education"), (spanshot) => {
        let educationList = spanshot.docs.map((document) => document.data());
        resolve(educationList.sort((a, b) => b.orderDate - a.orderDate));
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default importEducationData;
