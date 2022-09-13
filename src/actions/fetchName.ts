import axios, { AxiosPromise } from 'axios';
import { url } from '../configs/apiEndPoint';

export const fetchName = (): AxiosPromise => axios.post(`${url.baseUrl}/fetchname`);
