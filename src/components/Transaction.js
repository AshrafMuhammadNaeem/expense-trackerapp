import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="minus">
           { transaction.text } <span>-$900</span><button className="delete-btn">remove</button>
        </li>
    )
}
