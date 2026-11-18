import React, { useContext, useEffect, useState } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import PedidosTable from '../components/PedidosTable';
import PedidosContext from '../providers/context';
import PedidosEnCurso from '../components/PedidosEnCurso';
import Carga from '../layouts/Carga';
import IconButton from '@mui/material/IconButton';
import ModalError from '../layouts/ModalError';
function VerPedidosContainer() {
    const {pedidos, obtenerPedidos} = useContext(PedidosContext);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const reload = ()=>{
      setErrorMessage(null);
      setLoading(true);
      obtenerPedidos().then(()=>{
          setLoading(false);
      }).catch(e=>{
         setLoading(false);
         setErrorMessage("Ha ocurrido un error");
      });
    }
    //window.onload
    useEffect(()=>{
        //todo lo que esta aca adentro se ejecuta cada vez que algun elemento del arreglo cambie
        reload();
    }, []);
  
  if (loading){
    return <Carga></Carga>
  }

  if(errorMessage){

    return <ModalError texto={"Recargar"} handleClose={reload} ></ModalError>
  }

  return (
    <div className='mt-5'>
        <div className="text-end">
          <IconButton onClick={reload}>
            <RefreshIcon></RefreshIcon>
          </IconButton>
        </div>
       <PedidosEnCurso></PedidosEnCurso>
      <PedidosTable pedidos={pedidos}></PedidosTable>
    </div>
  )
}

export default VerPedidosContainer
