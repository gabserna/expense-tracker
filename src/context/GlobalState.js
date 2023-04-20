import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// define initial state for context
const initialState = {
  transactions: [],
};

// create a new context object with the initial state
export const GlobalContext = createContext(initialState);

// define a provider component that wraps the app
export const GlobalProvider = ({ children }) => {

  // use a reducer to manage state updates
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // define functions to modify state
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // provide the state and functions to child components
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};