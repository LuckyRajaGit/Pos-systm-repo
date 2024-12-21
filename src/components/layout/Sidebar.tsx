import React from 'react';
import { Menu, ShoppingCart, Users, Package, FileText, BarChart3, Settings, LogOut } from 'lucide-react';

const menuItems = [
  { icon: ShoppingCart, label: 'New Sale', active: true },
  { icon: Users, label: 'Customers' },
  { icon: Package, label: 'Products' },
  { icon: FileText, label: 'Invoices' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xl font-bold">POS System</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  item.active ? 'bg-blue-600' : 'hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}