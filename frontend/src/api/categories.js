import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getAllCategories = async () => {
  return axios.get(`${baseUrl}/categories`);
}

export const addCategory = async (category, token) => {
  return axios.post(`${baseUrl}/categories`, category, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}

export const deleteCategory = async (id, token) => {
  return axios.delete(`${baseUrl}/categories/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}
