import React, { useState, useRef } from "react";
import axios from "axios"
import { H1, Container, ContainerItens, Label, Input, Button, List} from "./style";
import home from "./assets/home.png"
import trash from "./assets/lixeira.svg"


const App = () => {

  const [order, setUsers] = useState([])
  const inputName = useRef()
  const inputPedidos = useRef()

 
 async function addNewUser() {

  const { data: newOrder } = await axios.post("http://localhost:3001/order", {
     clientName: inputName.current.value,
     pedidos: inputPedidos.current.value
   })

setUsers([...order, newOrder])
   
   
   
 }


  function deleteUser(orderId) {
    const newUsers = order.filter(order => order.id !== orderId)
    setUsers(newUsers)
}


 
  
  return (
    <Container> 
      <img src={home} alt="imagem-principal" />
      
      <H1>Faça seu pedido!</H1>

      <ContainerItens>
        <Label >Pedido</Label>
        <Input ref={inputPedidos} placeholder="x-salada, 1 coca" />

        <Label>Nome do Cliente</Label>
        <Input ref={inputName} placeholder="Steve Jobs" />
        
        <Button onClick={addNewUser}>Novo Pedido</Button>


        <ul>
          {order.map((order) => (
            <List key={order.id} >
        
              <p>{order.pedidos}</p> <br /> <p>{order.clientName} </p>
              <button onClick={()=> deleteUser(order.id)}> <img src={trash} alt="remover-itens" /></button>

            </List>

          ))}



</ul>



      </ContainerItens>

    </Container>

    

)


}


export default App