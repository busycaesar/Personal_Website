import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const importWorkExperienceData = () => {
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, "workExperience"), (spanshot) => {
        let workExperienceList = spanshot.docs.map((document) =>
          document.data()
        );
        resolve(workExperienceList.sort((a, b) => b.orderDate - a.orderDate));
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default importWorkExperienceData;
