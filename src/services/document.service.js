import axios from "axios";
let baseURL = "https://mydocsbackend-cnnn.onrender.com";

const createDocument = (data) => {
  console.log(data);
  return axios.post(baseURL + "/api/documents", data);
};

const getDocumentById = (id) => {
  return axios.get(baseURL + `/api/documents/${id}`);
};

const updateDocumentById = (id, data) => {
  return axios.put(baseURL + `/api/documents/${id}`, data);
};

const deleteDocumentByID = (id) => {
  return axios.delete(baseURL + `/api/documents/${id}`);
};

const getAllDocuments = () => {
  return axios.get(baseURL + "/api/documents");
};

const documentServices = {
  createDocument,
  getDocumentById,
  updateDocumentById,
  deleteDocumentByID,
  getAllDocuments,
};

export default documentServices;
