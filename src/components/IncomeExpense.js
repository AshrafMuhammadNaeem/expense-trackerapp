import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

  
    const income = amounts
      .filter(item => item > 0)
      .reduce((sum, item) => (sum += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((sum, item) => (sum += item), 0) *
      -1
    ).toFixed(2);

    return (
        <div className="incExp-container">
            <div>
            <h4>Income </h4>
            <p  className = "green"> {income}$ </p>

            </div>
            
            <div>
                <h4> Expenses </h4>
                <p  className="red">{expense}$ </p>
            </div>
        </div>
    )
}
