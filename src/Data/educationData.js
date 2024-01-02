import getCollectionData from "./getCollection";

const importEducationData = () => {
  return getCollectionData("education")
    .then((data) => data.sort((a, b) => b.orderDate - a.orderDate))
    .catch((error) => console.log(error));
};

export default importEducationData;
