import React from 'react';
import { useNavigate } from 'react-router-dom';

/* export const BalancePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Balance</div>
      <button onClick={() => navigate('/Balance', { replace: true })}>
        Ir a página de balance
      </button>
    </>
  );
}; */

const Balance = ({ income, expense }) => {
  const total = income - expense;

  return (
    <div className="balance">
      <h2>Remaining Balance</h2>
      <h3>${total.toFixed(2)}</h3>
      <div className="income-expense">
        <div className="incomes">
          <h4>Incomes</h4>
          <p className="money plus">${income.toFixed(2)}</p>
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;