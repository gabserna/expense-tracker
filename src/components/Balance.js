import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

//this component shows the user's current balance
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  //array for transaction amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  //total income
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => acc + amount, 0);

  //total expense
  const expense = Math.abs(
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => acc + amount, 0)
  );

  //total balance
  const total = income - expense;

  //color class for balance depending if its negative or positive
  const balanceClass = total < 0 ? "text-danger" : "text-primary";

  //render balance with income, expense and remaining balance
  return (
    <div className="balance">
      <div className="remaining">
        <h3>
          Your Balance:{" "}
          <span className={balanceClass}> ${total.toFixed(2)}</span>
        </h3>
      </div>

      <div className="income-expense">
        <div className="incomes">
          <h4>Incomes</h4>
          <p className="text-primary">${income.toFixed(2)}</p>
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <p className="text-danger">${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
export default Balance;
