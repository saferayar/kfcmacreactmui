import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Carga() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress aria-label="Loading…" />
    </Box>
  )
}

export default Carga
