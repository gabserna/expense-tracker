import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

// component to show a list of transactions (history)
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h4>History</h4>
      <ListGroup>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </>
  );
};
export default TransactionList;
