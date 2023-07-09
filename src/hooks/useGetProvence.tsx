import React from 'react';
import { useQuery } from 'react-query';
import { getProvence } from '../api/services/getProvence';

function useGetProvence() {
  return useQuery('get-provence', getProvence);
}
export default useGetProvence;
