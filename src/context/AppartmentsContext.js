import { createContext } from "react";
import  appartments from "../data/logements.json";

// 1 - create the context
const AppartmentsContext = createContext({
    appartments: []
})

// 2 - create the context provider
const AppartmentsContextProvider =  props => {

    const getAppartmentById = id => {
        return appartments.filter(appartment => appartment.id === id)[0]
    }


    return (
        <AppartmentsContext.Provider value={{
            appartments,
            getAppartmentById
        }}>
            {props.children}
        </AppartmentsContext.Provider>
    )
}

export {AppartmentsContext, AppartmentsContextProvider}