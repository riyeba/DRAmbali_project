import React, { useState } from 'react';

const SubjectCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const allSubjects = [
    // Academic Subjects
    {
      title: "Business Studies",
      description: "Master business fundamentals with qualified tutors to improve understanding and achieve your career goals.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      alt: "Teacher helping student with business studies",
      category: "Academic"
    },
    {
      title: "IELTS Preparation",
      description: "Get quality help from experienced tutors who have excelled in IELTS and achieve your target score.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      alt: "Students studying for IELTS exam",
      category: "Language"
    },
    {
      title: "Literature in English",
      description: "Spark your literary creativity and improve your grades with an experienced Literature teacher.",
      image: "https://images.unsplash.com/photo-1716654716572-9f31d7f0f897?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Library with books for literature studies",
      category: "Academic"
    },
    {
      title: "Mathematics",
      description: "Build strong mathematical foundations from basic arithmetic to advanced calculus with expert tutors.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      alt: "Mathematical equations and formulas",
      category: "Academic"
    },
    {
      title: "Physics",
      description: "Understand the fundamental laws of nature and solve complex physics problems with experienced teachers.",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop",
      alt: "Physics laboratory equipment and experiments",
      category: "Science"
    },
    {
      title: "Chemistry",
      description: "Master chemical reactions, molecular structures, and laboratory techniques with qualified instructors.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
      alt: "Chemistry laboratory with test tubes and equipment",
      category: "Science"
    },
    {
      title: "Biology",
      description: "Explore life sciences from cellular biology to ecology with passionate biology educators.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      alt: "Microscope and biological specimens",
      category: "Science"
    },
    {
      title: "History",
      description: "Journey through world civilizations and historical events with knowledgeable history teachers.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      alt: "Ancient historical artifacts and books",
      category: "Academic"
    },
    {
      title: "Geography",
      description: "Study physical and human geography, climate patterns, and global systems with expert guidance.",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop",
      alt: "World map and geographical instruments",
      category: "Academic"
    },
    // Technology & Programming
    {
      title: "Machine Learning",
      description: "Learn AI and ML fundamentals from data science to neural networks with industry-experienced mentors.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      alt: "Machine learning algorithms and data visualization",
      category: "Technology"
    },
    {
      title: "Software Engineering",
      description: "Master software development practices, system design, and programming with professional developers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      alt: "Software engineer coding on computer",
      category: "Technology"
    },
    {
      title: "Data Science",
      description: "Learn data analysis, visualization, and statistical modeling to become a skilled data scientist.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      alt: "Data science charts and analytics",
      category: "Technology"
    },
    {
      title: "Python Programming",
      description: "Master Python programming from basics to advanced concepts including web development and automation.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      alt: "Python code on computer screen",
      category: "Technology"
    },
    {
      title: "JavaScript Development",
      description: "Learn modern JavaScript, ES6+, and popular frameworks like React, Node.js with expert developers.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
      alt: "JavaScript code and development environment",
      category: "Technology"
    },
    {
      title: "Web Development",
      description: "Build modern websites and web applications with HTML, CSS, JavaScript, and popular frameworks.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      alt: "Web developer working on responsive website",
      category: "Technology"
    },
    {
      title: "Cloud Computing",
      description: "Master AWS, Azure, and Google Cloud platforms with hands-on projects and certification preparation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      alt: "Cloud computing infrastructure and servers",
      category: "Technology"
    },
    {
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and cyber defense strategies with security professionals.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      alt: "Cybersecurity protection and digital locks",
      category: "Technology"
    },
    // Business & Professional Skills
    {
      title: "Digital Marketing",
      description: "Master online marketing strategies, SEO, social media, and analytics with industry experts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      alt: "Digital marketing analytics dashboard",
      category: "Business"
    },
    {
      title: "Project Management",
      description: "Learn Agile, Scrum, and traditional project management methodologies with certified professionals.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      alt: "Project management charts and planning",
      category: "Business"
    },
    {
      title: "Financial Analysis",
      description: "Master financial modeling, investment analysis, and corporate finance with industry experts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      alt: "Financial charts and analysis",
      category: "Business"
    },
    // Creative & Design
    {
      title: "Graphic Design",
      description: "Create stunning visual designs and master industry-standard tools with professional designers.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
      alt: "Graphic designer working on creative project",
      category: "Creative"
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly interfaces and experiences with modern design principles and tools.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      alt: "UI/UX design wireframes and prototypes",
      category: "Creative"
    },
    {
      title: "Photography",
      description: "Master photography techniques, composition, and photo editing with professional photographers.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      alt: "Professional camera and photography equipment",
      category: "Creative"
    }
  ];

  const totalPages = Math.ceil(allSubjects.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentSubjects = allSubjects.slice(startIndex, startIndex + coursesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const element = document.getElementById('available-subjects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (

    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* <div className="mb-12" id="available-subjects">
          <h2 className="text-3xl font-bold text-gray-900 border-b-3 border-blue-600 inline-block pb-3">
            Catalog
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Choose from academic subjects and professional skills courses</p>
        </div> */}
      {/* Stats */}
      <div className="mb-12">
        <p className="text-lg text-black">
          <span className="font-bold text-red-500">Choose</span> from academic subjects and professional skills courses
          <span className="text-yellow-400 ml-2">★★★★★</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentSubjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            tabIndex="0"
            role="button"
            aria-label={`Learn more about ${subject.title}`}
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={subject.image}
                alt={subject.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full uppercase tracking-wide">
                  {subject.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {subject.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed line-height-1.6">
                {subject.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center  justify-center mt-16 space-x-3">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`group px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${currentPage === 1
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 bg-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
            } flex items-center space-x-2`}
          aria-label="Previous page"
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${currentPage > 1 ? 'group-hover:-translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous</span>
        </button>

        {/* <div className="flex items-center space-x-2">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[48px] h-12 text-sm font-bold rounded-xl transition-all duration-300 transform hover:scale-110 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 bg-white shadow-md hover:shadow-lg'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div> */}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`group px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105'
            } flex items-center space-x-2 relative overflow-hidden`}
          aria-label="Next page"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 font-semibold">Next</span>
          <div className="relative z-10 flex items-center">
            <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
          </div>
        </button>
      </div>

      {/* Results Info */}
      {/* <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">
            Showing {startIndex + 1}-{Math.min(startIndex + coursesPerPage, allSubjects.length)} of {allSubjects.length} courses
          </p>
        </div> */}
    </div>

  );
};

export default SubjectCards;