import React, {useState} from 'react'
import PedidosContext from './context';

function PedidosProvider({children}) {
    const [pedidos, setPedidos] = useState([]);

    
    const crearPedidos = (pedido)=>{
      //TODO: Como llamo a la api pa guardar esto?
      setPedidos([...pedidos, pedido]);
    }

    const marcarHecho = (perdido)=>{
      //TODO: como llamo a la api
    }

    const obtenerPedidos = ()=>{
      //TODO: devolver pedidos desde la api
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
