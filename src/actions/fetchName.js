import axios from 'axios';
import { url } from '../configs/apiEndPoint';

export const fetchName = () => {
  return axios
    .post(`${url.baseUrl}/fetchname`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
