import { useState } from "react";

export default function ExpenseList({ expenses }) {
  const [filter, setFilter] = useState("");

  const filteredExpenses = filter
    ? expenses.filter((e) =>
        e.category.toLowerCase().includes(filter.toLowerCase())
      )
    : expenses;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>

      <input
        type="text"
        placeholder="Filter by category..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
      />

      {filteredExpenses.length === 0 ? (
        <p className="text-gray-400 text-sm">No expenses found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredExpenses.map((exp) => (
            <li
              key={exp.id}
              className="flex justify-between bg-gray-700 p-2 rounded"
            >
              <span>{exp.category}</span>
              <span>Rs {exp.amount.toFixed(2)}</span>
              <span className="text-gray-400 text-sm">{exp.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
