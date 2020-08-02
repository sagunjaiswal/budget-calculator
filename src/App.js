import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ContextProvider>
  );
}

export default App;
