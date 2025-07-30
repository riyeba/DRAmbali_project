import { Search, MapPin, BookOpen, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const subjects = [
  'Maths',
  'English',
  'Science',
  'History',
  'Geography',
  'Physics',
  'Chemistry',
  'Biology',
  'Art',
  'Music',
  'French',
  'Spanish',
  'Computer Science',
  'Economics',
  'Psychology'
];

const locations = ['Online', 'Near me'];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  
  const subjectRef = useRef(null);
  const locationRef = useRef(null);
  const intervalRef = useRef(null);

  // Rotate subjects every 2 seconds
  useEffect(() => {
    if (isRotating) {
      intervalRef.current = setInterval(() => {
        setCurrentSubjectIndex((prev) => (prev + 1) % subjects.length);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRotating]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subjectRef.current && !subjectRef.current.contains(event.target)) {
        setShowSubjectDropdown(false);
        if (!searchValue) {
          setIsRotating(true);
        }
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchValue]);

  const handleSubjectSelect = (subject) => {
    setSearchValue(subject);
    setShowSubjectDropdown(false);
    setIsRotating(false);
  };

  const handleLocationSelect = (location) => {
    setLocationValue(location);
    setShowLocationDropdown(false);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchValue, 'in', locationValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSubjectInputClick = () => {
    setIsRotating(false);
    setShowSubjectDropdown(true);
  };

  const handleSubjectInputFocus = () => {
    setIsRotating(false);
    setShowSuggestions(true);
    setShowSubjectDropdown(true);
  };

  const handleSubjectInputChange = (e) => {
    setSearchValue(e.target.value);
    if (!e.target.value) {
      setIsRotating(true);
    }
  };

  return (
    <div className="relative w-full max-w-none sm:max-w-4xl mx-auto mb-12 px-2 sm:px-6 lg:px-8">
      <div className="bg-white rounded-full p-1 sm:p-2 flex items-center shadow-lg">
        {/* Subject Input */}
        <div className="flex items-center flex-1 px-2 sm:px-4 py-2 sm:py-3 border-r border-gray-200 relative min-w-0" ref={subjectRef}>
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 sm:mr-3 flex-shrink-0" />
          <div className="flex-1 relative min-w-0">
            <input
              type="text"
              className="w-full text-sm sm:text-base lg:text-lg border-none outline-none bg-transparent placeholder-gray-400"
              placeholder={searchValue ? '' : `Try "${subjects[currentSubjectIndex]}"`}
              value={searchValue}
              onChange={handleSubjectInputChange}
              onFocus={handleSubjectInputFocus}
              onKeyDown={handleKeyPress}
              onClick={handleSubjectInputClick}
            />
            <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 cursor-pointer flex-shrink-0" 
              onClick={handleSubjectInputClick} />
            
            {/* Subject Dropdown */}
            {showSubjectDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 max-h-60 overflow-y-auto z-20">
                {subjects.map((subject, index) => (
                  <div
                    key={subject}
                    className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                    onClick={() => handleSubjectSelect(subject)}
                  >
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Location Input */}
        <div className="flex items-center flex-1 px-2 sm:px-4 py-2 sm:py-3 relative min-w-0" ref={locationRef}>
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
          <div className="flex-1 relative min-w-0">
            <input
              type="text"
              className="w-full text-sm sm:text-base lg:text-lg border-none outline-none bg-transparent placeholder-gray-400 cursor-pointer"
              placeholder="Lesson location"
              value={locationValue}
              readOnly
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            />
            <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 cursor-pointer flex-shrink-0"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)} />
            
            {/* Location Dropdown */}
            {showLocationDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 z-20">
                {locations.map((location, index) => (
                  <div
                    key={location}
                    className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center justify-center px-3 py-2 sm:px-6 sm:py-3 w-10 h-10 sm:w-auto sm:h-auto ml-1 sm:ml-2 flex-shrink-0"
        >
          <Search className="h-4 w-4 sm:h-5 sm:w-5 sm:hidden" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
}