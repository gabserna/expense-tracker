import React from 'react';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

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
  