import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const AddTransaction = () => {
  const { dispatch } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "") {
      alert("Please enter a description and amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
  <h4>Add new transaction</h4>
  <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-1">
      <InputGroup.Text>Description:</InputGroup.Text>
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What was it used for?"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text>Amount:</InputGroup.Text>
      <Form.Control
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Add "-" to expenses'
      />
    </InputGroup>
    <Button className="mt-3" size="sm" variant="primary" type="submit">
      Add transaction
    </Button>
  </Form>
</>

  );
};