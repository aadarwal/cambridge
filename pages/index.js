import { useState, useEffect } from 'react';
import Head from 'next/head';
import { MagnifyingGlassIcon, MoonIcon, SunIcon, MapIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { cambridgeData } from '../data/cambridgeData';
import clsx from 'clsx';

// Custom Emoji component to ensure proper rendering
const Emoji = ({ symbol, className = '' }) => (
  <span className={`emoji ${className}`} role="img" aria-label={symbol}>
    {symbol}
  </span>
);

export default function Home() {
  // Fixed default states
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMap, setShowMap] = useState(false);
  
  // Important: Use a simpler approach for hydration
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);
    
    // Check system preference for dark mode safely
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    } catch (e) {
      console.error('Error checking dark mode preference:', e);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredLocations = cambridgeData.locations.filter(location => {
    const matchesCategory = activeCategory === 'all' || location.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.error('Error scrolling to top:', e);
    }
  };

  const handleBackClick = () => {
    setSelectedLocation(null);
  };

  // Render a skeleton UI while on server or during hydration
  const loadingContent = (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Cambridge Explorer: Philosophy & Physics</title>
        <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
      </Head>
      <div className="p-4 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Cambridge Explorer</h1>
        <p>Loading...</p>
      </div>
    </div>
  );

  // Render the full UI only after client-side hydration
  if (!isClient) {
    return loadingContent;
  }

  return (
    <div className={clsx('min-h-screen transition-colors duration-300', {
      'dark bg-dark-900 text-white': darkMode,
      'bg-gray-100 text-gray-900': !darkMode
    })}>
      <Head>
        <title>Cambridge Explorer: Philosophy & Physics</title>
        <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
      </Head>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <header className="mb-6 rounded-lg bg-white dark:bg-dark-800 shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Cambridge Explorer</h1>
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowMap(!showMap)}
                className={clsx('p-2 rounded-full transition-colors duration-200', {
                  'bg-dark-800 text-white': darkMode && showMap,
                  'bg-gray-200 text-dark-900 hover:bg-gray-300': darkMode && !showMap,
                  'bg-primary-100 text-primary-800 hover:bg-primary-200': !darkMode && showMap,
                  'bg-white text-gray-800 hover:bg-gray-100 shadow': !darkMode && !showMap
                })}
                aria-label="Toggle map view"
              >
                <MapIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={toggleDarkMode}
                className={clsx('p-2 rounded-full transition-colors duration-200', {
                  'bg-dark-800 text-yellow-400 hover:bg-dark-700': darkMode,
                  'bg-white text-gray-800 hover:bg-gray-100 shadow': !darkMode
                })}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className={clsx('w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 transition duration-200', {
                'bg-dark-800 text-white placeholder-gray-400 border-gray-700 focus:ring-primary-600 focus:border-transparent': darkMode,
                'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-primary-500 focus:border-transparent shadow-sm': !darkMode
              })}
              placeholder="Search locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-thin">
            <button
              className={clsx('px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200', {
                'bg-primary-600 text-white hover:bg-primary-700': activeCategory === 'all',
                'bg-dark-800 text-gray-200 hover:bg-dark-700': darkMode && activeCategory !== 'all',
                'bg-white text-gray-800 hover:bg-gray-100 shadow-sm': !darkMode && activeCategory !== 'all'
              })}
              onClick={() => setActiveCategory('all')}
            >
              All Sites
            </button>
            {cambridgeData.categories.map(category => (
              <button
                key={category.id}
                className={clsx('px-3 py-1 rounded-full whitespace-nowrap flex items-center transition-colors duration-200', {
                  'text-white shadow-md': activeCategory === category.id,
                  'bg-dark-800 text-gray-200 hover:bg-dark-700': darkMode && activeCategory !== category.id,
                  'bg-white text-gray-800 hover:bg-gray-100 shadow-sm': !darkMode && activeCategory !== category.id,
                  [category.color]: activeCategory === category.id
                })}
                onClick={() => setActiveCategory(category.id)}
              >
                <Emoji symbol={category.emoji} className="mr-1" /> {category.title}
              </button>
            ))}
          </div>
        </header>

        <main>
          {selectedLocation ? (
            <div className={clsx('rounded-lg overflow-hidden mb-6 shadow-lg transition-all duration-300', {
              'bg-dark-800': darkMode,
              'bg-white': !darkMode
            })}>
              <div className={clsx('p-4 border-b', {
                'border-gray-700': darkMode,
                'border-gray-200': !darkMode
              })}>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold flex items-center">
                    <Emoji symbol={selectedLocation.emoji} className="mr-2 text-2xl" /> {selectedLocation.name}
                  </h2>
                  <button
                    className={clsx('px-3 py-1 rounded transition-colors duration-200', {
                      'bg-dark-900 text-gray-300 hover:bg-gray-700': darkMode,
                      'bg-gray-200 text-gray-700 hover:bg-gray-300': !darkMode
                    })}
                    onClick={handleBackClick}
                  >
                    Back
                  </button>
                </div>
                <p className="text-sm mt-1">
                  {selectedLocation.location} • {selectedLocation.access}
                </p>
              </div>
              
              <div className="p-4">
                <div className={clsx('mb-4 p-4 rounded-lg shadow-inner', {
                  'bg-dark-900': darkMode,
                  'bg-gray-100': !darkMode
                })}>
                  <h3 className="font-medium flex items-center text-lg">
                    <InformationCircleIcon className="h-5 w-5 mr-2 text-primary-600" />
                    About this Location
                  </h3>
                  <p className="mt-2">{selectedLocation.description}</p>
                  {selectedLocation.details.significance && (
                    <p className="mt-2 italic">{selectedLocation.details.significance}</p>
                  )}
                  {selectedLocation.details.hours && (
                    <p className="mt-2"><strong>Hours:</strong> {selectedLocation.details.hours}</p>
                  )}
                  {selectedLocation.details.duration && (
                    <p className="mt-2"><strong>Duration:</strong> {selectedLocation.details.duration}</p>
                  )}
                  {selectedLocation.details.best_time && (
                    <p className="mt-2"><strong>Best Time:</strong> {selectedLocation.details.best_time}</p>
                  )}
                </div>
                
                <h3 className="font-medium mb-3 text-lg border-b pb-2 border-gray-200 dark:border-gray-700">What to Know</h3>
                <ul className="space-y-2 pl-1">
                  {selectedLocation.details.notes.map((note, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-primary-600 flex-shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              {!showMap ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  {filteredLocations.map(location => (
                    <div
                      key={location.id}
                      className={clsx('rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-md transform hover:scale-102', {
                        'bg-dark-800 hover:bg-dark-700 hover:shadow-lg': darkMode,
                        'bg-white hover:shadow-xl': !darkMode
                      })}
                      onClick={() => handleLocationClick(location)}
                    >
                      <div className="p-4">
                        <div className="flex items-start">
                          <Emoji symbol={location.emoji} className="text-2xl mr-3 mt-1" />
                          <div>
                            <h2 className="font-medium">{location.name}</h2>
                            <p className={clsx('text-sm', {
                              'text-gray-300': darkMode,
                              'text-gray-600': !darkMode
                            })}>
                              {location.description}
                            </p>
                            <p className={clsx('text-xs mt-1', {
                              'text-gray-400': darkMode,
                              'text-gray-500': !darkMode
                            })}>
                              {location.location} • {location.access}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={clsx('rounded-lg overflow-hidden p-4 relative shadow-lg', {
                  'bg-dark-800': darkMode,
                  'bg-white': !darkMode
                })}>
                  <div className="h-[500px] relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0">
                      {/* Simplified Cambridge map */}
                      <svg width="100%" height="100%" viewBox="0 0 800 600" className={clsx('rounded-lg', {
                        'bg-dark-900': darkMode,
                        'bg-gray-100': !darkMode
                      })}>
                        {/* River Cam */}
                        <path d="M350,50 Q400,300 350,550" stroke="#6EA4D3" strokeWidth="20" fill="none" />
                        
                        {/* Main streets */}
                        <path d="M100,300 L700,300" stroke={darkMode ? "#444" : "#ccc"} strokeWidth="10" fill="none" />
                        <path d="M400,100 L400,500" stroke={darkMode ? "#444" : "#ccc"} strokeWidth="10" fill="none" />
                        <path d="M200,150 L600,450" stroke={darkMode ? "#333" : "#ddd"} strokeWidth="5" fill="none" />
                        <path d="M200,450 L600,150" stroke={darkMode ? "#333" : "#ddd"} strokeWidth="5" fill="none" />
                        
                        {/* Central Cambridge */}
                        <rect x="320" y="220" width="160" height="160" fill={darkMode ? "#555" : "#e2e8f0"} rx="5" />
                        <text x="400" y="300" fontSize="12" textAnchor="middle" fill={darkMode ? "#aaa" : "#666"} fontWeight="bold">
                          CITY CENTER
                        </text>
                        
                        {/* Location markers */}
                        {filteredLocations.map((location) => {
                          // Position markers based on location type
                          let x, y;
                          if (location.id === 'wittgenstein-room' || location.id === 'russell-rooms' || location.id === 'wren-library' || location.id === 'newton-apple-tree') {
                            // Trinity College area
                            x = 370 + (Math.random() * 30);
                            y = 270 + (Math.random() * 30);
                          } else if (location.id === 'cavendish-laboratory') {
                            // West Cambridge
                            x = 150 + (Math.random() * 50);
                            y = 200 + (Math.random() * 50);
                          } else if (location.id === 'wittgenstein-grave') {
                            // North Cambridge
                            x = 300 + (Math.random() * 50);
                            y = 100 + (Math.random() * 50);
                          } else if (location.id === 'computing-history') {
                            // East Cambridge
                            x = 600 + (Math.random() * 50);
                            y = 300 + (Math.random() * 50);
                          } else if (location.id === 'fitzwilliam-museum' || location.id === 'corpus-clock') {
                            // South Cambridge
                            x = 400 + (Math.random() * 50);
                            y = 450 + (Math.random() * 50);
                          } else if (location.id === 'botanic-garden') {
                            // South Cambridge
                            x = 450 + (Math.random() * 50);
                            y = 500 + (Math.random() * 50);
                          } else {
                            // Random position in central area
                            x = 320 + (Math.random() * 160);
                            y = 220 + (Math.random() * 160);
                          }
                          
                          // Determine color based on category
                          let color;
                          const category = cambridgeData.categories.find(c => c.id === location.category);
                          color = category.color.replace('bg-', '').replace('-700', '-500');
                          
                          return (
                            <g 
                              key={location.id}
                              onClick={() => handleLocationClick(location)}
                              className="cursor-pointer"
                              style={{ transition: 'all 0.2s ease' }}
                            >
                              <circle 
                                cx={x} 
                                cy={y} 
                                r="12" 
                                fill={color}
                                stroke={darkMode ? "#fff" : "#fff"} 
                                strokeWidth="2"
                                className="drop-shadow-md"
                              />
                              <text 
                                x={x} 
                                y={y} 
                                fontSize="10" 
                                textAnchor="middle" 
                                dominantBaseline="middle"
                                fill="#fff" 
                                fontWeight="bold"
                              >
                                {location.emoji.substring(0, 1)}
                              </text>
                              <text 
                                x={x} 
                                y={y + 30} 
                                fontSize="10" 
                                textAnchor="middle" 
                                fill={darkMode ? "#ddd" : "#333"} 
                                fontWeight="bold"
                                className="drop-shadow-sm"
                                style={{ textShadow: darkMode ? '0 0 3px rgba(0,0,0,0.8)' : '0 0 3px rgba(255,255,255,0.8)' }}
                              >
                                {location.name.length > 20 ? location.name.substring(0, 18) + "..." : location.name}
                              </text>
                            </g>
                          );
                        })}
                        
                        {/* North indicator */}
                        <g transform="translate(750, 70)">
                          <circle r="20" fill={darkMode ? "#333" : "#f8fafc"} stroke={darkMode ? "#666" : "#cbd5e1"} strokeWidth="2" />
                          <text x="0" y="0" fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={darkMode ? "#ddd" : "#475569"}>N</text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium mb-3 text-lg">Click a location for details</h3>
                    <div className="flex flex-wrap gap-3">
                      {cambridgeData.categories.map(category => (
                        <div key={category.id} className="flex items-center text-sm bg-white dark:bg-dark-900 rounded-full px-3 py-1 shadow-sm">
                          <div className={`w-3 h-3 rounded-full mr-2 ${category.color.replace('700', '500')}`}></div>
                          <span>{category.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>

        <footer className={clsx('mt-8 pt-4 text-center text-sm', {
          'text-gray-400 border-t border-gray-800': darkMode,
          'text-gray-500 border-t border-gray-200': !darkMode
        })}>
          <p>Cambridge Explorer: Philosophy & Physics Guide</p>
          <p className="mt-1">Created for exploring the rich academic heritage of Cambridge</p>
        </footer>
      </div>
    </div>
  );
} 