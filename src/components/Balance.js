import React, { useContext } from 'react'   // import useContext

// import the GlobalContext
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);


    // use reduce to get amount from array

  const balance = amounts.reduce((sum, item) => (sum += item), 0).toFixed(2);



    return (
        <>
            <h4>Total Balance</h4>
            <h1>${balance}</h1>
        </>
    )
}
