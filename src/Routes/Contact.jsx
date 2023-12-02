import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Context/Context'



const Contact = () => {
  const {state} = useGlobalStates()
  return (
    <div className='contact' id={state.theme}>
      <div className='centro'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact