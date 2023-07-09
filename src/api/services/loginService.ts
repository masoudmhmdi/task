import { serverReq } from '../constance';
import { IUserData } from '../../types';
import { AxiosResponse } from 'axios';
// import { toast } from 'react-hot-toast';
export async function loginService(userData: IUserData['payload']) {
  try {
    const res: AxiosResponse<IUserData['response']> = await serverReq.post(
      '/auth/login',
      userData
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default loginService;
