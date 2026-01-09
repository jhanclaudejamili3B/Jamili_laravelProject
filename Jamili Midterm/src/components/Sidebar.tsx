import React from 'react';
import { Home, BookOpen, LogOut, User } from 'lucide-react';
import { Button } from '../components/ui/button';

interface SidebarProps {
  activeView: 'dashboard' | 'categories';
  setActiveView: (view: 'dashboard' | 'categories') => void;
  onLogout: () => void;
}

export function Sidebar({ activeView, setActiveView, onLogout }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold">Libra</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <Button
          variant="ghost"
          className={`w-full justify-start mb-2 ${
            activeView === 'dashboard' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          onClick={() => setActiveView('dashboard')}
        >
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </Button>
        
        <Button
          variant="ghost"
          className={`w-full justify-start ${
            activeView === 'categories' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          onClick={() => setActiveView('categories')}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          Categories
        </Button>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">Admin</p>
            <p className="text-sm text-slate-400">Administrator</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
}