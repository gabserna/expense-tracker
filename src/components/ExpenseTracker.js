import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import { useNavigate } from 'react-router-dom'

export const ExpenseTrackerApp = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem('transactions') || '[]'
    );
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    if (!newTransaction.description || !newTransaction.amount) {
      return;
    }
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const { income, expense } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.amount > 0) {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <Balance income={income} expense={expense} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransaction addTransaction={addTransaction} />
      <button onClick={() => navigate('page-to-navigate', { replace: true })}>
        Navigate
      </button>
    </div>
  );
};

export default ExpenseTrackerApp;