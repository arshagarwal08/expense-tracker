import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import { ExpenseService } from "./services/ExpenseService";

export default function App() {
  const [expenses, setExpenses] = useState(ExpenseService.getAll());

  const addExpense = (expense) => {
    const updated = [...expenses, expense];
    setExpenses(updated);
    ExpenseService.save(updated);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💰 Expense Tracker</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} />
        <ExpenseSummary expenses={expenses} />
      </div>
    </div>
  );
}
