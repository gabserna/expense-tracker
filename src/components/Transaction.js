// componente que renderizará cada transacción que agregue el usuario
import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TransactionComponent = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Transaction</div>
            <button onClick={() => navigate('/Transactions', { replace: true })}>
                Go to page
            </button>
        </>
    );
};

// recibe una transacción como prop y renderiza la información de la transacción, incluyendo su nombre y cantidad
export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const amountClass = transaction.amount < 0 ? 'minus' : 'plus';
    return (
        // agrega una clase CSS dependiendo de si la transacción es positiva o negativa
        <li className={amountClass}>
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
        </li>
    );
};

export default Transaction;