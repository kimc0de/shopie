import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getAllCategories = async () => {
  return axios.get(`${baseUrl}/categories`);
}
