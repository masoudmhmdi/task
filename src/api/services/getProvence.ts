import { AxiosResponse } from 'axios';
import { serverReq } from '../constance';
import { IProvence } from '../../types';

export const getProvence = async () => {
  const res: AxiosResponse<IProvence> = await serverReq('/agency/getProvince');
  return res;
};
