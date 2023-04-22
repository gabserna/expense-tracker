import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const AddTransaction = () => {
  //dispatch desde contexto
  const { dispatch } = useContext(GlobalContext);
  //define estados descripción y transacción, y estado del mensaje de error
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [showError, setShowError] = useState(false);
  const variant = "danger";

  //agregar nueva transacción al estado global (van en mayusculas)
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  //envío del formulario
  const handleSubmit = (x) => {
    x.preventDefault();

    //verificamos valores vacíos
    if (text.trim() === "" || amount.trim() === "") {
      setShowError(true);
      return;
    }

    //crea nueva transaccion y agrega al estado global, random id
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
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
            placeholder="And now what did you buy?"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </InputGroup.Text>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Add "-" for expenses'
          />
        </InputGroup>
        <div className="d-grid gap-2">
          <Button size="lg" variant="primary" type="submit">
            Add transaction
          </Button>
        </div>
      </Form>
      <div className="d-grid gap-2">
        <Toast
          show={showError}
          onClose={() => setShowError(false)}
          className={`error-toast bg-${variant}`}
        >
          <Toast.Header>
            <strong className="me-auto">Oh really? Dont try to cheat me</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            It cant be empty! so, don't be lazy and tell me what and how much
            you spent on.
          </Toast.Body>
        </Toast>
      </div>
    </>
  );
};
