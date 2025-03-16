import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, GamepadIcon, BookOpen, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/games', icon: GamepadIcon, label: 'Jeux' },
    { path: '/resources', icon: BookOpen, label: 'Ressources' },
    { path: '/profile', icon: User, label: 'Profil' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            TDAH Kids
          </Link>
          <div className="flex space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;