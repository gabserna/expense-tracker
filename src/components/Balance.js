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
  const balanceClass = total < 0 ? "#f21b3f" : "#00ff41";

  //render balance with income, expense and remaining balance
  return (
    <div className="balance">
      <div style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
        <h3>
          Current Balance:{" "}
          <span style={{ color: balanceClass, fontWeight: "bold" }}>
            {" "}
            ${total.toFixed(2)}
          </span>
        </h3>
      </div>
      <div className="income-expense">
        <div className="incomes">
          <h4>Incomes</h4>
          <p
            style={{
              color: "#00ff41",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ${income.toFixed(2)}
          </p>
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <p
            style={{
              color: "#f21b3f",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ${expense.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Balance;
