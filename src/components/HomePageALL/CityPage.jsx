import React from 'react'

function City() {
  return (
    <div>
      {/* Learn, Explore your city Section */}
      <div className="py-10 sm:py-16 lg:py-20 px-4 -mx-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8 sm:mb-12 lg:mb-16">
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">Learn,</h2> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Book Your First Lesson</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {/* Column 1 */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* Lagos */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Lagos</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">English</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">French</div>
                </div>
              </div>

              {/* Kano */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Kano</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Piano</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Spanish</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Accounting</div>
                </div>
              </div>

              {/* Enugu */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Enugu</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Biology</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Statistics</div>
                </div>
              </div>

              {/* Jos */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Jos</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">English</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">IELTS</div>
                </div>
              </div>

              {/* Warri */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Warri</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Piano</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">ESL</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* Abuja */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Abuja</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Piano</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Spanish</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">French</div>
                </div>
              </div>

              {/* Kaduna */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Kaduna</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">French</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Spanish</div>
                </div>
              </div>

              {/* Benin */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Benin</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Piano</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Guitar</div>
                </div>
              </div>

              {/* Calabar */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Calabar</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Spanish</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">French</div>
                </div>
              </div>

              {/* Online */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Online</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Guitar</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">French</div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 sm:col-span-2 lg:col-span-1">
              {/* Port Harcourt */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Port Harcourt</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Spanish</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Swimming</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">English</div>
                </div>
              </div>

              {/* Uyo */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Uyo</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">ESL</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Yoga</div>
                </div>
              </div>

              {/* Ibadan */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Ibadan</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Chinese</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">ESL</div>
                </div>
              </div>

              {/* Abeokuta */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Abeokuta</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">ESL</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">English</div>
                </div>
              </div>

              {/* Makurdi */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Makurdi</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">ESL</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">Maths</div>
                  <div className="text-sm text-gray-600 hover:text-red-500 cursor-pointer transition-colors">English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City