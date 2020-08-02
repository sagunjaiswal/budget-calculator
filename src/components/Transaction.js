import React, { useContext } from "react";
import { Context } from "./Context";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Context);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.description}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
