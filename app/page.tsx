"use client";

import React, { useState, useEffect } from "react";
import { FiDollarSign } from "react-icons/fi";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseFilter from "@/components/ExpenseFilter";
import ExpenseTable from "@/components/ExpenseTable";

interface Expense {
  id: number;
  description: string;
  amount: string;
  category: string;
  date: string;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  const handleExpenseSubmit = (data: Omit<Expense, "id">) => {
    const newExpense = {
      ...data,
      id: expenses.length + 1,
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...expenses];

    if (filters.dateFrom) {
      filtered = filtered.filter((expense) => expense.date >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filtered = filtered.filter((expense) => expense.date <= filters.dateTo);
    }
    if (filters.category) {
      filtered = filtered.filter(
        (expense) => expense.category === filters.category
      );
    }
    if (filters.minAmount) {
      filtered = filtered.filter(
        (expense) => parseFloat(expense.amount) >= parseFloat(filters.minAmount)
      );
    }
    if (filters.maxAmount) {
      filtered = filtered.filter(
        (expense) => parseFloat(expense.amount) <= parseFloat(filters.maxAmount)
      );
    }

    setFilteredExpenses(filtered);
  };

  return (
    <main className="min-h-screen bg-[#121212] py-12 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
          <span className="bg-indigo-600 p-3 rounded-lg shadow-lg">
            <FiDollarSign className="w-8 h-8" />
          </span>
          Kontrola Wydatków
        </h1>

        <div className="w-full">
          <ExpenseFilter onFilterChange={handleFilterChange} />
        </div>

        <div className="space-y-10 w-full">
          <div className="w-full">
            <ExpenseForm onSubmit={handleExpenseSubmit} />
          </div>

          <div className="my-12 border-t border-gray-800" />

          <div className="my-12 border-t border-gray-800" />

          <div className="w-full">
            <ExpenseTable expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </main>
  );
}
