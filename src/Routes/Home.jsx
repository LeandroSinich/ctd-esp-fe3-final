import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { GlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const useGlobalStates = useContext(GlobalStates)
  const {state} = useGlobalStates
  //console.log(contexto)
  return (
    <main className="" >
      <h1>Home</h1>
      
      <div className='card-grid'>
        {state.list.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)}
      </div>
    </main>
  )
}

export default Home