import axios from 'axios';

const baseURL = 'https://rezayari.ir:8000/api';

export const serverReq = axios.create({
  baseURL,
});

serverReq.interceptors.request.use((req) => {
  const accToken = sessionStorage.getItem('accessToken') || '';
  console.log(accToken);
  req.headers.Authorization = `Bearer ${accToken}`;
  return req;
});
