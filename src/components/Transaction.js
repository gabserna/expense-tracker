import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//component receiving a transaction as a prop and renders it
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  /* const deleteTransaction = (transactionId) => {
    console.log(transactionId)
  } */

  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount);
// const amount = transaction.amount < 0 ? "minus" : "plus";

  return (
    //this adds a class depending if is + or -
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
	      {/* {sign}${Math.abs(transaction.amount)} */}
        {sign}${amount}
        </span>
      <button className="delete" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};