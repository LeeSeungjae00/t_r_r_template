import { EX } from './../interfaces/EX';
import axios from 'axios';

export const exGet = () => () => axios.get(`...`);
export const exPost = async (ex: EX): Promise<EX> => {
  const { data } = await axios.post<EX>(`/todos`, ex);
  return data;
};

export const getMock = () => () => axios.get('/mock');
