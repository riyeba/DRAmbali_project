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
    <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 sticky top-0 z-40 shadow-md">
      {/* Header Container */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer transform transition-transform group-hover:scale-105">
            LearnSphere
          </div>
        </Link>

        {/* Desktop Navigation (Visible on lg screens) */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Link to="/search" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all">
            <Search className="w-4 h-4" />
            <span>Search Tutor</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all">
            About Us
          </Link>
          <Link to="/help" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all">
            <HelpCircle className="w-4 h-4" />
            <span>Help</span>
          </Link>

          <div className="h-8 w-px bg-gray-300 mx-2"></div>

          <Link to="/login">
            <button className="flex items-center gap-2 text-gray-700 px-5 py-2.5 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all">
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all">
              Student Sign Up
            </button>
          </Link>
        </nav>

        {/* Tablet Navigation (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-2">
          <Link to="/login">
            <button className="text-gray-700 px-3 py-2 rounded-full text-sm font-semibold border-2 border-gray-300">Log In</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold">Student</button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button (Visible on screens < 768px) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 rounded-lg hover:bg-white/50 transition-colors">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 z-50 md:hidden">
          <div className="w-full h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnSphere
              </div>
              <button onClick={toggleMobileMenu} className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 pt-8 pb-6">
              <div className="flex flex-col gap-3 mb-8">
                <Link to="/login" onClick={toggleMobileMenu}>
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-200">
                    <LogIn className="w-5 h-5" /> Log In
                  </button>
                </Link>
                <Link to="/SignUp" onClick={toggleMobileMenu}>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-md">
                    Sign Up as Student
                  </button>
                </Link>
                <Link to="/first" onClick={toggleMobileMenu}>
                  <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold shadow-md">
                    Sign Up as Tutor
                  </button>
                </Link>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="space-y-2">
                {menuItems.map(({ icon: Icon, text, link }) => (
                  <Link
                    key={text}
                    to={link}
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-4 text-gray-700 p-4 rounded-xl hover:bg-white transition-all"
                  >
                    <Icon className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-medium">{text}</span>
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
