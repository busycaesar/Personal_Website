import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

const importProjectData = () => {
  return new Promise((resolve, reject) => {
    try {
      onSnapshot(collection(db, "projects"), (spanshot) => {
        let projectList = spanshot.docs.map((document) => document.data());
        resolve(projectList.sort((a, b) => a.priority - b.priority));
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default importProjectData;
