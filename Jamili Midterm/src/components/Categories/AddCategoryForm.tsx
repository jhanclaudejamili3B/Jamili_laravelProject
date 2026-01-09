import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

interface Category {
  id: number;
  name: string;
  description: string;
}

interface AddCategoryFormProps {
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export function AddCategoryForm({ setCategories, showToast }: AddCategoryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Category name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const newCategory: Category = {
      id: Date.now(),
      name: formData.name,
      description: formData.description
    };

    setCategories(prev => [...prev, newCategory]);
    setFormData({ name: '', description: '' });
    showToast('Category added successfully');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Category</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="category-name">Name *</Label>
          <Input
            id="category-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="category-description">Description</Label>
          <Textarea
            id="category-description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Optional"
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Add Category
        </Button>
      </form>
    </div>
  );
}