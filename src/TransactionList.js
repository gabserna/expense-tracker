//componente que renderizará lista de transacciones del usuario
import React, { useContext } from "react";   //hook: useContext
import { GlobalContext } from '../context/GlobalState';
import Transaction from "./Transaction";  //componente Transaction renderiza cada transaccion en la lista



const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
        <h3>Transaction history</h3>
        <ul className="list">
            {transactions.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
        </>
    );
};

export default TransactionList;