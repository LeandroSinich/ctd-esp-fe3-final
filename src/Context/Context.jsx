import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../Reducers/reducer";


export const GlobalStates = createContext()

const initialState = {
     
    list: [],
    favs: [],
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

    return(
        <GlobalStates.Provider value={{state, dispatch}}>
            {children}
        </GlobalStates.Provider>
    )
}
export default Context

//export const useGlobalStates = useContext(GlobalStates)