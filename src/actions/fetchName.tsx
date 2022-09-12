import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { url } from '../configs/apiEndPoint';
import { FetchNameData } from '../types/fetchNameTypes';

export const fetchName = (): AxiosPromise<FetchNameData> => {
  return axios
    .post(`${url.baseUrl}/fetchname`)
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
