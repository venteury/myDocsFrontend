import axios from "axios";

const createDocument = (data) => {
  return axios.post("/api/documents", data);
};

const getDocumentById = (id) => {
  return axios.get(`/api/documents${id}`);
};

const updateDocumentById = (id, data) => {
  return axios.put(`/api/documents${id}`, data);
};

const deleteDocumentByID = (e) => {
  return axios.delete(`/api/documents${id}`);
};

const getAllDocuments = () => {
  return axios.get("/api/documents");
};

const documentServices = {
  createDocument,
  getDocumentById,
  updateDocumentById,
  deleteDocumentByID,
  getAllDocuments,
};

export default documentServices;
