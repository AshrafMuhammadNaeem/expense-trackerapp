import React from 'react'

export const Transaction = ({transaction}) => {
    
    
    return (
        <li className={transaction.amount < 0 ? 'red' : 'blue'}>
           { transaction.text } <span>400${(transaction.amount)}</span><button className="delete-btn">remove</button>
        </li>
    )
}
