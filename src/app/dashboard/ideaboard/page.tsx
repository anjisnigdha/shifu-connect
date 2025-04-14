'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

type Idea = {
  id: number;
  title: string;
  description: string;
  marketSize: string;
  feasibilityScore: number;
  noveltyScore: number;
  overallScore: number;
  aiAnalysis: string;
  createdAt: string;
};

type IdeaFormInputs = {
  title: string;
  description: string;
  targetMarket: string;
  problemSolved: string;
  uniqueValue: string;
};

// Mock data
const mockIdeas: Idea[] = [
  {
    id: 1,
    title: 'Mobile App for Local Artisans',
    description: 'A platform connecting local artisans with customers seeking handmade products',
    marketSize: '$14.3B by 2028',
    feasibilityScore: 85,
    noveltyScore: 70,
    overallScore: 78,
    aiAnalysis: 'Strong potential in growing artisanal markets. Consider adding features for storytelling around products and creators to differentiate from larger marketplaces.',
    createdAt: '2023-04-12',
  },
  {
    id: 2,
    title: 'Community Composting Network',
    description: 'Decentralized composting system for urban neighborhoods to reduce waste',
    marketSize: '$5.6B by 2025',
    feasibilityScore: 65,
    noveltyScore: 90,
    overallScore: 72,
    aiAnalysis: 'Excellent environmental impact potential. Technology implementation may be complex. Consider starting with a pilot in one neighborhood to validate concept.',
    createdAt: '2023-04-05',
  },
];

export default function IdeaboardPage() {
  const [ideas, setIdeas] = useState<Idea[]>(mockIdeas);
  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IdeaFormInputs>();
  
  const onSubmit: SubmitHandler<IdeaFormInputs> = (data) => {
    setIsEvaluating(true);
    
    // Simulate AI evaluation
    setTimeout(() => {
      const newIdea: Idea = {
        id: ideas.length + 1,
        title: data.title,
        description: data.description,
        marketSize: '$8-12B by 2026',
        feasibilityScore: Math.floor(Math.random() * 30) + 60, // 60-90
        noveltyScore: Math.floor(Math.random() * 30) + 60, // 60-90
        overallScore: Math.floor(Math.random() * 30) + 60, // 60-90
        aiAnalysis: `This idea targets the ${data.targetMarket} market with a solution for ${data.problemSolved}. The unique value proposition of ${data.uniqueValue} is compelling. Consider focusing on go-to-market strategy and initial user acquisition.`,
        createdAt: new Date().toISOString().split('T')[0],
      };
      
      setIdeas([newIdea, ...ideas]);
      setSelectedIdea(newIdea);
      setShowNewIdeaForm(false);
      setIsEvaluating(false);
      reset();
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white font-display">
            Shifu Ideaboard
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Post, evaluate, and refine your top investable ideas
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            onClick={() => setShowNewIdeaForm(!showNewIdeaForm)}
            className="btn btn-primary"
          >
            {showNewIdeaForm ? 'Cancel' : 'Add New Idea'}
          </button>
        </div>
      </div>

      {showNewIdeaForm && (
        <motion.div 
          className="card"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add a New Idea</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Idea Title
              </label>
              <input
                id="title"
                type="text"
                className="input mt-1"
                placeholder="E.g., Mobile App for Local Artisans"
                {...register('title', { required: true })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">Title is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Brief Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="input mt-1"
                placeholder="Describe your idea in a few sentences..."
                {...register('description', { required: true })}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">Description is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="targetMarket" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Target Market
              </label>
              <input
                id="targetMarket"
                type="text"
                className="input mt-1"
                placeholder="Who are you building this for?"
                {...register('targetMarket', { required: true })}
              />
              {errors.targetMarket && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">Target market is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="problemSolved" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Problem Solved
              </label>
              <textarea
                id="problemSolved"
                rows={3}
                className="input mt-1"
                placeholder="What problem does your idea solve?"
                {...register('problemSolved', { required: true })}
              />
              {errors.problemSolved && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">Problem description is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="uniqueValue" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Unique Value Proposition
              </label>
              <textarea
                id="uniqueValue"
                rows={3}
                className="input mt-1"
                placeholder="What makes your solution unique or better than alternatives?"
                {...register('uniqueValue', { required: true })}
              />
              {errors.uniqueValue && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">Unique value proposition is required</p>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isEvaluating}
              >
                {isEvaluating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Evaluating Idea...
                  </span>
                ) : 'Evaluate Idea'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Ideas List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Ideas</h3>
          
          {ideas.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-400">No ideas yet. Add your first idea to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {ideas.map((idea) => (
                <div 
                  key={idea.id}
                  className={`cursor-pointer rounded-lg p-4 transition-all ${
                    selectedIdea?.id === idea.id 
                      ? 'bg-primary-50 border border-primary-200 dark:bg-gray-700 dark:border-primary-800' 
                      : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedIdea(idea)}
                >
                  <h4 className="text-md font-medium text-gray-900 dark:text-white">{idea.title}</h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {idea.description}
                  </p>
                  <div className="mt-2 flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">
                      Added: {idea.createdAt}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                      Score: {idea.overallScore}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Idea Evaluation */}
        <div className="lg:col-span-2">
          {selectedIdea ? (
            <div className="card">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{selectedIdea.title}</h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  Overall: {selectedIdea.overallScore}%
                </span>
              </div>
              
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {selectedIdea.description}
              </p>
              
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
                  <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Market Size</dt>
                  <dd className="mt-1 text-xl font-semibold text-primary-600 dark:text-primary-400">
                    {selectedIdea.marketSize}
                  </dd>
                </div>
                
                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
                  <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Feasibility Score</dt>
                  <dd className="mt-1 flex items-baseline justify-between">
                    <div className="flex items-baseline text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedIdea.feasibilityScore}%
                    </div>
                    <div 
                      className={`h-1.5 w-16 rounded-full ${
                        selectedIdea.feasibilityScore >= 80 ? 'bg-green-500' :
                        selectedIdea.feasibilityScore >= 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                    ></div>
                  </dd>
                </div>
                
                <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 dark:bg-gray-700">
                  <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-300">Novelty Score</dt>
                  <dd className="mt-1 flex items-baseline justify-between">
                    <div className="flex items-baseline text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedIdea.noveltyScore}%
                    </div>
                    <div 
                      className={`h-1.5 w-16 rounded-full ${
                        selectedIdea.noveltyScore >= 80 ? 'bg-green-500' :
                        selectedIdea.noveltyScore >= 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                    ></div>
                  </dd>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Analysis</h4>
                <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {selectedIdea.aiAnalysis}
                </div>
              </div>
              
              <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="btn btn-primary">
                  Create Roadmap
                </button>
                <button className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                  Refine Idea
                </button>
                <button className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                  Find Similar Platforms
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No idea selected</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Select an idea from the list or create a new one to see its evaluation.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewIdeaForm(true)}
                  className="btn btn-primary"
                >
                  Add New Idea
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 