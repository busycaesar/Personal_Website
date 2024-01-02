import getCollectionData from "./getCollection";

const importProjectData = () => {
  return getCollectionData("projects")
    .then((data) => data.sort((a, b) => a.priority - b.priority))
    .catch((error) => console.log(error));
};

export default importProjectData;
