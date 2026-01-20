import React, { useState, useCallback, useMemo } from 'react'
import { Search, BookOpen, HelpCircle, X, Menu, LogIn, UserPlus } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const menuItems = useMemo(() => [
    { icon: Search, text: 'Search for a tutor', link: '/search' },
    { icon: BookOpen, text: 'Become a Tutor', link: '/first' },
    { icon: HelpCircle, text: 'Help', link: '/help' }
  ], [])

  return (
    <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 sticky top-0 z-40 shadow-md">
      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer transform transition-transform group-hover:scale-105">
            LearnSphere
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {/* Navigation Links */}
          <Link to="/search" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all cursor-pointer">
            <Search className="w-4 h-4" />
            <span>Search Tutor</span>
          </Link>

          <Link to="/about" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all cursor-pointer">
            About Us
          </Link>

          <Link to="/help" className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-sm transition-all cursor-pointer">
            <HelpCircle className="w-4 h-4" />
            <span>Help</span>
          </Link>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-300 mx-2"></div>

          {/* Auth Buttons */}
          <Link to="/login">
            <button className="flex items-center gap-2 text-gray-700 px-5 py-2.5 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-white transition-all cursor-pointer">
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </Link>

          <Link to="/SignUp">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all cursor-pointer">
              <UserPlus className="w-4 h-4" />
              <span>Student Sign Up</span>
            </button>
          </Link>

          <Link to="/first">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all cursor-pointer">
              <BookOpen className="w-4 h-4" />
              <span>Tutor Sign Up</span>
            </button>
          </Link>
        </nav>

        {/* Tablet Navigation (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-2">
          <Link to="/search" className="p-2 rounded-full hover:bg-white transition-all cursor-pointer" title="Search Tutor">
            <Search className="w-5 h-5 text-gray-700" />
          </Link>

          <Link to="/help" className="p-2 rounded-full hover:bg-white transition-all cursor-pointer" title="Help">
            <HelpCircle className="w-5 h-5 text-gray-700" />
          </Link>

          <Link to="/login">
            <button className="flex items-center gap-1 text-gray-700 px-3 py-2 rounded-full text-sm font-semibold border-2 border-gray-300 hover:border-blue-500 transition-all cursor-pointer">
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </Link>

          <Link to="/SignUp">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all cursor-pointer">
              Student
            </button>
          </Link>

          <Link to="/first">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 shadow-md transition-all cursor-pointer">
              Tutor
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg hover:bg-white/50 transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 z-50 md:hidden">
          <div className="w-full h-full overflow-y-auto">
            {/* Header with Logo and Close */}
            <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm shadow-sm">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnSphere
              </div>
              <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-600 shadow-md transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-6 pt-8 pb-6">
              {/* Auth Buttons */}
              <div className="space-y-3 mb-8">
                <Link to="/login">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 text-lg py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm cursor-pointer">
                    <LogIn className="w-5 h-5" />
                    <span>Log In</span>
                  </button>
                </Link>

                <Link to="/SignUp">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <UserPlus className="w-5 h-5" />
                    <span>Sign Up as Student</span>
                  </button>
                </Link>

                <Link to="/first">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <BookOpen className="w-5 h-5" />
                    <span>Sign Up as Tutor</span>
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-gray-200 my-6"></div>

              {/* Menu Links */}
              <div className="space-y-2">
                {menuItems.map(({ icon: Icon, text, link }) => (
                  <a
                    key={text}
                    href={link}
                    className="flex items-center text-gray-700 cursor-pointer hover:text-blue-600 transition-colors p-4 rounded-xl hover:bg-white/70 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-lg">{text}</span>
                  </a>
                ))}
                <Link to="/about" className="flex items-center text-gray-700 cursor-pointer hover:text-blue-600 transition-colors p-4 rounded-xl hover:bg-white/70 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-lg">About Us</span>
                </Link>
              </div>

              {/* Bottom spacing */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)