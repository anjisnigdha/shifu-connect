"use client";

import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Showcasing the quiet disruptors from the roots of India
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-lg">
              A documentary featuring the quiet disruptors from the remotest parts of India, creating a massive impact through AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/documentary"
                className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition duration-300"
              >
                Watch Trailer
              </Link>
              <Link 
                href="/screenings"
                className="px-8 py-3 text-lg font-medium text-white border-2 border-indigo-300 rounded-md hover:bg-indigo-800 transition duration-300"
              >
                Attend a Screening
              </Link>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center text-indigo-800 font-semibold text-xs">S</div>
                <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-purple-800 font-semibold text-xs">K</div>
                <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center text-pink-800 font-semibold text-xs">A</div>
                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-semibold text-xs">M</div>
              </div>
              <p className="ml-4 text-indigo-200 text-sm">
                <span className="font-medium text-white">100,000+</span> students already registered
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-indigo-200/20">
              {/* This would be a video or image in production */}
              <div className="w-full h-full bg-indigo-800 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-400 opacity-70 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-300 to-purple-500 opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 