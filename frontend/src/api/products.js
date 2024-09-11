import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const getAllProducts = async () => {
  return axios.get(`${baseUrl}/products`);
}
