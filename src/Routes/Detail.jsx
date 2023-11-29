import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentista, setDentista] = useState({})
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/` + id
  
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(res => setDentista(res))
  },[])

  console.log(dentista)
  return (
    <div className='detail'>
      <h1>{dentista.name} {dentista.username}</h1>
      <img src="../../public/images/doctor.jpg" alt="doc" />
      <h3>📧{dentista.email}</h3>
      <h3>📱{dentista.phone}</h3>
      <h3>🌎{dentista.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
    </div>
  )
}

export default Detail