import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount]= useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
      e.preventDefault();

      const newTransaction = {
        id: new Date().getTime(),
        text,
        amount: parseInt(amount)
      }

      addTransaction(newTransaction);
    }



    return (
        <>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
           placeholder="Enter transaction name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (Income(+ve), Expenses(-ve) )</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
           placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
