import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './layouts/Header';
import ItemsContainer from './containers/ItemsContainer';
import PedidosProvider from './providers/PedidosProvider';

function App() {
  return (
    <PedidosProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header title="Gestor de Elementos" />
        {/* TODO: Agregar PedidosContainer y construir PedidosForm y PedidosView */}
      </LocalizationProvider>
    </PedidosProvider>
  );
}

export default App;
