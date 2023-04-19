import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import "bootstrap/dist/css/bootstrap.min.css";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>Transaction history</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
