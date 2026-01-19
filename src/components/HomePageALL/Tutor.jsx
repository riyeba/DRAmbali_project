

import React, { useState, useMemo, useCallback } from 'react';
import { Star, Heart, Clock, MapPin, Award, ChevronRight } from 'lucide-react';

// Mock data with real teacher photos - Page 1
const MOCK_TUTORS_PAGE1 = [
  {
    id: 1,
    name: "Dr. Uwaiz Adeniran",
    subject: "Mathematics",
    avatar: "https://images.unsplash.com/photo-1654182276345-db704a573d08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviews: 247,
    price: 1000,
    location: "Kogi",
    experience: "8 years",
    badges: ["Top Rated", "PhD"],
    availability: "Available Now",
    specialties: ["Calculus", "Statistics"],
    description: "Expert mathematician with PhD from Stanford. Specializes in making complex concepts accessible.",
    isOnline: true,
    responseTime: "< 1 hour"
  },
  {
    id: 2,
    name: "James Samson",
    subject: "Physics",
    avatar: "https://images.unsplash.com/photo-1630494692744-815ca085732d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 189,
    price: 2000,
    location: "Osogbo",
    experience: "6 years",
    badges: ["Verified", "MIT"],
    availability: "Available Today",
    specialties: ["Quantum Physics", "Mechanics"],
    description: "MIT graduate with extensive experience in theoretical physics. Interactive teaching methods.",
    isOnline: true,
    responseTime: "< 2 hours"
  },
  {
    id: 3,
    name: "Temi Anibire",
    subject: "Chemistry",
    avatar: "https://images.unsplash.com/photo-1639055985535-6d3b0edb1a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.95,
    reviews: 312,
    price: 1000,
    location: "Oyo",
    experience: "10 years",
    badges: ["Expert", "Harvard"],
    availability: "Busy",
    specialties: ["Organic Chemistry", "Biochemistry"],
    description: "Harvard chemistry professor with a passion for student success and proven results.",
    isOnline: false,
    responseTime: "< 4 hours"
  },
  {
    id: 4,
    name: "Michael Dada",
    subject: "Computer Science",
    avatar: "https://images.unsplash.com/photo-1543644596-b9cb41f6535c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 156,
    price: 1500,
    location: "Ijebu",
    experience: "5 years",
    badges: ["Google", "Full Stack"],
    availability: "Available Now",
    specialties: ["Python", "JavaScript"],
    description: "Former Google engineer turned educator. Programming fundamentals and interview prep.",
    isOnline: true,
    responseTime: "< 30 min"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    subject: "Biology",
    avatar: "https://images.unsplash.com/photo-1739285452629-2672b13fa42d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.85,
    reviews: 203,
    price: 1000,
    location: "Ibadan",
    experience: "12 years",
    badges: ["PhD", "Research"],
    availability: "Available Tomorrow",
    specialties: ["Molecular Biology", "Genetics"],
    description: "Research scientist and experienced educator. Makes complex biological concepts easy.",
    isOnline: true,
    responseTime: "< 3 hours"
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    subject: "Economics",
    avatar: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviews: 178,
    price: 1035,
    location: "Kano",
    experience: "7 years",
    badges: ["CFA", "MBA"],
    availability: "Available Now",
    specialties: ["Microeconomics", "Macroeconomics"],
    description: "MBA with CFA certification. Combines theoretical knowledge with real-world expertise.",
    isOnline: true,
    responseTime: "< 1 hour"
  }
];

// Mock data - Page 2
const MOCK_TUTORS_PAGE2 = [
  {
    id: 7,
    name: "Dr. Rachel Kim",
    subject: "Psychology",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    rating: 4.92,
    reviews: 234,
    price: 1500,
    location: "Anambra",
    experience: "9 years",
    badges: ["PhD", "Licensed"],
    availability: "Available Now",
    specialties: ["Clinical Psychology", "Research"],
    description: "Licensed clinical psychologist with expertise in cognitive behavioral therapy and research.",
    isOnline: true,
    responseTime: "< 2 hours"
  },
  {
    id: 8,
    name: "Adeniran Omotosho",
    subject: "Spanish Literature",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    rating: 4.88,
    reviews: 167,
    price: 1000,
    location: "Ibadan",
    experience: "7 years",
    badges: ["Native Speaker", "PhD"],
    availability: "Available Today",
    specialties: ["Literature", "Grammar"],
    description: "Native Spanish speaker with PhD in Literature. Passionate about Hispanic culture and language.",
    isOnline: true,
    responseTime: "< 1 hour"
  },
  {
    id: 9,
    name: "Dr. Jennifer Liu",
    subject: "Engineering",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
    rating: 4.76,
    reviews: 198,
    price: 1500,
    location: "Lagos",
    experience: "11 years",
    badges: ["Stanford", "P.E."],
    availability: "Available Tomorrow",
    specialties: ["Mechanical", "Design"],
    description: "Professional engineer with Stanford PhD. Specializes in mechanical design and analysis.",
    isOnline: false,
    responseTime: "< 3 hours"
  },
  {
    id: 10,
    name: "Thomas Johnson",
    subject: "History",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
    rating: 4.83,
    reviews: 156,
    price: 1000,
    location: " Abuja",
    experience: "13 years",
    badges: ["Yale", "Published"],
    availability: "Available Now",
    specialties: ["American History", "World Wars"],
    description: "Yale historian and published author. Brings historical events to life through storytelling.",
    isOnline: true,
    responseTime: "< 2 hours"
  },
  {
    id: 11,
    name: "Dr. Sodeeq Akram",
    subject: "Statistics",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    rating: 4.94,
    reviews: 289,
    price: 100,
    location: "Akure",
    experience: "8 years",
    badges: ["PhD", "Data Science"],
    availability: "Available Now",
    specialties: ["Biostatistics", "Machine Learning"],
    description: "PhD statistician with expertise in biostatistics and machine learning applications.",
    isOnline: true,
    responseTime: "< 1 hour"
  },
  {
    id: 12,
    name: "Onitcha",
    subject: "Music Theory",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    rating: 4.71,
    reviews: 143,
    price: 1000,
    location: "Nashville, TN",
    experience: "15 years",
    badges: ["Berklee", "Composer"],
    availability: "Available Today",
    specialties: ["Composition", "Jazz Theory"],
    description: "Berklee graduate and professional composer. Expert in jazz theory and music composition.",
    isOnline: true,
    responseTime: "< 2 hours"
  }
];

