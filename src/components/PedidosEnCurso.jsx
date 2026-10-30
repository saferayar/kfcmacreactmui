import React, { useContext } from 'react'
import PedidosContext from '../providers/context'

function PedidosEnCurso() {
    const {pedidos} = useContext(PedidosContext);
  return (
    <div>
      Cantidad de Pedidos en curso: {pedidos?.length}
    </div>
  )
}

export default PedidosEnCurso
