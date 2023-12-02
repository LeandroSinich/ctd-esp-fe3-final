import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { useGlobalStates } from '../Context/Context'



const Home = () => {
  
  const {state} = useGlobalStates()

  return (
    <main id={state.theme}>
      <h1>Home</h1>
      
      <div className='card-grid' id={state.theme} >
        {state.list.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)}
      </div>
    </main>
  )
}

export default Home