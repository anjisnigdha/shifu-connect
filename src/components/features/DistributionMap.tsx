"use client"

import { useState, useEffect, useRef } from 'react';
import { MOCK_SCREENINGS } from '@/lib/data';

const DistributionMap = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showGlobal, setShowGlobal] = useState<boolean>(false);
  const [activeScreening, setActiveScreening] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // Set isClient to true when the component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter screenings based on the active filter
  const filteredScreenings = MOCK_SCREENINGS.filter(screening => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'college' && screening.hostType === 'college') return true;
    if (activeFilter === 'company' && screening.hostType === 'company') return true;
    if (activeFilter === 'accelerator' && screening.hostType === 'accelerator') return true;
    if (activeFilter === 'international' && screening.hostType === 'international') return showGlobal;
    return false;
  });

  // India or World focus
  const focusedScreenings = showGlobal 
    ? filteredScreenings 
    : filteredScreenings.filter(s => s.country === 'India');

  // Mock implementation for the map points (would use Leaflet or Mapbox in production)
  useEffect(() => {
    // In a real implementation, this would initialize and update the map
    console.log('Map would update with:', focusedScreenings);
  }, [focusedScreenings, showGlobal]);

  // Get statistics
  const totalAttendees = focusedScreenings.reduce((sum, screening) => sum + screening.attendees, 0);
  const uniqueLocations = new Set(focusedScreenings.map(s => s.location)).size;

  // Use deterministic positions instead of random ones
  // We assign positions based on screening ID to ensure they're consistent
  const getPositionForScreening = (screeningId: string, index: number) => {
    // Create a deterministic pattern based on the index
    // This ensures server and client render the same positions
    const positions = [
      { left: "28.5813%", top: "17.3873%" },
      { left: "74.0312%", top: "63.6112%" },
      { left: "15.4556%", top: "63.7308%" },
      { left: "20.4775%", top: "76.4419%" },
      { left: "45.6732%", top: "38.9123%" },
      { left: "65.9876%", top: "25.4521%" },
      { left: "33.7689%", top: "57.1234%" },
      { left: "80.1234%", top: "42.5678%" },
      { left: "50.4321%", top: "70.9876%" },
      { left: "12.3456%", top: "30.4567%" }
    ];
    
    // Use modulo to ensure we don't go out of bounds with the positions array
    const position = positions[index % positions.length];
    return position;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dynamic Distribution Map</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our massive distribution plan across India and globally
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Screenings
          </button>
          <button 
            onClick={() => setActiveFilter('college')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'college' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Colleges
          </button>
          <button 
            onClick={() => setActiveFilter('company')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'company' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Companies
          </button>
          <button 
            onClick={() => setActiveFilter('accelerator')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'accelerator' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Accelerators
          </button>
        </div>

        <div className="flex justify-end mb-4">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => setShowGlobal(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !showGlobal ? 'bg-indigo-600 text-white' : 'text-gray-700'
              }`}
            >
              India
            </button>
            <button
              onClick={() => setShowGlobal(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                showGlobal ? 'bg-indigo-600 text-white' : 'text-gray-700'
              }`}
            >
              Global
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-indigo-50 rounded-xl overflow-hidden shadow-lg">
          <div className="h-[500px] relative" ref={mapRef}>
            {/* This would be replaced with an actual map in production */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100">
              {/* Fake map background with grid */}
              <div className="h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            {/* Static map visualization for prototype */}
            <div className="absolute inset-0 p-6">
              {showGlobal ? (
                <div className="text-center text-2xl text-indigo-300 font-light py-24">
                  World Map Visualization
                  <p className="text-base text-indigo-400 mt-2">In production, this would be an interactive world map with screening locations</p>
                </div>
              ) : (
                <div className="text-center text-2xl text-indigo-300 font-light py-24">
                  India Map Visualization
                  <p className="text-base text-indigo-400 mt-2">In production, this would be an interactive India map with heatmap data</p>
                </div>
              )}

              {/* Sample map points - only render on client side to avoid hydration errors */}
              {isClient && focusedScreenings.map((screening, index) => {
                const position = getPositionForScreening(screening.id, index);
                
                return (
                  <div
                    key={screening.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                      activeScreening === screening.id ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      left: position.left,
                      top: position.top,
                    }}
                    onMouseEnter={() => setActiveScreening(screening.id)}
                    onMouseLeave={() => setActiveScreening(null)}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full ${
                        screening.hostType === 'college' ? 'bg-blue-500' :
                        screening.hostType === 'company' ? 'bg-green-500' :
                        screening.hostType === 'accelerator' ? 'bg-yellow-500' :
                        'bg-purple-500'
                      }`}
                    />
                    
                    {/* Tooltip */}
                    {activeScreening === screening.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white shadow-lg rounded-md p-3 text-sm z-10">
                        <div className="font-semibold text-gray-900">{screening.location}</div>
                        <div className="text-gray-600">{screening.host}</div>
                        <div className="text-gray-600">Attendees: {screening.attendees}</div>
                        <div className="text-gray-500 text-xs">{screening.date}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-gray-900">{focusedScreenings.length}</div>
                <div className="text-sm text-gray-500">Total Screenings</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{uniqueLocations}</div>
                <div className="text-sm text-gray-500">Unique Locations</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{totalAttendees.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Total Attendees</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300">
            Become a Screening Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default DistributionMap; 