import React from 'react'

export const Transaction = ({transaction}) => {
    // created ternary operator to get sign for expense and Income
    const sign = transaction.amount < 0 ? '-' : '+'; 
    
    
    return (
        // class based on ternary operator to get transaction amount changed color to red or blue based on expense/income
        <li className={transaction.amount < 0 ? 'red' : 'blue'}>
           { transaction.text } <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">remove</button>
        </li>
    )
}
