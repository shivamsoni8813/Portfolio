import { createContext, useReducer } from "react";

export const colorContext = createContext()

const init = {
    darkMode : "true"
}

const colorReducer = (state , action) =>{
    switch (action.type) {
        case 'toggle':
            return {darkMode: !state.darkMode}            
    
        default:
            return state
    }
}

export const ColorProvider = (props) =>{
    const [state, dispatch] = useReducer(colorReducer,init)
    return(
        <colorContext.Provider value ={{state, dispatch}}>
        {props.children}
        </colorContext.Provider>
    )
}