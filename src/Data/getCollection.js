import db from "../Data/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const getCollectionData = (collectionName) => {
  if (!collectionName) return;
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, collectionName), (spanshot) => {
        resolve(spanshot.docs.map((document) => document.data()));
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default getCollectionData;
