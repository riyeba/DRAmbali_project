import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      content: "This platform completely transformed how we approach learning. The personalized experience is exactly what we needed.",
      avatar: "SC",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Michael Rodriguez", 
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Finally, a solution that actually understands what learners need. The results speak for themselves.",
      avatar: "MR",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Emily Johnson",
      role: "Learning Director", 
      company: "EduTech Pro",
      content: "The most intuitive learning platform we've used. Our team was up and running in minutes.",
      avatar: "EJ",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            ⭐ Loved by early adopters
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            What our users are saying
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join the growing community of learners who are already seeing amazing results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="text-white font-bold text-xs sm:text-sm">{testimonial.avatar}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to join them?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Start your learning journey today and see why users love our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto bg-white text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base">
                Get Started Here
              </button>
              
            </div>
          </div>
        </div>

     
      
      </div>
    </div>
  );
};

export default TestimonialsSection;