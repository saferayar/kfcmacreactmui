import React from 'react'
import PedidosForm from '../components/PedidosForm'
import Header from '../layouts/Header'
function CrearPedidosContainer() {
  return (
    <>
         <Header title="KFCMac - Creacion de Órdenes" />
         <div className="mt-5">
            <PedidosForm></PedidosForm>
         </div>
    </>
  )
}

export default CrearPedidosContainer
