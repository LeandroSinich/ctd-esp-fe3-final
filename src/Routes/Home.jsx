import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { GlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = `https://jsonplaceholder.typicode.com/users`
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((lista) => setList(lista))
    
  },[])

  const useGlobalStates = useContext(GlobalStates)
  const Contexto = useGlobalStates
  console.log(Contexto)
  return (
    <main className="" >
      <h1>Home</h1>
      
      <div className='card-grid'>
        {list.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)}
      </div>
    </main>
  )
}

export default Home