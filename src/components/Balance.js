import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => acc + amount, 0);
  const expense = Math.abs(
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => acc + amount, 0)
  );
  const total = income - expense;

  return (
    <div className="balance">
      <div className="remaining">
        <h3>Your Balance: ${total.toFixed(2)}</h3>
      </div>

      <div className="income-expense">
        <div className="incomes">
          <h4>Incomes</h4>
          <p className="money plus">${income.toFixed(2)}</p>
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <p className="money minus">${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
export default Balance;