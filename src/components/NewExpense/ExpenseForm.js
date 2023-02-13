import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleEnter, setTitleEnter] = useState("");
  const [amountEnter, setaAmountEnter] = useState("");
  const [dateEnter, setDateEnter] = useState("");

  const titleChangeHandler = (e) => {
    setTitleEnter(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setaAmountEnter(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDateEnter(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: titleEnter,
      amount: amountEnter,
      dateEnter: new Date(dateEnter),
    };

    props.OnSaveExpenseData(expenseData);
    setTitleEnter("");
    setaAmountEnter("");
    setDateEnter("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEnter}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
