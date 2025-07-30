import React, { useState, useCallback, useMemo } from 'react'
import { Search, BookOpen, HelpCircle, X, Menu } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const menuItems = useMemo(() => [
    { icon: Search, text: 'Search for a tutor' },
    { icon: BookOpen, text: 'Become a Tutor' },
    { icon: HelpCircle, text: 'Help' }
  ], [])

  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-50 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm relative">
        <div className="text-xl sm:text-2xl font-bold text-red-500">LearnShere</div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-4">
          <span>
            <HelpCircle className="w-4 h-4 text-gray-600 cursor-pointer" />
          </span>
          <button className="text-black px-4 py-2 rounded-full text-sm font-bold cursor-pointer hover:bg-gray-100 transition-colors">
            Log In
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-red-600 transition-colors">
            Sign Up as Tutor
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="w-full h-full bg-white overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 sm:px-6 pt-6">
              {/* Buttons Container */}
              <div className="space-y-4 mb-8">
                {/* Log In */}
                <button className="w-full bg-red-400 text-white text-lg sm:text-xl py-3 sm:py-4 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  Log In
                </button>

                {/* Sign Up */}
                <button className="w-full bg-gray-200 text-gray-700 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium hover:bg-gray-300 transition-colors">
                  Sign Up
                </button>
              </div>

              {/* Menu Links */}
              <div className="space-y-6 pt-4">
                {menuItems.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center text-gray-600 cursor-pointer hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-50">
                    <Icon className="w-5 h-5 mr-4 text-gray-400" />
                    <span className="font-medium text-lg">{text}</span>
                  </div>
                ))}
              </div>

              {/* Additional spacing at bottom for better scrolling */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)