import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Fastfood, LunchDining, MonetizationOnOutlined } from '@mui/icons-material';

function PedidosTable({ pedidos = [] }) {
  const renderTipoBadge = (tipo) => {
    if (tipo === 'Combo') {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Fastfood sx={{ color: '#d32f2f', fontSize: 26 }} titleAccess="Combo" />
          <Typography variant="body2" fontWeight="medium">
            Combo
          </Typography>
        </Box>
      );
    }

    if (tipo === 'Solo Hamburguesa') {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LunchDining sx={{ color: '#ed6c02', fontSize: 26 }} titleAccess="Solo Hamburguesa" />
          <Typography variant="body2" fontWeight="medium">
            Solo Hamburguesa
          </Typography>
        </Box>
      );
    }

    return tipo;
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h2" fontWeight="bold" color="primary">
            Mostrar Pedidos
          </Typography>
          <Chip
            label={`${pedidos.length} pedido${pedidos.length === 1 ? '' : 's'}`}
            color="primary"
            variant="outlined"
            size="small"
          />
        </Box>

        <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="tabla de pedidos">
            <TableHead>
              <TableRow sx={{ '& th': { backgroundColor: '#f5f5f5', fontWeight: 'bold' } }}>
                <TableCell>Nombre del Cliente</TableCell>
                <TableCell align="right">Total de Compra</TableCell>
                <TableCell align="center">Tipo</TableCell>
                <TableCell align="center">Medio de Pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                    <MonetizationOnOutlined sx={{ fontSize: 40, mb: 1, opacity: 0.4 }} />
                    <Typography variant="body1">No hay pedidos registrados aún.</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                pedidos.map((pedido) => (
                  <TableRow key={pedido.id} hover>
                    <TableCell sx={{ fontWeight: 'medium' }}>
                      {pedido.nombre}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                      ${pedido.total?.toLocaleString('es-CL')}
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'inline-flex', justifyContent: 'center' }}>
                        {renderTipoBadge(pedido.tipo)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={pedido.medioPago || 'Efectivo'}
                        size="small"
                        color={pedido.medioPago === 'Tarjeta' ? 'info' : 'default'}
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default PedidosTable;
