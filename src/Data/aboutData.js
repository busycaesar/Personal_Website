import getCollectionData from "./getCollection";

const importAboutData = () => {
  return getCollectionData("about")
    .then((data) => data[0])
    .catch((error) => console.log(error));
};

export default importAboutData;
