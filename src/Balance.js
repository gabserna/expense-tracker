import React from 'react';

const Balance = ({ income, expense }) => {
  const total = income - expense;

  return (
    <div className="balance">
      <h2>Tu saldo</h2>
      <h3>${total.toFixed(2)}</h3>
      <div className="income-expense">
        <div>
          <h4>Ingresos</h4>
          <p className="money plus">${income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Gastos</h4>
          <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;