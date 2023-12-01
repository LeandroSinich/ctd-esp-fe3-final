import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  
  const {state} = useGlobalStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)}
        {/* {state.Favs.map((dentista)=><Card dentista={dentista} key={dentista.id}/>)} */}
      
      </div>
    </>
  );
};

export default Favs;
