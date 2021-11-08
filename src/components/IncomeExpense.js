import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className="incExp-container">
            <div>
            <h4>Income </h4>
            <p  className = "plus"> +0.00$ </p>

            </div>
            
            <div>
                <h4> Expenses </h4>
                <p  className="minus">-0.00$ </p>
            </div>
        </div>
    )
}
