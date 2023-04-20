import React from "react";

//component receiving a transaction as a prop and renders it
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const amountClass = transaction.amount < 0 ? "minus" : "plus";
  return (
    //this adds a class depending if is + or -
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  );
};
export default Transaction;