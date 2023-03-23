import { API_BASE_URL } from ".";

const items_URL = `${API_BASE_URL}/items`;

export const getItems = async () => {
  return fetch(items_URL)
  .then(response => response.json()); 
};

export const getItem = async (id) => {
  return fetch(`${items_URL}/${id}`)
  .then(response => response.json()); 
};

export const updateItem = (id) => {
  
};

export const createItem = () => {
  
};

export const deleteItem = (id) => {
  
}