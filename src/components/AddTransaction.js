import React from 'react'

export const AddTransaction = () => {
    return (
        <>
            <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter transaction name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (Income(+ve), Expenses(-ve) )</label
          >
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
