"use client";

import React, { useState } from "react";
import { FiCalendar, FiDollarSign, FiFilter, FiList } from 'react-icons/fi';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  dateFrom: string;
  dateTo: string;
  category: string;
  minAmount: string;
  maxAmount: string;
}

export default function ExpenseFilter({ onFilterChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    dateFrom: "",
    dateTo: "",
    category: "",
    minAmount: "",
    maxAmount: "",
  });

  const categories = [
    { value: "food", label: "Jedzenie" },
    { value: "transport", label: "Transport" },
    { value: "entertainment", label: "Rozrywka" },
    { value: "utilities", label: "Rachunki" },
    { value: "shopping", label: "Zakupy" },
    { value: "other", label: "Inne" },
  ];

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-[#1a1a1a] text-white rounded-xl 
                   border border-gray-800 shadow-lg hover:bg-[#2a2a2a]
                   transition-all duration-200 transform hover:scale-[1.01]"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="bg-indigo-600 p-2 rounded-lg">
            <FiFilter className="w-5 h-5" />
          </span>
          <span className="text-xl font-semibold">Filtruj Wydatki</span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 p-8 bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FiCalendar className="w-4 h-4 inline mr-2" />
                Od Daty
              </label>
              <input
                type="date"
                name="dateFrom"
                value={filters.dateFrom}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FiCalendar className="w-4 h-4 inline mr-2" />
                Do Daty
              </label>
              <input
                type="date"
                name="dateTo"
                value={filters.dateTo}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FiList className="w-4 h-4 inline mr-2" />
                Kategoria
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
              >
                <option value="">Wszystkie Kategorie</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiDollarSign className="w-4 h-4 inline mr-2" />
                  Min. Kwota
                </label>
                <input
                  type="number"
                  name="minAmount"
                  value={filters.minAmount}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiDollarSign className="w-4 h-4 inline mr-2" />
                  Max. Kwota
                </label>
                <input
                  type="number"
                  name="maxAmount"
                  value={filters.maxAmount}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 text-white"
                  placeholder="999999"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






