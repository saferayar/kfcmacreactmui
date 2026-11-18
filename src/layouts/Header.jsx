import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fastfood } from '@mui/icons-material';
import Button from '@mui/material/Button';

function Header({ title = 'KFCMac - Sistema de Pedidos' }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#b71c1c' }}>
        <Toolbar>
          <Fastfood sx={{ mr: 1.5, fontSize: 30 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Button color="inherit"  href='#' >Registrar</Button>
          <Button color="inherit" href='#ver'>Ver</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
