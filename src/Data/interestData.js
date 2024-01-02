import getCollectionData from "./getCollection";

const importInterestData = () => {
  return getCollectionData("interests")
    .then((data) => data[0].interest)
    .catch((error) => console.log(error));
};

export default importInterestData;
