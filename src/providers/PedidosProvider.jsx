import React from 'react'
import PedidosContext from './context';

function PedidosProvider({children}) {
    const [pedidos, setPedidos] = useState([]);

    //TODO: exponer el crud, crearPedidos,obtener...

    //En esta variable yo voy a definir todo lo que quiero que los otros
    // componentes conozcan
    const globalState = {pedidos, setPedidos};

  return (
    <PedidosContext.Provider value={globalState} >{children}</PedidosContext.Provider>
  )
}

export default PedidosProvider
