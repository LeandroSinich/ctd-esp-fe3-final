import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import '../Styles/Detail.css'
import docImg from "../images/doctor.jpg"


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

  // const volver = () => {
  //   useLocation()
  // }

  console.log(dentista)
  return (
    <>
    <button className='detailButton' >Volver 🔙</button>
    <div className='detail'>
      
      <h1>{dentista.name} {dentista.username}</h1>
      <img src={docImg} alt="doc" />
      <h3>📧{dentista.email}</h3>
      <h3>📱{dentista.phone}</h3>
      <a>🌎{dentista.website}</a>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
    </div>
    </>
  )
}

export default Detail