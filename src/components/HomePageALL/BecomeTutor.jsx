import React from 'react';

const TutorCTASection = () => {
  return (
    <div className=" py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 border border-gray-100 shadow-xl">
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute top-1/2 -left-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute -bottom-6 right-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-25 blur-xl"></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
            
            {/* Left Side - Visual Elements */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                
                {/* Main Illustration Container */}
                <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-2xl border border-white/50">
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-gray-700">$50/hr</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">⭐</span>
                      <span className="text-sm font-bold text-gray-700">4.9/5</span>
                    </div>
                  </div>

                  {/* Center Icon with Enhanced Animation */}
                  <div className="flex justify-center mb-6">
                    <div className="relative transform hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      
                      {/* Enhanced Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                        <span className="text-xs">💡</span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{animationDelay: '0.5s'}}>
                        <span className="text-xs">✨</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Bottom Elements */}
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[
                        { bg: "from-pink-400 to-red-500", letter: "A" },
                        { bg: "from-green-400 to-teal-500", letter: "B" },
                        { bg: "from-purple-400 to-indigo-500", letter: "C" },
                        { bg: "from-orange-400 to-red-500", letter: "+" }
                      ].map((item, i) => (
                        <div key={i} className={`w-8 h-8 bg-gradient-to-br ${item.bg} rounded-full border-2 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200`}>
                          <span className="text-xs text-white font-bold">{item.letter}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm text-gray-700 font-semibold">50+ Students</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/4 -right-8 w-3 h-3 bg-indigo-400 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
              </div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left px-4 sm:px-0">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 rounded-full text-sm font-medium mb-6 shadow-md">
                🚀 Join Our Community
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Share Your Knowledge,<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Earn While You Teach
                </span>
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Turn your expertise into income. Connect with eager learners and build your teaching career on our platform.
              </p>

              {/* Enhanced Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                {[
                  { icon: "💰", text: "Flexible earnings", color: "text-green-600" },
                  { icon: "⏰", text: "Set your schedule", color: "text-blue-600" },
                  { icon: "🌍", text: "Teach from anywhere", color: "text-purple-600" },
                  { icon: "📈", text: "Grow your audience", color: "text-orange-600" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-xl flex-shrink-0">{benefit.icon}</span>
                    <span className={`font-semibold text-sm ${benefit.color}`}>{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                  Start Teaching Today
                </button>
                <button className="border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>

              {/* Enhanced Trust Indicator */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 mb-3 font-medium">Trusted by educators worldwide</p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                        <span className="text-sm text-white font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <span className="text-sm text-gray-700 font-semibold">1,000+ Active Tutors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCTASection;