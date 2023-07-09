/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import useGetProvence from '../hooks/useGetProvence';
import useGetCity from '../hooks/useGetCity';
import { useNavigate } from 'react-router-dom';
import { ICity } from '../types';

function Provence() {
  const navigate = useNavigate();
  const [city, setCity] = useState<ICity['data'] | []>([]);
  const { data, isLoading } = useGetProvence();
  const { data: cityData, isLoading: cityLoading } = useGetCity();
  const handleCity = (id: number) => {
    const updatedCities = cityData?.data.data.filter((i) => {
      return i.provinceId === id;
    });
    setCity(updatedCities as ICity['data']);
  };

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) navigate('/');
  }, [navigate]);

  if (isLoading) return;
  if (cityLoading) return;

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          padding: 2,
          width: '40%',
          border: '1px solid gray',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
        component={'form'}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">استان</InputLabel>
          <Select
            label="استان"
            onChange={(e) => handleCity(e.target.value as number)}
          >
            {data?.data.data.map((provence) => {
              return <MenuItem value={provence.id}>{provence.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">شهرستان</InputLabel>
          <Select label="شهر">
            {city.length > 0 &&
              city.map((city) => {
                return <MenuItem value={city.id}>{city.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Provence;
