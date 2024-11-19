"use client";

import React from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { FiCalendar, FiDollarSign, FiList, FiFileText } from 'react-icons/fi';

interface Expense {
  id: number;
  description: string;
  amount: string;
  category: string;
  date: string;
}

const categoryTranslations: { [key: string]: string } = {
  food: "Jedzenie",
  transport: "Transport",
  entertainment: "Rozrywka",
  utilities: "Rachunki",
  shopping: "Zakupy",
  other: "Inne"
};

export default function ExpenseTable({ expenses }: { expenses: Expense[] }) {
  return (
    <div className="w-full p-8 bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="bg-indigo-600 p-2 rounded-lg">
          <FiList className="w-6 h-6" />
        </span>
        Historia Wydatków
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead>
            <tr className="bg-[#2a2a2a]">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  Data
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FiFileText className="w-4 h-4" />
                  Opis
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FiList className="w-4 h-4" />
                  Kategoria
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FiDollarSign className="w-4 h-4" />
                  Kwota
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 bg-[#2a2a2a]">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-[#333333] transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {format(new Date(expense.date), "d MMMM yyyy", { locale: pl })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {expense.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs">
                    {categoryTranslations[expense.category] || expense.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {expense.amount} zł
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}














