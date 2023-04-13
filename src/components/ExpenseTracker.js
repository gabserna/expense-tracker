import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Balance from './Balance';

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);

  // Calcula los ingresos y los gastos totales
  const calculateTotal = (transactions) => {
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });

    return { income, expense };
  };

  const { income, expense } = calculateTotal(transactions);

  // Almacena las transacciones en el localStorage del usuario
  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem('transactions') || '[]'
    );
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Agrega una nueva transacción
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Elimina una transacción existente
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <Balance income={income} expense={expense} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
};

export default ExpenseTracker;