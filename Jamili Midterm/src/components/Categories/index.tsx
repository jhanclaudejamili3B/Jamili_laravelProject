import React, { useState } from 'react';
import { AddCategoryForm } from './AddCategoryForm';
import { CategoryTable } from './CategoryTable';
import { EditCategoryModal } from './EditCategoryModal';

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

interface CategoriesProps {
  books: Book[];
  categories: Category[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export function Categories({ books, categories, setBooks, setCategories, showToast }: CategoriesProps) {
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setIsEditModalOpen(true);
  };

  const handleDeleteCategory = (categoryId: number) => {
    const booksInCategory = books.filter(b => b.categoryId === categoryId);
    const confirmMessage = booksInCategory.length > 0
      ? `Are you sure you want to delete this category? This will unlink ${booksInCategory.length} book(s).`
      : 'Are you sure you want to delete this category?';
    
    if (window.confirm(confirmMessage)) {
      setCategories(categories.filter(c => c.id !== categoryId));
      setBooks(books.map(book => 
        book.categoryId === categoryId 
          ? { ...book, categoryId: null }
          : book
      ));
      showToast('Category deleted successfully');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddCategoryForm 
            setCategories={setCategories}
            showToast={showToast}
          />
        </div>
        
        <div className="lg:col-span-2">
          <CategoryTable 
            books={books}
            categories={categories}
            onEdit={handleEditCategory}
            onDelete={handleDeleteCategory}
          />
        </div>
      </div>

      {isEditModalOpen && editingCategory && (
        <EditCategoryModal
          category={editingCategory}
          setCategories={setCategories}
          onClose={() => setIsEditModalOpen(false)}
          showToast={showToast}
        />
      )}
    </div>
  );
}