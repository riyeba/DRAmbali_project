

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const subjects = [
  { name: 'Math', icon: '🧮', class: 'bg-blue-500', description: 'Numbers, equations, and problem solving' },
  { name: 'Physics', icon: '🔬', class: 'bg-red-500', description: 'Forces, motion, and natural phenomena' },
  { name: 'Chemistry', icon: '⚗️', class: 'bg-green-500', description: 'Elements, reactions, and compounds' },
  { name: 'Biology', icon: '🧬', class: 'bg-yellow-500', description: 'Life, organisms, and natural systems' },
  { name: 'English', icon: '📘', class: 'bg-purple-500', description: 'Language, literature, and communication' },
  { name: 'History', icon: '📜', class: 'bg-indigo-500', description: 'Past events and civilizations' },
  { name: 'Geography', icon: '🌍', class: 'bg-teal-500', description: 'Earth, places, and environments' },
  { name: 'Computer Sc.', icon: '💻', class: 'bg-pink-500', description: 'Programming and technology' },
  { name: 'Art', icon: '🎨', class: 'bg-orange-500', description: 'Creativity and visual expression' },
  { name: 'Music', icon: '🎵', class: 'bg-cyan-500', description: 'Rhythm, melody, and harmony' },
];

const SubjectBook = ({ selectSubject }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Open the book after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextPage = () => {
    if (currentPage < subjects.length - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 500);
    } else if (currentPage === subjects.length - 1 && !isFlipping && isAutoPlay) {
      // Auto-restart from beginning when reaching the end
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(0);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 500);
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlay && isOpen) {
      const interval = setInterval(() => {
        if (!isFlipping) {
          nextPage();
        }
      }, 3000); 
      
      setAutoPlayInterval(interval);
      
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    } else {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        setAutoPlayInterval(null);
      }
    }
  }, [isAutoPlay, currentPage, isFlipping, isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, []);

  const currentSubject = subjects[currentPage];
  const nextSubject = subjects[currentPage + 1];
  const prevSubject = subjects[currentPage - 1];

  return (
    <div className='relative'>
    <div className=" mt-[-10rem] sm:mt-[-6rem] flex flex-col gap-28  items-center justify-center min-h-screen p-2 sm:p-4 mb-12 overflow-hidden">
      {/* Book Container */}
      <div className="relative perspective-1000">
        {/* Book Shadow */}
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg transform translate-x-3 translate-y-3 blur-sm"></div>
        
        {/* Book Base */}
        <div className="relative rounded-lg " style={{ width: '400px', height: '200px' }}>
          {/* Left Page (Previous/Current) */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full overflow-hidden transition-all duration-2000 ease-out transform-gpu"
            style={{ 
              width: 'calc(50% - 8px)',
              transformOrigin: 'right center',
              transformStyle: 'preserve-3d',
              transform: isOpen ? 'rotateY(0deg)' : 'rotateY(-25deg)',
              backgroundColor: isOpen ? 'white' : '#d97706',
              borderRadius: isOpen ? '0.5rem 0 0 0.5rem' : '0.5rem'
            }}
          >
            {/* Closed book cover */}
            {!isOpen && (
              <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-800 rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <h1 className="text-lg font-bold">SUBJECTS</h1>
                  <p className="text-xs mt-1">Learning Guide</p>
                </div>
              </div>
            )}
            
            {/* Open book content */}
            {isOpen && (
              <div className="w-full h-full bg-white rounded-l-lg">
                {prevSubject ? (
                  <div className="h-full flex flex-col">
                    {/* Page Header */}
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-2 border-b border-amber-200">
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-3 flex flex-col items-center justify-center">
                      <div className={`w-10 h-10 flex items-center justify-center text-white rounded-full mb-2 ${prevSubject.class}`}>
                        <span className="text-lg">{prevSubject.icon}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 text-center">{prevSubject.name}</h4>
                    </div>
                  </div>
                ) : (
                  // Show first subject when no previous subject exists
                  <div className="h-full flex flex-col">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-2 border-b border-amber-200">
                    </div>
                    <div className="flex-1 p-3 flex flex-col items-center justify-center">
                      <div className="text-amber-600 text-center">
                        <h4 className="text-sm font-bold">Welcome to</h4>
                        <h3 className="text-lg font-bold">Subject Guide</h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Book Spine - Centered between pages */}
          <div className="absolute left-1/2 top-0 h-full w-4 bg-gradient-to-b from-amber-800 to-amber-900 s transform -translate-x-1/2 z-30 rounded-sm flex items-center justify-center">
            <div className="text-amber-200 text-xs font-bold writing-mode-vertical-rl text-orientation-mixed transform rotate-180">
              SUBJECTS
            </div>
          </div>

          {/* Right Page (Current) */}
          <div 
            className="absolute right-0 top-0 w-1/2 h-full shadow-inner overflow-hidden transition-all duration-2000 ease-out transform-gpu"
            style={{ 
              width: 'calc(50% - 8px)',
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              transform: isOpen ? 'rotateY(0deg)' : 'rotateY(25deg)',
              backgroundColor: isOpen ? 'white' : '#d97706',
              borderRadius: isOpen ? '0 0.5rem 0.5rem 0' : '0.5rem'
            }}
          >
            {/* Closed book back cover */}
            {!isOpen && (
              <div className="w-full h-full bg-gradient-to-br from-amber-800 to-amber-700 rounded-lg">
              </div>
            )}
            
            {/* Open book content */}
            {isOpen && (
              <div className="w-full h-full bg-white rounded-r-lg">
                <div className="h-full flex flex-col">
                  {/* Page Header */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-2 border-b border-amber-200">
                  </div>
                  
                  {/* Subject Content */}
                  <div className="flex-1 p-3 flex flex-col items-center justify-center">
                    <div 
                      className={`w-12 h-12 flex items-center justify-center text-white rounded-full mb-3 shadow-lg cursor-pointer hover:scale-110 transition-all duration-200 ${currentSubject.class}`}
                      onClick={() => selectSubject && selectSubject(currentSubject.name)}
                    >
                      <span className="text-xl">{currentSubject.icon}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                      {currentSubject.name}
                    </h3>
                    
                    {selectSubject && (
                      <button
                        className={`px-3 py-1 text-white text-xs rounded-full shadow-md hover:shadow-lg transition-all duration-200 ${currentSubject.class} hover:scale-105`}
                        onClick={() => selectSubject(currentSubject.name)}
                      >
                        Select
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Flipping Page Animation */}
          {isFlipping && isOpen && (
            <>
              {/* Spine remains visible during flip */}
              <div className="absolute left-1/2 top-0 h-full w-4 bg-gradient-to-b from-amber-800 to-amber-900 shadow-inner transform -translate-x-1/2 z-50 rounded-sm flex items-center justify-center">
                <div className="text-amber-200 text-xs font-bold writing-mode-vertical-rl text-orientation-mixed transform rotate-180">
                  SUBJECTS
                </div>
              </div>
              
              <div 
                className={`absolute top-0 h-full bg-white shadow-2xl z-40 transition-all duration-500 ease-in-out transform-gpu ${
                  flipDirection === 'next' 
                    ? 'right-0 animate-flip-right' 
                    : 'left-0 animate-flip-left'
                }`}
                style={{
                  width: 'calc(50% - 8px)',
                  transformStyle: 'preserve-3d',
                  animation: flipDirection === 'next' 
                    ? 'flipPageRight 0.5s ease-in-out' 
                    : 'flipPageLeft 0.5s ease-in-out'
                }}
              >
                {/* Front of flipping page */}
                <div className="absolute inset-0 backface-hidden">
                  {flipDirection === 'next' && currentSubject && (
                    <div className="flex flex-col bg-white rounded-r-lg overflow-hidden h-full">
                      <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-2 border-b border-amber-200">
                      </div>
                      <div className="flex-1 p-3 flex flex-col items-center justify-center">
                        <div className={`w-12 h-12 flex items-center justify-center text-white rounded-full mb-3 shadow-lg ${currentSubject.class}`}>
                          <span className="text-xl">{currentSubject.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 text-center">{currentSubject.name}</h3>
                      </div>
                    </div>
                  )}
                  
                  {flipDirection === 'prev' && (prevSubject || currentPage === 0) && (
                    <div className="h-full flex flex-col bg-white rounded-l-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-2 border-b border-amber-200">
                      </div>
                      <div className="flex-1 p-3 flex flex-col items-center justify-center">
                        {prevSubject ? (
                          <>
                            <div className={`w-10 h-10 flex items-center justify-center text-white rounded-full mb-2 shadow-md ${prevSubject.class}`}>
                              <span className="text-lg">{prevSubject.icon}</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 text-center">{prevSubject.name}</h4>
                          </>
                        ) : (
                          <div className="text-amber-600 text-center">
                            <h4 className="text-sm font-bold">Welcome to</h4>
                            <h3 className="text-lg font-bold">Subject Guide</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Back of flipping page */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  {flipDirection === 'next' && nextSubject && (
                    <div className="h-full flex flex-col bg-white rounded-l-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-2 border-b border-amber-200">
                      </div>
                      <div className="flex-1 p-3 flex flex-col items-center justify-center">
                        <div className={`w-12 h-12 flex items-center justify-center text-white rounded-full mb-3 shadow-lg ${nextSubject.class}`}>
                          <span className="text-xl">{nextSubject.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 text-center">{nextSubject.name}</h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          
          {/* Page Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-50">
         
          </div>
        </div>
      </div>
      
      {/* Book Info */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm"></p>
        <p className="text-xs mt-1">
          {isFlipping 
            ? '' 
            : isAutoPlay 
            ? '' 
            : ''
          }
        </p>
        {/* {isAutoPlay && isOpen && (
          <div className="mt-2">
            <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-75 ease-linear"
                style={{
                  width: isFlipping ? '100%' : '0%',
                  animation: isFlipping ? 'none' : 'progress 3s linear infinite'
                }}
              ></div>
            </div>
          </div>
        )} */}
      </div>

      {/* CSS Animations */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
        
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
        
        .text-orientation-mixed {
          text-orientation: mixed;
        }
        
        @keyframes flipPageRight {
          0% {
            transform: rotateY(0deg);
            z-index: 40;
          }
          50% {
            transform: rotateY(-90deg);
            z-index: 40;
          }
          51% {
            transform: rotateY(-90deg);
            z-index: 35;
          }
          100% {
            transform: rotateY(-180deg);
            z-index: 35;
          }
        }
        
        @keyframes flipPageLeft {
          0% {
            transform: rotateY(0deg);
            z-index: 40;
          }
          50% {
            transform: rotateY(90deg);
            z-index: 40;
          }
          51% {
            transform: rotateY(90deg);
            z-index: 35;
          }
          100% {
            transform: rotateY(180deg);
            z-index: 35;
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default SubjectBook;
