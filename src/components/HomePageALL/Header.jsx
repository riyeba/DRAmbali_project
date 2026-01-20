import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Search, BookOpen, HelpCircle, X, Menu, LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  // Fix for Mobile: Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = useMemo(() => [
    { icon: Search, text: 'Search for a tutor', link: '/search' },
    { icon: BookOpen, text: 'Become a Tutor', link: '/first' },
    { icon: HelpCircle, text: 'Help', link: '/help' }
  ], [])

  return (
    <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 sticky top-0 z-40 shadow-md">
      {/* Header - Desktop and Tablet remain as per your request */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="group">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-transform group-hover:scale-105">
            LearnSphere
          </div>
        </Link>

        {/* Desktop Navigation (Unchanged) */}
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
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all">
              <UserPlus className="w-4 h-4" />
              <span>Student Sign Up</span>
            </button>
          </Link>
          <Link to="/first">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all">
              <BookOpen className="w-4 h-4" />
              <span>Tutor Sign Up</span>
            </button>
          </Link>
        </nav>

        {/* Tablet Navigation (Unchanged) */}
        <nav className="hidden md:flex lg:hidden items-center gap-2">
          <Link to="/search" className="p-2"><Search className="w-5 h-5 text-gray-700" /></Link>
          <Link to="/help" className="p-2"><HelpCircle className="w-5 h-5 text-gray-700" /></Link>
          <Link to="/login"><button className="px-3 py-2 border-2 rounded-full text-sm font-semibold">Log In</button></Link>
          <Link to="/SignUp"><button className="bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold">Student</button></Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg hover:bg-white/50 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* MOBILE VIEW FIXES BELOW */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 z-50 md:hidden flex flex-col">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LearnSphere
            </div>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full flex items-center justify-center shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 pt-8 pb-10">
            <div className="flex flex-col gap-3 mb-8">
              {/* Corrected: Use Link as the primary wrapper with styling, no nested button */}
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 text-lg py-4 rounded-xl font-semibold border-2 border-gray-300 active:scale-95 transition-all"
              >
                <LogIn className="w-5 h-5" /> Log In
              </Link>

              <Link
                to="/SignUp"
                onClick={toggleMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold shadow-md active:scale-95 transition-all"
              >
                <UserPlus className="w-5 h-5" /> Sign Up as Student
              </Link>

              <Link
                to="/first"
                onClick={toggleMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold shadow-md active:scale-95 transition-all"
              >
                <BookOpen className="w-5 h-5" /> Sign Up as Tutor
              </Link>
            </div>

            <div className="border-t-2 border-gray-200 my-6"></div>

            <nav className="space-y-2">
              {menuItems.map(({ icon: Icon, text, link }) => (
                <Link
                  key={text}
                  to={link}
                  onClick={toggleMobileMenu}
                  className="flex items-center gap-4 text-gray-700 p-4 rounded-xl hover:bg-white active:bg-white/50 transition-all"
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                  <span className="text-lg font-medium">{text}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
