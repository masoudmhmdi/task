import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { RTL } from './theme/RTL';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Provence from './Pages/Provence';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/provence',
    element: <Provence />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RTL>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </RTL>
    </QueryClientProvider>
  </React.StrictMode>
);
