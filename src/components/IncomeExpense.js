import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className="incExp-container">
            <div>
            <h4>Income </h4>
            <p  className = "green"> +0.00$ </p>

            </div>
            
            <div>
                <h4> Expenses </h4>
                <p  className="red">-0.00$ </p>
            </div>
        </div>
    )
}
