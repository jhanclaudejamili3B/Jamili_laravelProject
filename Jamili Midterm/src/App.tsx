import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Categories } from './components/Categories';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initialBooks, initialCategories } from './data/initialData';

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  categoryId: number | null;
};

type Category = {
  id: number;
  name: string;
  description: string;
};

export default function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'categories'>('dashboard');
  const [books, setBooks] = useLocalStorage<Book[]>('books', initialBooks);
  const [categories, setCategories] = useLocalStorage<Category[]>('categories', initialCategories);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 overflow-auto">
        {activeView === 'dashboard' ? (
          <Dashboard 
            books={books}
            categories={categories}
            setBooks={setBooks}
            setCategories={setCategories}
            showToast={showToast}
          />
        ) : (
          <Categories 
            books={books}
            categories={categories}
            setBooks={setBooks}
            setCategories={setCategories}
            showToast={showToast}
          />
        )}
      </main>

      {toast && (
        <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white animate-fade-in-out ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}