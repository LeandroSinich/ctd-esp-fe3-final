import React from "react";
import { useGlobalStates } from "../Context/Context";
import { useState } from "react";


const Form = () => {
  
  const [contacto, setContacto] = useState({nombre:'', email:''})
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;//no me salio el regex :(, no pude hacer funcionar el .test
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(contacto.nombre.length >= 5 && contacto.email.includes('@')){
      setShow(true)
      setError(false)
    }else{
      setShow(false)
      setError(true)
    }

  }
  const handleNombre = (e)=>{
    setContacto({...contacto, nombre: e.target.value.trim().toUpperCase()})
    setShow(false)
  }
  const handleEmail = (e)=>{
    setContacto({...contacto, email: e.target.value.trim().toUpperCase()})
    setShow(false)
  }

  return (
    <div className="formulario">
      
        {show ? 
        <h3 style={{color: 'darkgreen', fontWeight:'bold'}}>**Gracias {contacto.nombre}, te contactaremos cuando antes vía mail** </h3>
        :
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input type='text' placeholder='Ej: nombre apellido' style={{margin: 10}}  onChange={handleNombre}></input>
          <br/>
          <label>Email</label>
          <input type='text' placeholder='nombreapelliso@mail.com' style={{margin: 10}} onChange={handleEmail}></input>
          <br/>
          <button>Enviar</button>
        </form>}
        {error && <h3 style={{color:'darkred', fontWeight:'bold'}}>**Por favor verifique su información nuevamente**</h3>}
    </div>
  );
};

export default Form;
