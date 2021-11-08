import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.ammount > 0 ? '+' : '-';
    
    
    return (
        <li className={transaction.amount < 0 ? 'red' : 'blue'}>
           { transaction.text } <span>{sign}${(transaction.amount)}</span><button className="delete-btn">remove</button>
        </li>
    )
}
