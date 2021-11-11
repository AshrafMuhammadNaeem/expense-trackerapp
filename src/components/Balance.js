import React, { useContext } from 'react'   // import useContext

// import the GlobalContext
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <>
            <h4>Total Balance</h4>
            <h1>$2000.00</h1>
        </>
    )
}
