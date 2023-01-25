import axios from "axios";

const baseURL = "/api/books/";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (newBook) => {
  const request = axios.post(baseURL, newBook);
  return request.then((response) => response.data);
};

const update = (id, updatedBook) => {
  const request = axios.put(`${baseURL}${id}`, updatedBook);
  return request.then((response) => response.data);
};

const deleteBook = (id) => {
  const request = axios.delete(`${baseURL}${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, deleteBook };
