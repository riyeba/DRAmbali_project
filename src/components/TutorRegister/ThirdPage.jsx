import React, { useState } from 'react';
import { BookOpen, Lightbulb, Users, Clock, ArrowLeft, Check } from 'lucide-react';

export default function ThirdPage() {
  const [lessonDescription, setLessonDescription] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setLessonDescription(text);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
     
     

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mt-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {/* Teaching Excellence Guide */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Teaching Excellence Guide</h2>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Share your unique teaching philosophy and methodology to attract the right students for your expertise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">Teaching methodology and approach</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">Session structure and duration</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">Professional background and credentials</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">Target student demographics and goals</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-1">Privacy Reminder</h4>
                      <p className="text-amber-700 text-sm">
                        All communication will be handled through our secure platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 className="font-semibold text-gray-900">Lesson Setup Progress</h3>
                <span className="text-sm text-gray-500">Step 2 of 4</span>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-1/4 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-1/4 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-1/4 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-1/4 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lesson Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">About Your Lessons</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Minimum 40 words required
              </p>
              
              <div className="relative">
                <textarea
                  value={lessonDescription}
                  onChange={handleTextChange}
                  placeholder="Describe your teaching approach, what makes your lessons unique, and what students can expect to learn..."
                  className="w-full h-40 px-4 py-3 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {wordCount}/40 words
                </div>
              </div>
              
              {wordCount >= 40 && (
                <div className="flex items-center space-x-2 mt-3 text-green-600">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Minimum word count reached</span>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Session Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Duration</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">60 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Format</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1-on-1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Level</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">All Levels</span>
                </div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  wordCount >= 40 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={wordCount < 40}
              >
                Continue to Next Step
              </button>
              <button className="w-full py-3 px-4 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}