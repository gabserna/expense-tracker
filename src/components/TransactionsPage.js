import React from 'react';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

export function Transactions() {
  return (
    <div>
      <h2>Transacciones</h2>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}