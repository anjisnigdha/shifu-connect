'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  location: string;
  persona: 'dreamer' | 'doer' | 'hustler';
  problem: string;
  tools: string;
  targetAudience: string;
  pitch: string;
};

const personaDescriptions = {
  dreamer: 'I have ideas but don\'t know how to start',
  doer: 'I\'m already building and need structure',
  hustler: 'I\'m selling locally and want to scale digitally or globally',
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const router = useRouter();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push('/dashboard');
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white font-display">
              Smart Discovery Engine
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Let's get to know you and your vision to provide personalized resources.
            </p>
            
            <div className="mt-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}>
                      {stepNumber}
                    </div>
                    <div className={`mt-2 text-xs ${
                      step >= stepNumber ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      Step {stepNumber}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Where are you from?
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        This helps us recommend local resources, mentors, and facilities.
                      </p>
                      <input
                        type="text"
                        id="location"
                        className="input"
                        placeholder="City, Country"
                        {...register('location', { required: true })}
                      />
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Please enter your location
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Are you a founder or a dreamer?
                      </label>
                      <div className="space-y-4">
                        {Object.entries(personaDescriptions).map(([value, description]) => (
                          <div key={value} className="flex items-center">
                            <input
                              id={value}
                              type="radio"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                              value={value}
                              {...register('persona', { required: true })}
                            />
                            <label
                              htmlFor={value}
                              className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              <span className="font-bold capitalize">{value}</span>: {description}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.persona && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Please select your persona
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label htmlFor="problem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        What problem do you want to solve?
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        We'll suggest similar entrepreneurs, content, and tools.
                      </p>
                      <textarea
                        id="problem"
                        rows={4}
                        className="input"
                        placeholder="Describe the problem you're tackling..."
                        {...register('problem', { required: true })}
                      />
                      {errors.problem && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Please describe the problem
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label htmlFor="tools" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        What tools and skills do you have?
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        We'll match these to available templates and starter kits.
                      </p>
                      <textarea
                        id="tools"
                        rows={4}
                        className="input"
                        placeholder="List your skills, tools, technologies..."
                        {...register('tools', { required: true })}
                      />
                      {errors.tools && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Please list your tools and skills
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Who are you building this for? Why does it matter?
                      </label>
                      <textarea
                        id="targetAudience"
                        rows={4}
                        className="input"
                        placeholder="Describe your target audience and why your solution matters to them..."
                        {...register('targetAudience', { required: true })}
                      />
                      {errors.targetAudience && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          Please describe your target audience
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your 30s to 1m pitch
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Record a short pitch to receive AI-generated or mentor tailored feedback.
                      </p>
                      
                      <div className="mt-4 flex flex-col items-center">
                        <button
                          type="button"
                          onClick={toggleRecording}
                          className={`rounded-full w-16 h-16 flex items-center justify-center ${
                            isRecording 
                              ? 'bg-red-600 hover:bg-red-700' 
                              : 'bg-primary-600 hover:bg-primary-700'
                          }`}
                        >
                          <span className={`${isRecording ? 'h-4 w-4 rounded-sm bg-white' : 'h-6 w-6 rounded-full border-2 border-white'}`}></span>
                        </button>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
                        </p>
                      </div>
                      
                      <textarea
                        id="pitch"
                        rows={4}
                        className="input mt-4"
                        placeholder="Or type your pitch here..."
                        {...register('pitch')}
                      />
                    </div>
                  </motion.div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      Previous
                    </button>
                  )}
                  {step < 6 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-primary ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary ml-auto"
                    >
                      Complete & Continue
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 