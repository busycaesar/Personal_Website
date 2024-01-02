import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const importInterestData = () => {
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, "interests"), (spanshot) => {
        let interestList = spanshot.docs.map((document) => document.data());
        resolve(interestList[0].interest);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default importInterestData;
