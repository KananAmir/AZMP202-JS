import BASE_URL, { endpoints } from "../contants.js";
//get all data
async function getAllData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// getAllData("products");
// getAllData(endpoints.products);

// get data by id
async function getDataById(endpoint, id) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
// delete data by id
async function deleteDataById(endpoint, id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
// add new data by id
async function addNewData(endpoint, payload) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
// edit data by id
async function editDataById(endpoint, id, payload) {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
async function editDataByIdWithSpecificFields(endpoint, id, payload) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${endpoint}/${id}`,
      payload
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getAllData,
  getDataById,
  deleteDataById,
  addNewData,
  editDataById,
  editDataByIdWithSpecificFields,
};
