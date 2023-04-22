// this reducer function manages GlobalState app
const AppReducer = (state, action) => {
  switch (action.type) {
    // case for deleting a transaction
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    // case for adding a new transaction
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
export default AppReducer;
