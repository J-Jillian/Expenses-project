import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
