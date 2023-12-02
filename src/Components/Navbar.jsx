import React from 'react'

import { Link } from 'react-router-dom'
import { useGlobalStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch, state} = useGlobalStates()

  const handleTheme = ()=>{
    state.theme == 'light'?dispatch({type: 'CHANGE_THEME', payload:'dark'}):dispatch({type: 'CHANGE_THEME', payload:'light'})
  }

  return (
    <nav id={state.theme}>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={'/'}>
        <div className='divNav'>
          <h3>Home</h3>
        </div>
      </Link>
      <Link to={'/favs'}>
        <div className='divNav'>
          <h3>Favs</h3>
        </div>
      </Link>
      <Link to={'/contact'}>
        
        <div className='divNav'>
          <h3>Contact</h3>
        </div>
      </Link>
      
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar