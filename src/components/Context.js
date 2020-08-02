import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function AppReducer(state, action) {
    switch (action.type) {
      case "DELETETRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
      case "ADDTRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions],
        };
      default:
        return state;
    }
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETETRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADDTRANSACTION",
      payload: transaction,
    });
  }

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
