import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  Menu,
  X,
  Users,
  ClipboardList,
  BarChart2,
  Video
} from 'lucide-react';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState([
    { id: '1', title: 'New task assigned', read: false },
    { id: '2', title: 'Meeting reminder', read: false },
  ]);

  const location = useLocation();

  const navItems = [
    { title: 'Workforce', icon: Users, path: '/' },
    { title: 'Tasks', icon: ClipboardList, path: '/tasks' },
    { title: 'Performance', icon: BarChart2, path: '/performance' },
    { title: 'Meetings', icon: Video, path: '/meetings' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">ManageFlow</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex items-center space-x-1 ${
                    isActivePath(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md ${
                  isActivePath(item.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;