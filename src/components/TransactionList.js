import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>Transaction History</h3>
      <ul className="list">
         
         <li className="minus">
             Cash <span>700$</span><button className="delete-btn">remove</button>
         </li>

      </ul>
            
        </div>
    )
}