// Optimized tutor card component with memoization
const TutorCard = React.memo(({ tutor, onFavorite, onBookLesson }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = useCallback((e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.(tutor.id, !isFavorited);
  }, [isFavorited, onFavorite, tutor.id]);

  const handleBookClick = useCallback((e) => {
    e.stopPropagation();
    onBookLesson?.(tutor.id);
  }, [onBookLesson, tutor.id]);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Photo Header - Same height as SuperProof */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
          <img
            src={tutor.avatar}
            alt={`#{tutor.name} - #{tutor.subject} tutor`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {tutor.isOnline && (
            <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Online
            </div>
          )}
        </div>
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200"
          aria-label="Add to favorites"
        >
          <Heart
            className={`w-5 h-5 transition-colors #{
              isFavorited ? 'fill-white text-white' : 'text-white hover:fill-white'
            }`}
          />
        </button>
      </div>

      {/* Header with tutor info */}
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
              {tutor.name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm text-gray-900">{tutor.rating}</span>
              <span className="text-xs text-gray-500">({tutor.reviews})</span>
            </div>
          </div>

          <p className="text-indigo-600 font-medium text-sm">{tutor.subject}</p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">{tutor.location}</span>
              <span className="sm:hidden">{tutor.location.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>{tutor.experience}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="px-4 pb-3">
        <div className="flex flex-wrap gap-1">
          {tutor.badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {tutor.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 bg-gray-50 border-t border-gray-100 rounded-b-2xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">#{tutor.price}</span>
            <span className="text-xs text-gray-500">per hour</span>
          </div>

          <button
            onClick={handleBookClick}
            className="px-3 sm:px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1 group"
          >
            <span className="hidden sm:inline">Book Lesson</span>
            <span className="sm:hidden">Book</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {tutor.price < 50 && (
          <div className="mt-2 text-center">
            <span className="text-xs text-green-600 font-medium">✨ First lesson 50% off!</span>
          </div>
        )}
      </div>
    </div>
  );
});

TutorCard.displayName = 'TutorCard';

// Main component
const TutorPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Get current tutors based on page
  const getCurrentTutors = () => {
    return currentPage === 1 ? MOCK_TUTORS_PAGE1 : MOCK_TUTORS_PAGE2;
  };

  const [tutors, setTutors] = useState(getCurrentTutors());

  // Handle load more with replacement
  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const nextPage = currentPage === 1 ? 2 : 1; // Toggle between page 1 and 2
    setCurrentPage(nextPage);
    setTutors(nextPage === 1 ? MOCK_TUTORS_PAGE1 : MOCK_TUTORS_PAGE2);
    setIsLoading(false);
  }, [currentPage]);

  // Memoized handlers for performance
  const handleFavorite = useCallback((tutorId, isFavorited) => {
    console.log(`Tutor #{tutorId} #{isFavorited ? 'added to' : 'removed from'} favorites`);
    // In real app: update favorites in state/API
  }, []);

  const handleBookLesson = useCallback((tutorId) => {
    console.log(`Booking lesson with tutor #{tutorId}`);
    // In real app: navigate to booking page or open modal
  }, []);

  // Memoized tutor cards for performance
  const tutorCards = useMemo(() =>
    tutors.map((tutor) => (
      <TutorCard
        key={tutor.id}
        tutor={tutor}
        onFavorite={handleFavorite}
        onBookLesson={handleBookLesson}
      />
    )), [tutors, handleFavorite, handleBookLesson]
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect <span className="text-indigo-600">Tutor</span>
          </h1>
          <p className="text-lg text-gray-600">
            <span className="text-indigo-600 font-bold">Connect</span> with expert tutors who are passionate about helping you succeed in your academic journey.
            {/* <span className="text-yellow-400 ml-2">★★★★★</span> */}
          </p>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            <span className="text-indigo-600 font-bold">Connect</span> with expert tutors who are passionate about helping you succeed in your academic journey.
          </p> */}
        </div>

        {/* Tutors Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {tutorCards}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-6 sm:px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </>
            ) : (
              <>
                {currentPage === 1 ? 'Load More Tutors' : 'Show Previous Tutors'}
                <ChevronRight className={`w-4 h-4 transition-transform #{currentPage === 2 ? 'rotate-180' : ''}`} />
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Page {currentPage} of 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorPage;