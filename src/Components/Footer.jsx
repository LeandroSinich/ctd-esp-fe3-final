import React from 'react'
import dhLogo from "../images/DH.png"
import { useGlobalStates } from '../Context/Context'
const Footer = () => {

  const {state} = useGlobalStates()
  return (
    <footer id={state.theme}>
        <p>Powered by</p>
        <img src={dhLogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
