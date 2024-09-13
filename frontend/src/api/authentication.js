import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getUserById = async (id) => {
  return axios.get(`${baseUrl}/users/${id}`);
}

export const register = async (user) => {
  return axios.post(`${baseUrl}/users/register`, user);
}
