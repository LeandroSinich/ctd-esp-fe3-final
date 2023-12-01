import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";
import docImg from "../images/doctor.jpg"
import { useGlobalStates } from "../Context/Context";
//import cardStyles from '../Styles/Card.module.css'



const Card = ({ dentista }) => {
  
  // const useGlobalStates = useContext(GlobalStates)
  const {dispatch} = useGlobalStates()

  const addFav = ()=>{
    dispatch({type: 'ADD_FAV', payload: dentista})
  
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={'/detail/'+ dentista.id}>
      <h3>{dentista.id} {dentista.name} {dentista.username}  </h3>
      <img className= 'doc'src={docImg} alt="doc" />
      </Link>
        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
