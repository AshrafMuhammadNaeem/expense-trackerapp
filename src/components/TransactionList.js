import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    return (
        <>
            <h3>Transaction History</h3>
      <ul className="list">
         
         <li className="minus">
             Cash <span>700$</span><button className="delete-btn">remove</button>
         </li>

      </ul>
            
        </>
    )
}
