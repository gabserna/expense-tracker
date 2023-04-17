//componente que renderizará el formulario que permitirá al usuario agregar nuevas transacciones
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom'



export const AddTransaction = () => {

  const navigate = useNavigate()
    return (
        <>
        <div>Add Transaction</div>
        <button onClick={() => navigate('page-to-navigate', { replace: true })}>
            Add transaction
        </button>
        </>
    )

  // Obtener el estado y la función addTransaction del contexto global
  const { addTransaction } = useContext(GlobalContext);

  // Crear los estados locales para los campos de la transacción
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // Manejar la acción del submit del formulario
  const onSubmit = e => {
    e.preventDefault();

    // Crear una nueva transacción con los campos ingresados
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    // Añadir la nueva transacción al estado global
    addTransaction(newTransaction);

    // Reiniciar los estados locales de los campos del formulario
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
