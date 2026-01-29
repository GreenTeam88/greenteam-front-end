'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { getAllCalculators } from '@/lib/calculatorApi';

interface Category {
  name: string;
  slug: string;
  description: string | null;
}

// Loading component
const Loader = () => (
  <div className="w-[386px] h-[400px] flex items-center justify-center bg-white rounded-lg shadow-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
  </div>
);

export default function CategorySelector() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch categories from dashboard
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const calculators = await getAllCalculators();
        setCategories(
          calculators.map((c) => ({
            name: c.name,
            slug: c.slug,
            description: c.description,
          }))
        );
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Handle category selection and redirect
  const handleNext = () => {
    if (selectedCategory) {
      router.push(`/${selectedCategory}`);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-[386px] bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Welke dienst zoekt u?</h2>
        <p className="text-sm text-gray-500">Selecteer een categorie om te beginnen</p>
      </div>

      <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
        {categories.map((category) => (
          <div
            key={category.slug}
            onClick={() => setSelectedCategory(category.slug)}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedCategory === category.slug
                ? 'border-green-600 bg-green-50 ring-2 ring-green-600'
                : 'border-gray-200 hover:border-green-400 hover:bg-gray-50'
            }`}
          >
            <h3 className="font-medium text-gray-800">{category.name}</h3>
            {category.description && (
              <p className="text-sm text-gray-500 mt-1">{category.description}</p>
            )}
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Geen categorieën beschikbaar</p>
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={!selectedCategory}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          selectedCategory
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Volgende
      </button>
    </div>
  );
}
