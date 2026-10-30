import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './layouts/Header';
import PedidosProvider from './providers/PedidosProvider';

function App() {
  return (
    <PedidosProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header title="KFCMac - Registro de Órdenes" />
      </LocalizationProvider>
    </PedidosProvider>
  );
}

export default App;
