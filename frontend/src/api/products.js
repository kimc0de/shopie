import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getAllProducts = async () => {
  return axios.get(`${baseUrl}/products`);
};

export const deleteProductById = async (id, token) => {
  return axios.delete(`${baseUrl}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
}

export const createProduct = async (product, token) => {
  return axios.post(`${baseUrl}/products`, product,{
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    }
  });
}

export const updateProduct = async (product, token, id) => {
  return axios.put(`${baseUrl}/products/${id}`, product, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    }
  });
}
