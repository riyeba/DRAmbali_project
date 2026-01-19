import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

export default function SecondPage() {
  const [title, setTitle] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const isValid = wordCount >= 12;

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ">



      <div className="max-w-4xl mx-auto px-6 py-8 ">
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Left - Tips */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Writing Tips</h2>
              <p className="text-gray-600 mb-4">
                Your title should be clear and include at least 12 words with these details:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Subject you teach</li>
                <li>• Student level (beginner, advanced, etc.)</li>
                <li>• Your qualifications or experience</li>
                <li>• Location or teaching method</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800">Good Examples</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-green-700 bg-white p-3 rounded border">
                  "Experienced Math Teacher offers Algebra and Calculus tutoring for high school students in Sydney with 10 years classroom experience"
                </p>
                <p className="text-green-700 bg-white p-3 rounded border">
                  "Native French Speaker provides conversation and grammar lessons for all levels online with university linguistics degree"
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="font-semibold text-red-800">Avoid These</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-red-700">"Math tutor available"</p>
                <p className="text-red-700">"Good teacher"</p>
                <p className="text-red-700">"Help with homework"</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Create Your Listing Title
              </h1>
              <p className="text-gray-600 mb-6">
                Write a clear description that will attract students
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Title ({wordCount} words)
                  </label>
                  <textarea
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="write here...."
                    className="w-full p-4 border placeholder-red-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows="4"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  {isValid ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">Perfect! Your title looks great</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-orange-600">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">
                        {wordCount === 0 ? 'Start writing your title' : `Add ${15 - wordCount} more words`}
                      </span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${isValid ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                    style={{ width: `${Math.min((wordCount / 12) * 100, 100)}%` }}
                  />
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-gray-500">Step 1 of 5</span>
                  <button
                    disabled={!isValid}
                    className={`px-6 py-2 rounded-lg font-medium ${isValid
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    <Link to={"/third"}>Continue</Link >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}