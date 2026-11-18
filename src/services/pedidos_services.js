import axios from 'axios';


//Centralizar aqui todas las operaciones que van hacia el bff de los pedidos
const bffUrl = "http://localhost:3000";
const getPedidos =  async ()=>{

    try{
        const res = await axios.get(`${bffUrl}/pedidos`);

        return res?.data;
    }catch(er){
        console.error(er);
        throw er;
    }
};

const createPedido = async(pedido)=>{
    try{
        const res = await axios.post(`${bffUrl}/pedidos`,pedido);

        return res?.data;
    }catch(er){
        console.error(er);
        return null;
    }

}

export  { getPedidos, createPedido };