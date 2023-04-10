import axios from "axios";

const loadFeaturesJobData = async () => {
  const res = await axios.get("jobsFeaturesData.json");
  return res.data;
};


export { loadFeaturesJobData };
