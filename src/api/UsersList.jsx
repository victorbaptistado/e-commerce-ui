import { API_BASE_URL } from ".";

const users_URL = `${API_BASE_URL}/users`;

export const getUsers = async () => {
  return fetch(users_URL)
  .then(response => response.json()); 
};

export const getUser = async (id) => {
  return fetch(`${users_URL}/${id}`)
  .then(response => response.json()); 
};

export const updateUser = (id) => {
  
};

export const createUser = () => {
  
};

export const deleteUser = (id) => {

}