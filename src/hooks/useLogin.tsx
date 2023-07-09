import { useMutation } from 'react-query';
import loginService from '../api/services/loginService';
import { IUserData } from '../types';

import { useNavigate } from 'react-router-dom';
export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (userData: IUserData['payload']) => loginService(userData),
    onSuccess: (data) => {
      data?.data.accessToken &&
        sessionStorage.setItem('accessToken', data?.data.accessToken);
      navigate('/provence');
    },
  });
};
