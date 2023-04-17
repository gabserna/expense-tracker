import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import Transaction from "./Transaction";
import { useNavigate } from 'react-router-dom';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const navigate = useNavigate();

    return (
        <>
            <h3>Transaction history</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
            <button onClick={() => navigate('page-to-navigate', { replace: true })}>
                Go to page to navigate
            </button>
        </>
    );
};

export default TransactionList;
