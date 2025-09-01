import React, { useState } from 'react';
import { Menu as MenuIcon, ChevronDown } from 'lucide-react';

interface MenuProps {
  onNavigate: (page: string) => void;
}

function Menu({ onNavigate }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About Us', value: 'about' },
    { label: 'Contact Us', value: 'contact' },
    { label: 'Shipping Policy', value: 'shipping' },
    { label: 'Terms and Conditions', value: 'terms' },
    { label: 'Cancellations and Refunds', value: 'refunds' },
    { label: 'Privacy Policy', value: 'privacy' },
  ];

  const handleItemClick = (value: string) => {
    onNavigate(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-green-700 hover:text-green-800 font-medium transition-colors"
      >
        <MenuIcon className="w-5 h-5" />
        <span>Menu</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-green-100 z-50">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.value)}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors border-b border-gray-100 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Menu;