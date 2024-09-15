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
