import React, { useState } from 'react';
import City from './CityPage';
import SubjectsCarousel from './Subject';
 import { Search } from 'lucide-react';
import SubjectScroller from './Subject';
import SearchBar from './SearchBar';


const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tutorType, setTutorType] = useState('near-me');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const subjects = [
    { name: 'Mathematics', icon: '📊', class: 'bg-blue-500' },
    { name: 'English', icon: '📚', class: 'bg-green-500' },
    { name: 'Physics', icon: '⚛️', class: 'bg-purple-500' },
    { name: 'Singing', icon: '🎤', class: 'bg-pink-500' },
    { name: 'Japanese', icon: '🗾', class: 'bg-red-500' },
    { name: 'Guitar', icon: '🎸', class: 'bg-yellow-500' },
    { name: 'Spanish', icon: '🇪🇸', class: 'bg-orange-500' },
    { name: 'French', icon: '🇫🇷', class: 'bg-blue-600' },
    { name: 'Violin', icon: '🎻', class: 'bg-indigo-500' },
    { name: 'Soccer', icon: '⚽', class: 'bg-green-600' }
  ];

  const tutors = [
    {
      name: 'Alex',
      subject: 'Physics (Bsc in Russ & Physics)',
      rating: 5.0,
      reviews: 101,
      description: 'Academic tutoring - Struggling with complex topics, formulas...',
      price: '$25/hr',
      badge: 'Superstar',
      img: '👨‍🏫'
    },
    {
      name: 'Julien',
      subject: 'Cocktails (Bsc in Russ & online)',
      rating: 5.0,
      reviews: 101,
      description: 'Guitar - Guitar lessons - mixed, teaching, evening cocktail, wine...',
      price: '$35/hr',
      badge: null,
      img: '👨‍🍳'
    },
    {
      name: 'Jhon',
      subject: 'Mathematics (Graduate)',
      rating: 5.0,
      reviews: 174,
      description: 'Maths - Achieved maths teacher - 18+ years, passionate about...',
      price: '$35/hr',
      badge: 'Superstar',
      img: '👨‍🏫'
    },
    {
      name: 'Aurora',
      subject: 'Personal Training (Bsc in Russ & online)',
      rating: 4.9,
      reviews: 18,
      description: 'Personal Training - International fitness coach offering strength...',
      price: '$40/hr',
      badge: 'Ambassador',
      img: '👩‍💼'
    },
    {
      name: 'Imran',
      subject: 'English - Experience english tutor (New...',
      rating: 5.0,
      reviews: 143,
      description: 'English - Experience english tutor | New been teaching english primarily...',
      price: '$40/hr',
      badge: 'Ambassador',
      img: '👨‍🏫'
    },
    {
      name: 'Kass',
      subject: 'Piano (Bsc in Russ & fluency)',
      rating: 5.0,
      reviews: 176,
      description: 'Piano - Accomplished pianist gives piano lessons at home in...',
      price: '$40/hr',
      badge: 'Super tutor',
      img: '👩‍🏫'
    }
  ];

  const handleSearch = () => {
    if (searchValue.trim()) {
      alert(`Searching for "${searchValue}" tutors ${tutorType === 'near-me' ? 'near you' : 'online'}!`);
    } else {
      alert('Please enter a subject to search for!');
    }
  };

  const selectSubject = (subject) => {
    setSearchValue(subject);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">
            Find Your Perfect Learning Experience
          </h1>
          
          {/* Search Bar */}
        
         

<SearchBar/>

          {/* Subject Categories */}
          
         
          <div className='item-center gap-8 mb-16'> <SubjectScroller /></div>

          {/* Stats */}
          <div className="mb-12">
            <p className="text-lg text-gray-600">
              <span className="font-bold text-red-500">33 million</span> evaluated private tutors 
              <span className="text-yellow-400 ml-2">★★★★★</span>
            </p>
          </div>

          {/* Tutor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {tutors.map((tutor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-4xl">{tutor.img}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-white text-xl">♡</span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-white font-bold text-lg">{tutor.name}</h3>
                    <p className="text-white text-sm opacity-90">{tutor.subject}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{tutor.rating}</span>
                    <span className="text-gray-500 text-sm">({tutor.reviews} reviews)</span>
                    {tutor.badge && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-auto">
                        {tutor.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutor.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{tutor.price}</span>
                    <span className="text-red-500 text-sm">+ 1st lesson free</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section - The Perfect Match */}
          <div className="bg-white py-16 px-4 -mx-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-8">
                {/* Left Side - The Perfect Match */}
                <div className="flex-shrink-0 w-96">
                  <div className="flex text-yellow-400 text-2xl mb-6">
                    {'★'.repeat(5)}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">The Perfect Match</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    More than a million students have<br />
                    given a score of <strong>5 stars to their tutor</strong>
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <span className="text-gray-400 text-xl">←</span>
                    </button>
                    <button className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <span className="text-gray-800 text-xl">→</span>
                    </button>
                  </div>
                </div>

                {/* Right Side - Testimonial Cards */}
                <div className="flex-1 overflow-hidden">
                  <div className="flex gap-6">
                    {/* Rida Testimonial */}
                    <div className="bg-yellow-200 rounded-2xl p-8 min-w-[380px] flex-shrink-0">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                          <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-xl">Rida</h3>
                          <p className="text-gray-600 text-sm">English tutor</p>
                        </div>
                      </div>
                      <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        My daughter feels comfortable with rida. She learns and gives my daughter tips on learning skills. She allows a space for my daughter to speak freely
                      </p>
                      <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-800">Atu</span>
                        <div className="flex text-yellow-400 text-sm">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>

                    {/* João Testimonial */}
                    <div className="bg-green-200 rounded-2xl p-8 min-w-[380px] flex-shrink-0">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600 p-1">
                          <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">J</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-xl">João</h3>
                          <p className="text-gray-600 text-sm">Basic computer tutor</p>
                        </div>
                      </div>
                      <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Luis is highly intuitive and adaptable in catering to exactly what you need based on your requirements to learn a particular text or module which for my son was Software Engineering. Luis is one of a kind! He is warm and comes with
                      </p>
                      <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-800">Tam</span>
                        <div className="flex text-yellow-400 text-sm">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>

                    {/* Additional cards for scrolling effect */}
                    <div className="bg-yellow-200 rounded-2xl p-8 min-w-[380px] flex-shrink-0">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                          <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">M</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-xl">Matteo</h3>
                          <p className="text-gray-600 text-sm">Video montage tutor</p>
                        </div>
                      </div>
                      <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Great teacher. Highly recommend. Proper professional.
                      </p>
                      <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-800">Otto</span>
                        <div className="flex text-yellow-400 text-sm">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Become a Tutor CTA Section */}
          <div className="py-16 px-4 -mx-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-100 to-pink-100 min-h-[400px]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-20 h-20 border-2 border-orange-300 rounded-full"></div>
                  <div className="absolute top-16 right-16 w-12 h-12 bg-pink-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-16 w-8 h-8 bg-orange-300 rounded-full"></div>
                </div>
                
                <div className="flex items-center h-full">
                  {/* Left side - Image representation */}
                  <div className="flex-1 relative p-8">
                    <div className="relative">
                      {/* Room elements */}
                      <div className="absolute top-0 left-0 w-16 h-24 bg-green-200 rounded-lg opacity-80"></div>
                      <div className="absolute top-8 left-20 w-6 h-16 bg-brown-600 rounded-full"></div>
                      <div className="absolute top-0 left-20 w-12 h-12 bg-black rounded-lg"></div>
                      
                      {/* Main figures */}
                      <div className="flex items-center justify-center space-x-8 mt-12">
                        {/* Tutor figure */}
                        <div className="relative">
                          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">👨‍🏫</span>
                          </div>
                          <div className="w-24 h-32 bg-blue-500 rounded-lg"></div>
                        </div>
                        
                        {/* Student figure */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                            <span className="text-xl">👩‍🎓</span>
                          </div>
                          <div className="w-20 h-28 bg-green-700 rounded-lg"></div>
                        </div>
                      </div>
                      
                      {/* Drums/Music equipment */}
                      <div className="absolute bottom-0 right-0 flex space-x-2">
                        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                      </div>
                      
                      {/* Guitar */}
                      <div className="absolute left-8 bottom-8 transform -rotate-12">
                        <div className="w-3 h-24 bg-brown-600 rounded-full"></div>
                        <div className="w-8 h-16 bg-black rounded-lg mt-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - CTA Content */}
                  <div className="flex-1 p-12">
                    <div className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl p-8 max-w-md">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                        You can become a great tutor too!
                      </h2>
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Share your knowledge, live off your passion and become your own boss
                      </p>
                      <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                        Find out more
                        <span className="text-xl">⭐</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* City Section */}
          <City/>







        </div>
      </section>
    </div>
  );
};

export default Home;