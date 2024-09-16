import axios from 'axios';

import {baseUrl} from '../../assets/common/baseUrl';

export const createOrder = async (order) => {
  return axios.post(`${baseUrl}/orders`, order);
}
