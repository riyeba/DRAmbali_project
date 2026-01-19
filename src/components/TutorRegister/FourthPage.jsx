import React, { useState, useMemo, useCallback } from 'react';
import { User, Lock, Target, ArrowLeft, CheckCircle2, AlertCircle, Zap, TrendingUp } from 'lucide-react';

// Configuration constants for easy maintenance
const CONFIG = {
  WORD_REQUIREMENT: 40,
  STEPS: {
    TOTAL: 5,
    CURRENT: 3,
    LABELS: ['Basics', 'Skills', 'About', 'Schedule', 'Review'],
    MOBILE_LABELS: ['Basics', 'Skill', 'About', 'Sched', 'Rev']
  },
  FORM: {
    MIN_HEIGHT: 'h-48',
    SM_HEIGHT: 'sm:h-56', 
    LG_HEIGHT: 'lg:h-64',
    PLACEHOLDER: "I'm passionate about teaching because... My experience includes... What sets me apart is... Students appreciate my approach to..."
  }
};

// Reusable components for better maintainability
const ProgressBar = ({ current, total, labels, mobileLabels }) => {
  const steps = Array.from({ length: total }, (_, i) => ({
    index: i,
    isComplete: i < current - 1,
    isCurrent: i === current - 1,
    isPending: i >= current
  }));

  return (
    <div className="bg-white shadow-sm border border-gray-200">
     
    </div>
  );
};

const GuidelineStep = ({ number, title, description, colorScheme = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="flex space-x-3">
      <div className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClasses[colorScheme]} rounded-sm flex items-center justify-center mt-0.5`}>
        <span className="text-xs font-bold">{number}</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ChecklistItem = ({ isComplete, label }) => (
  <div className="flex items-center space-x-3">
    {isComplete ? (
      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
    ) : (
      <div className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-300 rounded-full bg-white flex-shrink-0" />
    )}
    <span className={`text-xs sm:text-sm ${isComplete ? 'text-gray-700' : 'text-gray-500'}`}>
      {label}
    </span>
  </div>
);

const WordCounter = ({ current, required }) => {
  const isComplete = current >= required;
  const remaining = Math.max(0, required - current);

  return (
    <div className="flex items-center justify-between mb-4 sm:mb-6">
      <div className="text-xs sm:text-sm text-gray-600">
        {current} words
      </div>
      {isComplete ? (
        <div className="flex items-center space-x-2 text-green-600">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-medium">Requirement met</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2 text-orange-600">
          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-medium">{remaining} more needed</span>
        </div>
      )}
    </div>
  );
};

export default function AboutYouPage() {
  const [aboutText, setAboutText] = useState('');
  
  // Memoized word count calculation for performance
  const wordCount = useMemo(() => {
    return aboutText.trim() ? aboutText.trim().split(/\s+/).length : 0;
  }, [aboutText]);
  
  // Memoized completion status
  const isComplete = useMemo(() => {
    return wordCount >= CONFIG.WORD_REQUIREMENT;
  }, [wordCount]);
  
  // Optimized text change handler
  const handleTextChange = useCallback((e) => {
    setAboutText(e.target.value);
  }, []);

  // Button click handlers
  const handleContinue = useCallback(() => {
    if (isComplete) {
      console.log('Navigate to next step');
      // Navigation logic here
    }
  }, [isComplete]);

  const handleSaveDraft = useCallback(() => {
    console.log('Saving draft:', { aboutText, wordCount });
    // Save draft logic here
  }, [aboutText, wordCount]);

  // Guidelines data - easily configurable
  const guidelines = [
    {
      number: 1,
      title: "Establish Credibility",
      description: "Share your qualifications, experience, and what makes you an effective teacher",
      colorScheme: "blue"
    },
    {
      number: 2,
      title: "Show Your Approach", 
      description: "Describe your teaching methods and how you connect with students",
      colorScheme: "blue"
    },
    {
      number: 3,
      title: "Be Authentic",
      description: "Let your personality shine through while maintaining professionalism",
      colorScheme: "purple"
    },
    {
      number: 4,
      title: "Focus on Students",
      description: "Explain how you help students achieve their goals and overcome challenges", 
      colorScheme: "purple"
    }
  ];

  // Checklist items - easily configurable
  const checklistItems = [
    { label: "Basic Information", isComplete: true },
    { label: "Subject Expertise", isComplete: true },
    { label: "About Section", isComplete: isComplete },
    { label: "Availability", isComplete: false },
    { label: "Profile Review", isComplete: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 ">
        
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-1 sm:w-2 h-6 sm:h-8 bg-orange-500" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Your Professional Story</h1>
          </div>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Guidelines */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Main Guidelines Box */}
            <div className="bg-white border-l-4 border-teal-500 shadow-sm">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-sm flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Create Impact</h2>
                    <p className="text-sm sm:text-base text-gray-600">Your story builds trust and shows students why they should choose you</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    {guidelines.slice(0, 2).map((guide) => (
                      <GuidelineStep key={guide.number} {...guide} />
                    ))}
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {guidelines.slice(2, 4).map((guide) => (
                      <GuidelineStep key={guide.number} {...guide} />
                    ))}
                  </div>
                </div>

              
                
              </div>
            </div>

            {/* Progress Section */}
            <ProgressBar 
              current={CONFIG.STEPS.CURRENT}
              total={CONFIG.STEPS.TOTAL}
              labels={CONFIG.STEPS.LABELS}
              mobileLabels={CONFIG.STEPS.MOBILE_LABELS}
            />
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5">
            <div className="bg-white shadow-sm border border-gray-200 lg:sticky lg:top-8">
              <div className="border-b border-gray-200 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">About You</h3>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{CONFIG.WORD_REQUIREMENT}+ words</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <textarea
                    value={aboutText}
                    onChange={handleTextChange}
                    placeholder={CONFIG.FORM.PLACEHOLDER}
                    className={`w-full ${CONFIG.FORM.MIN_HEIGHT} ${CONFIG.FORM.SM_HEIGHT} ${CONFIG.FORM.LG_HEIGHT} px-3 sm:px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none placeholder-gray-400`}
                    aria-label="About you description"
                  />
                </div>

                <WordCounter current={wordCount} required={CONFIG.WORD_REQUIREMENT} />

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={handleContinue}
                    disabled={!isComplete}
                    className={`w-full py-2.5 sm:py-3 px-4 font-medium rounded-sm transition-all text-sm sm:text-base ${
                      isComplete
                        ? 'bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    aria-label="Continue to next step"
                  >
                    <span className="hidden sm:inline">Continue to Schedule Setup</span>
                    <span className="sm:hidden">Continue to Schedule</span>
                  </button>
                  
                  <button 
                    onClick={handleSaveDraft}
                    className="w-full py-2.5 sm:py-3 px-4 font-medium text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm sm:text-base focus:ring-2 focus:ring-gray-300"
                    aria-label="Save current progress"
                  >
                    <span className="hidden sm:inline">Save & Continue Later</span>
                    <span className="sm:hidden">Save Draft</span>
                  </button>
                </div>
              </div>

              {/* Profile Completion Sidebar */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}