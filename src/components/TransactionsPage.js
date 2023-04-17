import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

export function TransactionsPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>Transactions</div>
      <button onClick={() => navigate('/TransactionsPage', { replace: true })}>
        Go to Transactions
      </button>
    </>
  );
}

export function Transactions() {
  return (
    <div>
      <h2>Transacciones</h2>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}