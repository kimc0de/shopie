import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const login = async () => {
  return axios.get(`${baseUrl}/users/login`);
}

export const register = async (user) => {
  return axios.post(`${baseUrl}/users/register`, user);
}
