import React, { useState } from 'react';
import City from './HomePageALL/CityPage';

import SearchBar from './HomePageALL/SearchBar';
import SubjectBook from './HomePageALL/Subject';
import SubjectCards from './HomePageALL/SubjectCard';
import TutorPage from './HomePageALL/Tutor';
import TestimonialsSection from './HomePageALL/Testimony';
import TutorCTASection from './HomePageALL/BecomeTutor';


const LearnSphere = () => {






  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">
            Find Your Perfect Learning Experience
          </h1>

          {/* Search Bar */}

          <SearchBar />



          {/* Subject Categories */}




          {/* Subject Categories */}
          <div className="mb-8 sm:mb-12">
            <SubjectBook />
          </div>


          <div className='mt-[-19rem]'>
            {/* Stats */}
            <div className="mb-8 sm:mb-12">
              <SubjectCards />
            </div>

            {/* Tutor Cards */}
            <div className="mb-8 sm:mb-12">
              <TutorPage />
            </div>

            {/* Testimonials Section - The Perfect Match */}
            <div className="mb-8 sm:mb-12">
              <TestimonialsSection />
            </div>

            {/* Become a Tutor CTA Section */}
            <div className="mb-8 sm:mb-12">
              <TutorCTASection />
            </div>





            {/* City Section */}
            <City />

          </div>





        </div>
      </section>
    </div>
  );
};

export default LearnSphere;