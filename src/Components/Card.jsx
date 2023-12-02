import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";
import docImg from "../images/doctor.jpg"
import { useGlobalStates } from "../Context/Context";




const Card = ({ dentista }) => {
  
  
  const {dispatch,state} = useGlobalStates()
  const [colorFav, setColorFav] = useState('notFav')
  const findFav = state.favs.find((fav)=> fav.id == dentista.id)
  
  const addFav = ()=>{
    if(findFav){
      dispatch({type: 'RMV_FAV', payload: dentista.id})
      
    }else{
      dispatch({type: 'ADD_FAV', payload: dentista})
      
    } 
     
  }
  useEffect(()=>{
    if(findFav){
      setColorFav('fav')
    }else{
      setColorFav('notFav')
    }
  },[state.favs])
  

  return (
    <div className="card" >
        
      <Link to={'/detail/'+ dentista.id}>
      <h3>{dentista.id} {dentista.name} {dentista.username}  </h3>
      <img className= 'doc'src={docImg} alt="doc" />
      </Link>
        
      <button onClick={addFav} className="favButton" id={colorFav}>Add fav ⭐</button>
    </div>
  );
};

export default Card;
