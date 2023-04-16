import React from 'react';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

function TransactionsPage() {
    return (
      <div>
        <h2>Transacciones</h2>
        <TransactionList />
        <AddTransaction />
      </div>
    );
  }
  
  export default TransactionsPage;
  