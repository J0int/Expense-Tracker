"use client";

import React, { useState } from "react";
import { FiDollarSign, FiCalendar, FiList, FiFileText } from 'react-icons/fi';

interface ExpenseData {
  description: string;
  amount: string;
  category: string;
  date: string;
}

const categories = [
  { value: "food", label: "Jedzenie" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Rozrywka" },
  { value: "utilities", label: "Rachunki" },
  { value: "shopping", label: "Zakupy" },
  { value: "other", label: "Inne" },
];

export default function ExpenseForm({ onSubmit }: { onSubmit: (data: ExpenseData) => void }) {
  const [formData, setFormData] = useState<ExpenseData>({
    description: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      description: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="w-full p-8 bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="bg-indigo-600 p-2 rounded-lg">
          <FiDollarSign className="w-6 h-6" />
        </span>
        Dodaj Nowy Wydatek
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Opis
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Kwota (PLN)
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Kategoria
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              required
            >
              <option value="">Wybierz kategorię</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Data
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            Dodaj Wydatek
          </button>
        </div>
      </form>
    </div>
  );
}






