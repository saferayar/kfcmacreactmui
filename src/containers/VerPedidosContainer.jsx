import React, { useContext } from 'react'
import PedidosTable from '../components/PedidosTable';
import PedidosContext from '../providers/context';
import PedidosEnCurso from '../components/PedidosEnCurso';
function VerPedidosContainer() {
    const {pedidos} = useContext(PedidosContext);

  return (
    <div>
       <PedidosEnCurso></PedidosEnCurso>
      <PedidosTable pedidos={pedidos}></PedidosTable>
    </div>
  )
}

export default VerPedidosContainer
