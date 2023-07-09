/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';

import { useLogin } from '../hooks/useLogin';
import useLoginFromValidation from '../hooks/useLoginFormValidation';
import { IUserData } from '../types';

function Login() {
  const { mutate, isLoading } = useLogin();
  const { errors, handleSubmit, register } = useLoginFromValidation();
  const onSubmit = (data: IUserData['payload']) => mutate(data);

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
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography sx={{ marginBottom: '24px' }} align="center" variant="h4">
          صفحه ورود
        </Typography>
        <TextField
          label={'نام کاربری'}
          inputProps={{ ...register('username') }}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label={'رمز ورود'}
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          size="medium"
          sx={{ marginTop: '24px' }}
          variant="contained"
        >
          ورود
        </Button>
        {isLoading && <CircularProgress sx={{ margin: '0 auto' }} />}
      </Box>
    </Box>
  );
}

export default Login;
