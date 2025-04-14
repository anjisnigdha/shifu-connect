'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const roadmapStages = [
  {
    id: 'idea_validation',
    name: 'Idea Validation',
    description: 'Validate your idea through research, interviews, and experiments.',
    tasks: [
      { id: 1, name: 'Research existing solutions', completed: true },
      { id: 2, name: 'Conduct 5 customer interviews', completed: true },
      { id: 3, name: 'Create problem statement canvas', completed: false },
      { id: 4, name: 'Build a landing page for testing', completed: false },
    ],
    progress: 50,
  },
  {
    id: 'customer_discovery',
    name: 'Customer Discovery',
    description: 'Deeply understand your customers through research and testing.',
    tasks: [
      { id: 1, name: 'Create customer persona', completed: false },
      { id: 2, name: 'Map customer journey', completed: false },
      { id: 3, name: 'Identify pain points', completed: false },
      { id: 4, name: 'Conduct solution validation interviews', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'feature_registry',
    name: 'Feature Registry',
    description: 'Define and prioritize features for your minimum viable product.',
    tasks: [
      { id: 1, name: 'List all feature ideas', completed: false },
      { id: 2, name: 'Prioritize using MoSCoW method', completed: false },
      { id: 3, name: 'Create user stories', completed: false },
      { id: 4, name: 'Develop features roadmap', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'monetization',
    name: 'Monetization Features',
    description: 'Develop your revenue model and pricing strategy.',
    tasks: [
      { id: 1, name: 'Research competitor pricing', completed: false },
      { id: 2, name: 'Define revenue streams', completed: false },
      { id: 3, name: 'Create pricing structure', completed: false },
      { id: 4, name: 'Test pricing with potential customers', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'mvp',
    name: 'MVP',
    description: 'Build and launch your Minimum Viable Product.',
    tasks: [
      { id: 1, name: 'Design wireframes', completed: false },
      { id: 2, name: 'Develop prototype', completed: false },
      { id: 3, name: 'Internal testing', completed: false },
      { id: 4, name: 'User acceptance testing', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'first_30',
    name: 'First 30 Days',
    description: 'Execute your launch plan and gather initial feedback.',
    tasks: [
      { id: 1, name: 'Create launch plan', completed: false },
      { id: 2, name: 'Prepare marketing assets', completed: false },
      { id: 3, name: 'Develop user onboarding process', completed: false },
      { id: 4, name: 'Set up analytics and feedback mechanisms', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'launch_learn',
    name: 'Launch & Learn',
    description: 'Launch your product and iterate based on user feedback.',
    tasks: [
      { id: 1, name: 'Official product launch', completed: false },
      { id: 2, name: 'Collect and analyze user feedback', completed: false },
      { id: 3, name: 'Implement critical fixes', completed: false },
      { id: 4, name: 'Document lessons learned', completed: false },
    ],
    progress: 0,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Grow your user base and expand your product features.',
    tasks: [
      { id: 1, name: 'Develop scaling strategy', completed: false },
      { id: 2, name: 'Secure funding or resources for growth', completed: false },
      { id: 3, name: 'Expand team or partnerships', completed: false },
      { id: 4, name: 'Implement advanced features', completed: false },
    ],
    progress: 0,
  },
];

export default function RoadmapPage() {
  const [activeStage, setActiveStage] = useState(roadmapStages[0]);
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(null);

  const handleStageClick = (stage: typeof roadmapStages[0]) => {
    setActiveStage(stage);
    setExpandedTaskIndex(null);
  };

  const toggleTask = (taskId: number) => {
    // In a real app, this would update the task completion status in a database
    console.log(`Toggled task ${taskId} in stage ${activeStage.id}`);
  };

  const handleTaskClick = (index: number) => {
    setExpandedTaskIndex(expandedTaskIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white font-display">
            Build Roadmap
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Visualize your journey from idea to launch with customized milestones.
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="btn btn-primary"
          >
            Save Progress
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Stages Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Roadmap Stages</h3>
          
          <div className="space-y-2">
            {roadmapStages.map((stage) => (
              <div
                key={stage.id}
                className={`cursor-pointer rounded-lg p-4 transition-all ${
                  activeStage.id === stage.id
                    ? 'bg-primary-50 border border-primary-200 dark:bg-gray-700 dark:border-primary-800'
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleStageClick(stage)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{stage.name}</h4>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      stage.progress === 100
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : stage.progress > 0
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {stage.progress}%
                  </span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
                  <div
                    className="h-full bg-primary-600 rounded-full"
                    style={{ width: `${stage.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Details */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeStage.id}
            className="card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{activeStage.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {activeStage.description}
                </p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  activeStage.progress === 100
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : activeStage.progress > 0
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {activeStage.progress}% Complete
              </span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tasks</h4>
              <ul className="space-y-3">
                {activeStage.tasks.map((task, index) => (
                  <li key={task.id}>
                    <div
                      className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"
                    >
                      <div 
                        className="p-4 flex items-start cursor-pointer"
                        onClick={() => handleTaskClick(index)}
                      >
                        <div className="flex items-center h-5">
                          <input
                            id={`task-${task.id}`}
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor={`task-${task.id}`}
                            className={`font-medium ${
                              task.completed
                                ? 'text-gray-500 line-through dark:text-gray-400'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {task.name}
                          </label>
                        </div>
                        <div className="ml-auto">
                          <svg
                            className={`h-5 w-5 text-gray-400 transform transition-transform ${
                              expandedTaskIndex === index ? 'rotate-180' : ''
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {expandedTaskIndex === index && (
                        <div className="px-4 pb-4 pt-1 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-600">
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Notes</h5>
                              <textarea
                                rows={2}
                                className="input text-sm"
                                placeholder="Add notes about this task..."
                              />
                            </div>
                            <div className="flex space-x-2">
                              <button className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 text-xs px-2 py-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                                Add Resources
                              </button>
                              <button className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 text-xs px-2 py-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                                Set Due Date
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Resources for this Stage</h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow transition-all dark:bg-gray-700 dark:border-gray-600">
                  <h5 className="font-medium text-gray-900 dark:text-white">Founder's Guide</h5>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Step-by-step instructions for {activeStage.name.toLowerCase()}</p>
                  <button className="mt-2 text-xs text-primary-600 hover:text-primary-700 flex items-center dark:text-primary-400 dark:hover:text-primary-300">
                    View Guide
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <div className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow transition-all dark:bg-gray-700 dark:border-gray-600">
                  <h5 className="font-medium text-gray-900 dark:text-white">Templates</h5>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Useful templates and documents for this stage</p>
                  <button className="mt-2 text-xs text-primary-600 hover:text-primary-700 flex items-center dark:text-primary-400 dark:hover:text-primary-300">
                    Browse Templates
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                disabled={roadmapStages.indexOf(activeStage) === 0}
                onClick={() => {
                  const currentIndex = roadmapStages.indexOf(activeStage);
                  if (currentIndex > 0) {
                    handleStageClick(roadmapStages[currentIndex - 1]);
                  }
                }}
              >
                Previous Stage
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={roadmapStages.indexOf(activeStage) === roadmapStages.length - 1}
                onClick={() => {
                  const currentIndex = roadmapStages.indexOf(activeStage);
                  if (currentIndex < roadmapStages.length - 1) {
                    handleStageClick(roadmapStages[currentIndex + 1]);
                  }
                }}
              >
                Next Stage
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 