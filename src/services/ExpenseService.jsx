export const ExpenseService = {
  getAll: () => JSON.parse(localStorage.getItem("expenses")) || [],
  save: (expenses) => localStorage.setItem("expenses", JSON.stringify(expenses)),
};
