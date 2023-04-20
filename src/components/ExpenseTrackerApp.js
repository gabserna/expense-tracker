import "../Style.css";
import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import Balance from "./Balance";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "../context/GlobalState";

export const ExpenseTrackerApp = () => {
  //state for transactions
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    try {
      const savedTransactions =
        //getting transactions from json
        JSON.parse(localStorage.getItem("transactions")) ?? [];
      //setting saved transactions to the state
      setTransactions(savedTransactions);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    //saving transactions to local storage
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    if (!newTransaction.description || !newTransaction.amount) {
      return;
    }
    //this adds a unique ID to every new transaction
    const transactionWithId = { ...newTransaction, id: Date.now() };
    //this adds new transaction to the state
    setTransactions([...transactions, transactionWithId]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      //this removes a transaction by id from state
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const { income, expense } =
    transactions.length > 0
      ? transactions.reduce(
          (acc, transaction) => {
            if (transaction.amount > 0) {
              //calcula el total de income
              acc.income += transaction.amount;
            } else {
              //calcula el total de expenses
              acc.expense += transaction.amount;
            }
            return acc;
          },
          { income: 0, expense: 0 }
        )
      : { income: 0, expense: 0 };

  return (
    <GlobalProvider>
      <div className="expense-tracker">
        <h3>Expense Tracker App</h3>
        <Balance income={income} expense={expense} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </GlobalProvider>
  );
};
export default ExpenseTrackerApp;
