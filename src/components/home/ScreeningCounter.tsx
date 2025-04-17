"use client"
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { MOCK_SCREENINGS } from '@/lib/data';

const ScreeningCounter = () => {
  const [screenings, setScreenings] = useState(MOCK_SCREENINGS.length);
  const [attendees, setAttendees] = useState(() => 
    MOCK_SCREENINGS.reduce((sum, screening) => sum + screening.attendees, 0)
  );
  const [cities, setCities] = useState(() => 
    new Set(MOCK_SCREENINGS.map(s => s.location)).size
  );
  
  // New state for the random values that cause hydration errors
  const [weeklyIncrease, setWeeklyIncrease] = useState(0);
  const [cityIncrease, setCityIncrease] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Set the random values only after component has mounted
  useEffect(() => {
    setIsClient(true);
    setWeeklyIncrease(Math.floor(Math.random() * 50) + 10);
    setCityIncrease(Math.floor(Math.random() * 3) + 1);
  }, []);
  
  // Simulates real-time updates for the prototype
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase counts for demo purposes
      if (Math.random() > 0.7) {
        setScreenings(prev => prev + 1);
        setAttendees(prev => prev + Math.floor(Math.random() * 30) + 10);
        
        if (Math.random() > 0.5) {
          setCities(prev => prev + 1);
        }
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Live Screening Counter
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Watch our impact grow in real-time as screenings happen across India and globally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="p-8 rounded-xl bg-gradient-to-br from-indigo-800 to-indigo-900 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-indigo-200">Screenings</h3>
              <div className="w-12 h-12 rounded-lg bg-indigo-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp start={0} end={screenings} duration={2} separator="," />
            </div>
            <p className="text-indigo-200">Total screenings across the world</p>
            <div className="mt-4 flex items-center text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Growing daily</span>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-xl bg-gradient-to-br from-purple-800 to-purple-900 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-purple-200">Attendees</h3>
              <div className="w-12 h-12 rounded-lg bg-purple-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp start={0} end={attendees} duration={2} separator="," />
            </div>
            <p className="text-purple-200">Students and supporters impacted</p>
            <div className="mt-4 flex items-center text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                {isClient ? `+${weeklyIncrease} this week` : '+0 this week'}
              </span>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-xl bg-gradient-to-br from-pink-800 to-pink-900 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-pink-200">Cities</h3>
              <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              <CountUp start={0} end={cities} duration={2} separator="," />
            </div>
            <p className="text-pink-200">Unique locations worldwide</p>
            <div className="mt-4 flex items-center text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                {isClient ? `+${cityIncrease} new cities` : '+0 new cities'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Live Updates Ticker */}
        <div className="mt-12 bg-gray-800 rounded-xl p-4 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center mx-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-gray-300">
                  {["New registration from Mumbai University", 
                    "Screening confirmed at IIT Delhi", 
                    "SaaS Accelerator added as partner", 
                    "50 students signed up from Kochi", 
                    "New international screening in Singapore"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreeningCounter; 