"use client"

import { useState } from 'react';
import { QUIZ_RESULTS } from '@/lib/data';
import { QuizResult, AISuperpower } from '@/types';
import Link from 'next/link';

type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    superpower: AISuperpower;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "When starting a new AI project, what excites you the most?",
    options: [
      { text: "Designing intuitive interfaces that make AI accessible to everyone", superpower: "Designer" },
      { text: "Writing code and integrating AI models into working applications", superpower: "Builder" },
      { text: "Exploring new algorithms and finding novel applications", superpower: "Researcher" },
      { text: "Identifying market opportunities and scaling the solution", superpower: "Entrepreneur" }
    ]
  },
  {
    id: 2,
    text: "What's your approach to solving complex problems?",
    options: [
      { text: "Break it down into smaller parts and methodically code solutions", superpower: "Builder" },
      { text: "Look for patterns and conduct experiments to uncover insights", superpower: "Researcher" },
      { text: "Focus on the user experience and design an intuitive solution", superpower: "Designer" },
      { text: "Identify the core value proposition and build a strategy around it", superpower: "Entrepreneur" }
    ]
  },
  {
    id: 3,
    text: "In a team setting, which role do you naturally gravitate towards?",
    options: [
      { text: "The visionary who sees market potential and drives the project forward", superpower: "Entrepreneur" },
      { text: "The technical architect who implements the core functionality", superpower: "Builder" },
      { text: "The UX specialist who ensures the solution works for real people", superpower: "Designer" },
      { text: "The analytical thinker who dives deep into data and models", superpower: "Researcher" }
    ]
  },
  {
    id: 4,
    text: "Which of these AI applications would you be most passionate about creating?",
    options: [
      { text: "A breakthrough language model with capabilities not seen before", superpower: "Researcher" },
      { text: "A profitable AI startup that solves a real-world problem", superpower: "Entrepreneur" },
      { text: "An AI-powered application with clean, efficient code and architecture", superpower: "Builder" },
      { text: "An AI system with an intuitive interface that anyone can use", superpower: "Designer" }
    ]
  }
];

const SuperpowerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<AISuperpower[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  
  const handleAnswer = (superpower: AISuperpower) => {
    const newAnswers = [...answers, superpower];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate the most frequently selected superpower
      const superpowerCounts: Record<AISuperpower, number> = {
        Builder: 0,
        Designer: 0,
        Researcher: 0,
        Entrepreneur: 0
      };
      
      newAnswers.forEach(answer => {
        superpowerCounts[answer]++;
      });
      
      // Find the superpower with the highest count
      let maxCount = 0;
      let dominantSuperpower: AISuperpower = 'Builder'; // Default
      
      Object.entries(superpowerCounts).forEach(([superpower, count]) => {
        if (count > maxCount) {
          maxCount = count;
          dominantSuperpower = superpower as AISuperpower;
        }
      });
      
      // Set the result
      setResult(QUIZ_RESULTS[dominantSuperpower]);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };
  
  const QuestionComponent = () => (
    <div className="p-8">
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div 
          className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>
      
      <div
        key={currentQuestion}
        className="question-container"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {questions[currentQuestion].text}
        </h3>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.superpower)}
              className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition duration-200"
            >
              <span className="inline-block mr-3 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-center leading-6">
                {String.fromCharCode(65 + index)}
              </span>
              {option.text}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
  
  const ResultComponent = () => {
    if (!result) return null;
    
    return (
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your AI Superpower: {result.superpower}
          </h3>
          <p className="text-gray-600">
            {result.description}
          </p>
        </div>
        
        <div className="border-t border-b border-gray-200 py-6 my-6">
          <div className="text-lg font-semibold text-gray-900 mb-2">
            You match with founder: {result.matchedFounder}
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-indigo-200 rounded-full mr-4 flex-shrink-0" />
            <p className="text-gray-600">
              {result.founderStory}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition duration-300"
          >
            Retake Quiz
          </button>
          <Link
            href="/screenings"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300"
          >
            Attend a Screening
          </Link>
        </div>
        
        <div className="mt-6 text-center">
          <button className="inline-flex items-center text-indigo-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-9a1 1 0 11-2 0V9H7a1 1 0 010-2h4V7a1 1 0 112 0v6z" clipRule="evenodd" />
            </svg>
            Share Your Results
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your AI Superpower
          </h2>
          <p className="text-xl text-gray-600">
            Discover which AI career path aligns with your natural talents and interests
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {!result ? <QuestionComponent /> : <ResultComponent />}
        </div>
      </div>
    </div>
  );
};

export default SuperpowerQuiz; 