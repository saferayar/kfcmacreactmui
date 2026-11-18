import React, {useState} from 'react'
import PedidosContext from './context';
import { getPedidos, createPedido } from '../services/pedidos_services';

function PedidosProvider({children}) {
    const [pedidos, setPedidos] = useState([]);

    
    const crearPedidos = async (pedido)=>{
      await createPedido(pedido);
      setPedidos([...pedidos, pedido]);
    }

    const marcarHecho = (perdido)=>{
      //TODO: como llamo a la api
    }

    const obtenerPedidos = async ()=>{
     
      const pedidos =  await getPedidos();
      setPedidos(pedidos);
      return pedidos;
    }

    //En esta variable yo voy a definir todo lo que quiero que los otros
    // componentes conozcan
    //TODO: Cual es la diferencia entre los pedidos y el obtenerPedidos?
    const globalState = {pedidos, crearPedidos, obtenerPedidos, marcarHecho};

  return (
    <PedidosContext.Provider value={globalState} >{children}</PedidosContext.Provider>
  )
}

export default PedidosProvider
