import React, { useState, useCallback, useMemo } from 'react';
import { Search, BookOpen, HelpCircle, X, Menu, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const menuItems = useMemo(() => [
    { icon: Search, text: 'Search for a tutor', link: '/search' },
    { icon: BookOpen, text: 'Become a Tutor', link: '/first' },
    { icon: HelpCircle, text: 'Help', link: '/help' }
  ], []);

  return (
    <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer transform transition-transform group-hover:scale-105">
            LearnSphere
          </div>
        </Link>

        {/* Desktop Navigation (Visible on lg screens) */}
        <nav className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100 mr-2">
            <Link to="/search" className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">
              <Search className="w-4 h-4" />
              <span>Search Tutor</span>
            </Link>
            <Link to="/help" className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">
              <HelpCircle className="w-4 h-4" />
              <span>Help</span>
            </Link>
          </div>

          <div className="h-6 w-px bg-gray-200 mx-1"></div>

          <Link to="/login">
            <button className="flex items-center gap-2 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all">
              <LogIn className="w-4 h-4" />
              Log In
            </button>
          </Link>

          <Link to="/SignUp">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
              Student Sign Up
            </button>
          </Link>

          {/* RESTORED: Tutor Sign Up for Desktop */}
          <Link to="/first">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-purple-100 hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Become a Tutor
            </button>
          </Link>
        </nav>

        {/* Tablet Navigation (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-2">
          <Link to="/login">
            <button className="text-gray-700 px-3 py-2 rounded-lg text-sm font-bold border border-gray-200 hover:bg-gray-50">Log In</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">Student</button>
          </Link>
          <Link to="/first">
            <button className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-bold">Tutor</button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 rounded-xl bg-gray-50 text-gray-700 border border-gray-100 active:scale-95 transition-all">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnSphere
              </div>
              <button onClick={toggleMobileMenu} className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              <div className="space-y-3">
                <Link to="/login" onClick={toggleMobileMenu} className="block w-full">
                  <button className="w-full py-4 px-6 rounded-2xl font-bold text-gray-700 border-2 border-gray-100 flex items-center justify-center gap-3">
                    <LogIn className="w-5 h-5" /> Log In
                  </button>
                </Link>
                <Link to="/SignUp" onClick={toggleMobileMenu} className="block w-full">
                  <button className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-blue-600 shadow-lg shadow-blue-100 flex items-center justify-center gap-3">
                    <UserPlus className="w-5 h-5" /> Sign Up as Student
                  </button>
                </Link>
                {/* RESTORED: Tutor Sign Up for Mobile */}
                <Link to="/first" onClick={toggleMobileMenu} className="block w-full">
                  <button className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-100 flex items-center justify-center gap-3">
                    <BookOpen className="w-5 h-5" /> Become a Tutor
                  </button>
                </Link>
              </div>

              <div className="h-px bg-gray-100"></div>

              <div className="space-y-2">
                {menuItems.map(({ icon: Icon, text, link }) => (
                  <Link
                    key={text}
                    to={link}
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-4 text-gray-600 p-4 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all font-semibold"
                  >
                    <Icon className="w-6 h-6 opacity-70" />
                    <span>{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
