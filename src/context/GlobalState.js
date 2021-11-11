import React from "react"
import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

// Creating the Initial State
const initialState = {
    transactions: [
        {id:1, text:'Books', amount: -700},
        {id:2, text:'Salary', amount: 500000},
        {id:1, text:'Investments', amount: -200000},
        {id:1, text:'car', amount: -100000},
    ]
}
// Create Global Context using createContext
export const GlobalContext = createContext(initialState);

// Create the provider for accesing Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that make call to reducer to delete transactions

    function delTransaction(id) {
        dispatch({
            type: "del-Transaction",
            payload: id
        });
    }

    return (<GlobalContext.Provider value={
        {
        transactions: state.transactions

        }
    }>
        { children }
    </GlobalContext.Provider>);
}