import React, { useRef, useState } from 'react';

const subjects = [
  { name: 'Math', icon: '🧮', class: 'bg-blue-500' },
  { name: 'Physics', icon: '🔬', class: 'bg-red-500' },
  { name: 'Chemistry', icon: '⚗️', class: 'bg-green-500' },
  { name: 'Biology', icon: '🧬', class: 'bg-yellow-500' },
  { name: 'English', icon: '📘', class: 'bg-purple-500' },
  { name: 'History', icon: '📜', class: 'bg-indigo-500' },
  { name: 'Geography', icon: '🌍', class: 'bg-teal-500' },
  { name: 'Computer', icon: '💻', class: 'bg-pink-500' },
  { name: 'Art', icon: '🎨', class: 'bg-orange-500' },
  { name: 'Music', icon: '🎵', class: 'bg-cyan-500' },
  { name: 'Biology', icon: '🧬', class: 'bg-yellow-500' },
  { name: 'English', icon: '📘', class: 'bg-purple-500' },
  { name: 'History', icon: '📜', class: 'bg-indigo-500' },
  { name: 'Geography', icon: '🌍', class: 'bg-teal-500' },
  { name: 'Computer', icon: '💻', class: 'bg-pink-500' },
  { name: 'Art', icon: '🎨', class: 'bg-orange-500' },
  { name: 'Music', icon: '🎵', class: 'bg-cyan-500' },
];

const SubjectScroller = ({ selectSubject }) => {
  const containerRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleTouchStart = () => {
    if (showTooltip) {
      setShowTooltip(false); // Hide tooltip after first touch
    }
  };

  const handleDrag = (e) => {
    const container = containerRef.current;
    container.scrollLeft += e.movementX * -1;
  };

  return (
    <div className="relative">
      {/* Tooltip */}
      {/* {showTooltip && (
        <div className="absolute top-[-2.5rem] left-4 bg-black text-white text-xs px-3 py-1 rounded shadow-md z-10">
          Drag right to explore more →
        </div>
      )} */}

      <div
        ref={containerRef}
        className="flex overflow-x-hidden overflow-y-hidden gap-8 no-scrollbar px-4"
        onTouchStart={handleTouchStart}
        onMouseDown={(e) => e.target.setPointerCapture(e.pointerId)}
        onPointerMove={(e) => handleDrag(e)}
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex flex-col items-center shrink-0 cursor-pointer hover:scale-105 transition-transform overflow-x-hidden"
            onClick={() => selectSubject(subject.name)}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center text-white rounded-full mb-2 ${subject.class}`}
            >
              {subject.icon}
            </div>
            <span className="text-xs text-gray-700 text-center">{subject.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectScroller;
