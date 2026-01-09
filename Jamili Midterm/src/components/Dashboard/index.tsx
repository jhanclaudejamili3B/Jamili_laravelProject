import React, { useState } from 'react';
import { StatsCard } from './StatsCard';
import { AddBookForm } from './AddBookForm';
import { BookTable } from './BookTable';
import { EditBookModal } from './EditBookModal';

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  categoryId: number | null;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface DashboardProps {
  books: Book[];
  categories: Category[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export function Dashboard({ books, categories, setBooks, setCategories, showToast }: DashboardProps) {
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setIsEditModalOpen(true);
  };

  const handleDeleteBook = (bookId: number) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(b => b.id !== bookId));
      showToast('Book deleted successfully');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Books" 
          value={books.length} 
          icon="📚"
          color="bg-blue-500"
        />
        <StatsCard 
          title="Total Categories" 
          value={categories.length} 
          icon="📁"
          color="bg-green-500"
        />
        <StatsCard 
          title="Active Books" 
          value="All books are active" 
          icon="✅"
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddBookForm 
            categories={categories}
            setBooks={setBooks}
            showToast={showToast}
          />
        </div>
        
        <div className="lg:col-span-2">
          <BookTable 
            books={books}
            categories={categories}
            onEdit={handleEditBook}
            onDelete={handleDeleteBook}
          />
        </div>
      </div>

      {isEditModalOpen && editingBook && (
        <EditBookModal
          book={editingBook}
          categories={categories}
          setBooks={setBooks}
          onClose={() => setIsEditModalOpen(false)}
          showToast={showToast}
        />
      )}
    </div>
  );
}