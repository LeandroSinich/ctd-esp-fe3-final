import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";



const Card = ({ dentista }) => {
  
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={'/detail/'+ dentista.id}>
      <h3>{dentista.name} {dentista.username} </h3>
      <img src="../../public/images/doctor.jpg" alt="doc" />
      </Link>
        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
