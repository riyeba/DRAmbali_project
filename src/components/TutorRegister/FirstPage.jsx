import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronRight, BookOpen, Star, TrendingUp, Sparkles, ChevronLeft } from 'lucide-react';
import { Link, useNavigate} from 'react-router';


export default function FirstPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  const navigate=useNavigate()

  const subjects = [
    { name: 'Mathematics', icon: '📊', popularity: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'English', icon: '📚', popularity: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Science', icon: '🔬', popularity: 82, color: 'from-purple-500 to-indigo-500' },
    { name: 'Physics', icon: '⚛️', popularity: 75, color: 'from-red-500 to-pink-500' },
    { name: 'Chemistry', icon: '🧪', popularity: 70, color: 'from-yellow-500 to-orange-500' },
    { name: 'Biology', icon: '🧬', popularity: 68, color: 'from-emerald-500 to-teal-500' },
    { name: 'History', icon: '📜', popularity: 65, color: 'from-amber-500 to-yellow-500' },
    { name: 'Geography', icon: '🌍', popularity: 60, color: 'from-teal-500 to-cyan-500' },
    { name: 'French', icon: '🇫🇷', popularity: 58, color: 'from-rose-500 to-pink-500' },
    { name: 'Spanish', icon: '🇪🇸', popularity: 55, color: 'from-orange-500 to-red-500' },
    { name: 'Computer Science', icon: '💻', popularity: 92, color: 'from-violet-500 to-purple-500' },
    { name: 'Art', icon: '🎨', popularity: 45, color: 'from-fuchsia-500 to-violet-500' },
    { name: 'Music', icon: '🎵', popularity: 42, color: 'from-indigo-500 to-blue-500' },
    { name: 'Economics', icon: '📈', popularity: 38, color: 'from-green-600 to-lime-500' },
    { name: 'Philosophy', icon: '🤔', popularity: 35, color: 'from-gray-600 to-slate-500' }
  ];

  const filteredSuggestions = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0
  );

  const popularSubjects = subjects.sort((a, b) => b.popularity - a.popularity).slice(0, 6);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (subject) => {
    setSearchQuery(subject.name);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(filteredSuggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Which{' '}
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                subjects
              </span>
              <br />
              can you teach?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Share your expertise with students worldwide. Join our community of passionate educators.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16" ref={searchRef}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => searchQuery && setShowSuggestions(true)}
                placeholder="Write here......"
                className="w-full pl-16 pr-6 py-6 text-lg placeholder-gray-900 bg-white/90 backdrop-blur-lg border-2 border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 shadow-xl placeholder-gray-500 transition-all duration-300"
                autoComplete="off"
              />
              
              {/* Search Suggestions */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                  {filteredSuggestions.map((subject, index) => (
                    <div
                      key={index}
                      className={`px-6 py-4 cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                        index === selectedIndex 
                          ? 'bg-gradient-to-r from-red-50 to-pink-50 text-red-700' 
                          : 'hover:bg-gray-50 text-gray-900'
                      } ${index === 0 ? 'rounded-t-2xl' : ''} ${
                        index === filteredSuggestions.length - 1 ? 'rounded-b-2xl' : 'border-b border-gray-100'
                      }`}
                      onClick={() => handleSuggestionClick(subject)}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{subject.icon}</span>
                        <div>
                          <span className="text-lg font-medium">
                            {subject.name.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => (
                              <span
                                key={i}
                                className={
                                  part.toLowerCase() === searchQuery.toLowerCase()
                                    ? 'bg-yellow-200 font-bold rounded px-1'
                                    : ''
                                }
                              >
                                {part}
                              </span>
                            ))}
                          </span>
                          <div className="flex items-center space-x-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-500">{subject.popularity}% popularity</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                    </div>
                  ))}
                </div>
              )}

              {showSuggestions && searchQuery && filteredSuggestions.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl z-50 px-6 py-8 text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-gray-600">No subjects found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-1">Try searching for a different subject</p>
                </div>
              )}
            </div>
          </div>

          {/* Popular Subjects Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Most Popular Subjects</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 hover:scale-105"
                  onClick={() => handleSuggestionClick(subject)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{subject.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">{subject.name}</h3>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{subject.popularity}% popularity</span>
                      </div>
                      
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-700 ease-out`}
                          style={{ width: `${subject.popularity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Tips Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ready to Start Teaching?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Share Your Expertise</h3>
                  <p className="leading-relaxed">
                    Superprof connects you with eager students in over 1000+ subjects worldwide. Turn your knowledge into impact and income.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Get Started Today</h3>
                  <p className="leading-relaxed">
                    Search for your subject above and begin your teaching journey. Join thousands of educators already making a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="max-w-4xl mx-auto mt-16 mb-8 px-4">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              {/* Previous Button */}
             
              {/* <button className="group flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-lg border-2 border-white/30 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 cursor-pointer" >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                <span className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  Previous
                </span>
              </button> */}
              

              {/* Page Indicator */}
              <div className="flex items-center space-x-2">
                {/* <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full"></div> */}
              </div>

              {/* Next Button */}
             
              {/* <button className="group flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={()=>navigate}>
                <span className="text-base md:text-lg font-semibold">
                  Next
                </span>
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button> */}

               <button className="group flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-pink-600  hover:from-red-600 hover:to-pink-700 text-white backdrop-blur-lg  rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300  cursor-pointer" onClick={()=>navigate("/second")}>
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                  Next
                </span>
              </button>
             
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden space-y-4">
              {/* Page Indicator - Top on Mobile */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>

              {/* Buttons - Stacked on Mobile */}
              <div className="flex flex-col space-y-3">
                {/* Previous Button - Full Width on Mobile */}
                <button className="group flex items-center justify-center space-x-3 w-full px-6 py-4 bg-white/80 backdrop-blur-lg border-2 border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 hover:bg-white/90">
                  <ChevronLeft className="h-5 w-5 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    Previous
                  </span>
                </button>

                {/* Next Button - Full Width on Mobile */}
                <button className="group flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
                  <span className="text-lg font-semibold">
                    Next
                  </span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}