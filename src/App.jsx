import React from 'react';
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './layouts/Header';
import PedidosProvider from './providers/PedidosProvider';
import CrearPedidosContainer from './containers/CrearPedidosContainer';
import VerPedidosContainer from './containers/VerPedidosContainer';

function App() {
  return (
    <PedidosProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<CrearPedidosContainer />}  ></Route> 
            <Route path='/ver' element={<VerPedidosContainer />}></Route>
          </Routes>
        </HashRouter>
      </LocalizationProvider>
    </PedidosProvider>
  );
}

export default App;
