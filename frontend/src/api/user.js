import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getUserProfileById = async (id, token) => {
  return axios.get(`${baseUrl}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
