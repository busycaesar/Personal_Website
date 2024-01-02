import getCollectionData from "./getCollection";

const importWorkExperienceData = () => {
  return getCollectionData("workExperience")
    .then((data) => data.sort((a, b) => b.orderDate - a.orderDate))
    .catch((error) => console.log(error));
};

export default importWorkExperienceData;
