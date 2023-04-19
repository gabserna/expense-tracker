import React from "react";

//recibe una transacción como prop y renderiza la información de la transacción, incluyendo su nombre y cantidad
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const amountClass = transaction.amount < 0 ? "minus" : "plus";
  return (
    // agrega una clase dependiendo si la transacción es positiva o negativa
    <li className={amountClass}>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};
export default Transaction;