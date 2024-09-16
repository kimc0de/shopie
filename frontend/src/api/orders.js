import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const createOrder = async (order) => {
  return axios.post(`${baseUrl}/orders`, order);
}

export const getAllOrders = async () => {
  return axios.get(`${baseUrl}/orders`);
}

export const updateOrder = async (order, id, token) => {
  return axios.put(`${baseUrl}/orders/${id}`, order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const getOrderByUser = async (userId, token) => {
  return axios.get(`${baseUrl}/orders/get/userorders/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
