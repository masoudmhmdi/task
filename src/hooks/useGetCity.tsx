import { useQuery } from 'react-query';
import { getCityService } from '../api/services/getCityService';

function useGetCity() {
  return useQuery(['getCity'], getCityService);
}

export default useGetCity;
