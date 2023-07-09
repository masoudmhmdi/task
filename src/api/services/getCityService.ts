import { AxiosResponse } from 'axios';
import { serverReq } from '../constance';
import { ICity } from '../../types';

export async function getCityService() {
  const res: AxiosResponse<ICity, ICity> = await serverReq('/agency/getCity');
  return res;
}
