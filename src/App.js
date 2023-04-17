import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import TransactionsPage from './pages/TransactionsPage';
import { Home } from './components/Home';
import { About } from './components/About';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { ExpenseTrackerApp } from './components/ExpenseTrackerApp';
import { Header } from './components/Header';
import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="About" element={ <About />} />
        <Route path="AddTransaction" element={ <AddTransaction />} />
        <Route path="Balance" element={ <Balance />} />
        <Route path="ExpenseTrackerApp" element={ <ExpenseTrackerApp />} />
        <Route path="Header" element={ <Header />} />
        <Route path="Transaction" element={ <Transaction />} />
        <Route path="TransactionList" element={ <TransactionList />} />
      </Routes>
    
  );
}

export default App;