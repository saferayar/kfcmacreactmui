import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { AddCircle } from '@mui/icons-material';
import PedidosContext from '../providers/context';

function PedidosForm() {

  const {crearPedidos} = useContext(PedidosContext);


  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [total, setTotal] = useState('');
  const [medioPago, setMedioPago] = useState('Efectivo');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {

    const pedido = {nombre,tipo,total,medioPago};
    crearPedidos(pedido);

    // Resetear formulario
    setNombre('');
    setTipo('');
    setTotal('');
    setMedioPago('Efectivo');
    setErrors({});
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary">
          Ingresar Pedido
        </Typography>
        <div>
          {/* 1. Nombre del Cliente */}
          <TextField
            fullWidth
            required
            id="nombre-cliente"
            label="Nombre del Cliente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            error={Boolean(errors.nombre)}
            helperText={errors.nombre}
            margin="normal"
            variant="outlined"
          />

          <FormControl fullWidth margin="normal" error={Boolean(errors.tipo)} required>
            <InputLabel id="tipo-pedido-label">Tipo de Pedido</InputLabel>
            <Select
              labelId="tipo-pedido-label"
              id="tipo-pedido"
              value={tipo}
              label="Tipo de Pedido"
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value="Combo">Combo</MenuItem>
              <MenuItem value="Solo Hamburguesa">Solo Hamburguesa</MenuItem>
            </Select>
            {errors.tipo && <FormHelperText>{errors.tipo}</FormHelperText>}
          </FormControl>
          <TextField
            fullWidth
            required
            id="total"
            label="Total"
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            error={Boolean(errors.total)}
            helperText={errors.total}
            margin="normal"
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                inputProps: { min: 1, step: 'any' }
              }
            }}
          />

          <FormControl component="fieldset" margin="normal" sx={{ display: 'block' }}>
            <FormLabel component="legend" sx={{ fontWeight: 'medium', mb: 1 }}>
              Medio de Pago
            </FormLabel>
            <RadioGroup
              row
              name="medioPago"
              value={medioPago}
              onChange={(e) => setMedioPago(e.target.value)}
            >
              <FormControlLabel value="Efectivo" control={<Radio color="primary" />} label="Efectivo" />
              <FormControlLabel value="Tarjeta" control={<Radio color="primary" />} label="Tarjeta" />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            startIcon={<AddCircle />}
            sx={{ mt: 3, py: 1.2, fontWeight: 'bold' }}
          >
            Agregar Pedido
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PedidosForm;
