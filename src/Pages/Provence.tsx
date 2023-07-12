/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import useGetProvence from '../hooks/useGetProvence';
import useGetCity from '../hooks/useGetCity';
import { useNavigate } from 'react-router-dom';
import { ICity } from '../types';

function Provence() {
  const navigate = useNavigate();
  const [city, setCity] = useState<ICity['data'] | []>([]);
  const [clearCity, triggerClearCity] = useState(0);
  const { data, isLoading } = useGetProvence();
  const { data: cityData, isLoading: cityLoading } = useGetCity();
  const handleCity = (id: number | undefined) => {
    const updatedCities = cityData?.data.data.filter((i) => {
      return i.provinceId === id;
    });
    triggerClearCity(Date.now());
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data!.data.data}
          getOptionLabel={(option) => option.name}
          onChange={(e, val) => handleCity(val?.id)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="استان" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={city}
          key={clearCity}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="شهر" />}
        />
      </Box>
    </Box>
  );
}

export default Provence;
