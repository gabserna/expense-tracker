import '../App.css';
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import { AddTransaction } from './AddTransaction';
import Balance from './Balance';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from '../context/GlobalState';

export const ExpenseTrackerApp = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    try {
      const savedTransactions = JSON.parse(localStorage.getItem('transactions')) ?? [];
      setTransactions(savedTransactions);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    if (!newTransaction.description || !newTransaction.amount) {
      return;
    }
    const transactionWithId = { ...newTransaction, id: Date.now() };
    setTransactions([...transactions, transactionWithId]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const { income, expense } = transactions.length > 0 ? transactions.reduce(
        (acc, transaction) => {
          if (transaction.amount > 0) {
            acc.income += transaction.amount;
          } else {
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
        <h1>Expense Tracker</h1>
        <Balance income={income} expense={expense} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </GlobalProvider>
  );
};
export default ExpenseTrackerApp;