import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ModalError({handleClose, texto}) {
  return (
   <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
         Ha ocurrido un error en nuestro servicio
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Por favor intente más tarde
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{texto}</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ModalError
