const API_BASE_URL = "http://localhost:3000";

export const getItems = async () => {
  return fetch(`${API_BASE_URL}/items`)
  .then(response => response.json()); 
};

export const getItem = async (id) => {
  return fetch(`${API_BASE_URL}/items/${id}`)
  .then(response => response.json()); 
};

export const updateItem = (id) => {
  
};

export const createItem = () => {
  
};

export const deleteItem = (id) => {
  
}