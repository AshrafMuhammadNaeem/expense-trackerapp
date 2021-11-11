import React from "react"
import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

// Creating the Initial State
const initialState = {
    transactions: [ ]
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

    function addTransaction(transaction) {
        dispatch({
            type: "add-Transaction",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={
        {
        transactions: state.transactions,
        delTransaction,
        addTransaction

        }
    }>
        { children }
    </GlobalContext.Provider>);
}