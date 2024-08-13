import axios from "axios";
import config from "./config";
let baseURL = "https://mydocsbackend-cnnn.onrender.com";
// let baseURL = "http://localhost:8000";

const createDocument = (data) => {
  console.log(data);
  return axios.post(baseURL + "/api/documents", data, config);
};

const getDocumentById = (id) => {
  return axios.get(baseURL + `/api/documents/${id}`, config);
};

const updateDocumentById = (id, data) => {
  return axios.put(baseURL + `/api/documents/${id}`, data, config);
};

const deleteDocumentByID = (id) => {
  return axios.delete(baseURL + `/api/documents/${id}`, config);
};

const getAllDocuments = () => {
  return axios.get(baseURL + "/api/documents", config);
};

const documentServices = {
  createDocument,
  getDocumentById,
  updateDocumentById,
  deleteDocumentByID,
  getAllDocuments,
};

export default documentServices;
