import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from 'react-bootstrap';

export const AddTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '' || amount.trim() === '') {
      alert('Please enter a description and amount.');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="What was it used for?" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Add "-" to expenses' />

        </div>
        <Button variant="primary" type="submit">Add transaction</Button>
      </form>
    </>
  );
};
