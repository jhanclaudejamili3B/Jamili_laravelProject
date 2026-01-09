import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

interface Category {
  id: number;
  name: string;
  description: string;
}

interface EditCategoryModalProps {
  category: Category;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  onClose: () => void;
  showToast: (message: string, type?: 'success' | 'error') => void;
}

export function EditCategoryModal({ category, setCategories, onClose, showToast }: EditCategoryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData({
      name: category.name,
      description: category.description
    });
  }, [category]);

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

    setCategories(prev => prev.map(c => 
      c.id === category.id 
        ? {
            ...c,
            name: formData.name,
            description: formData.description
          }
        : c
    ));
    
    showToast('Category updated successfully');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Edit Category</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="edit-category-name">Name *</Label>
            <Input
              id="edit-category-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="edit-category-description">Description</Label>
            <Textarea
              id="edit-category-description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              Update Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}