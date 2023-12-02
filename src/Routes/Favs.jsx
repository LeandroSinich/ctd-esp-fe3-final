import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  
  const {state} = useGlobalStates()

  return (
    <div id={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        
        
        {state.favs.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)}
        
      
      </div>
    </div>
  );
};

export default Favs;
