import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { ExpenseTrackerApp } from './components/ExpenseTrackerApp';
import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';
import { TransactionsPage } from './components/TransactionsPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <ExpenseTrackerApp />} />
        <Route path="AddTransaction" element={ <AddTransaction />} />
        <Route path="Balance" element={ <Balance />} />
        <Route path="Transaction" element={ <Transaction />} />
        <Route path="TransactionList" element={ <TransactionList />} />
        <Route path="TransactionsPage" element={ <TransactionsPage />} />
      </Routes>
  );
}
export default App;