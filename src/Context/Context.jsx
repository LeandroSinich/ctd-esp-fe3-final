import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../Reducers/reducer";


 const GlobalStates = createContext()

const initialState = {
     
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: true

}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    const url = `https://jsonplaceholder.typicode.com/users`

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((dentistas) => dispatch({type: 'GET_DENTISTS', payload: dentistas}))
        
        
    },[])

    useEffect(()=>{
         localStorage.setItem('favs', JSON.stringify(state.favs))
     },[state.favs])


    return(
        <GlobalStates.Provider value={{state, dispatch}}>
            {children}
        </GlobalStates.Provider>
    )
}
export default Context

export const useGlobalStates = ()=> useContext(GlobalStates)