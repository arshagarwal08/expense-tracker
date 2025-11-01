export default function ExpenseSummary({ expenses }) {
  const summary = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      {Object.keys(summary).length === 0 ? (
        <p className="text-gray-400 text-sm">No data yet.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(summary).map(([cat, amt]) => (
            <li
              key={cat}
              className="flex justify-between bg-gray-700 p-2 rounded"
            >
              <span>{cat}</span>
              <span>Rs {amt.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 font-bold text-lg">
        Total: Rs {total.toFixed(2)}
      </div>
    </div>
  );
}
