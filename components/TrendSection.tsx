
import React, { useState } from 'react';
import { AGES, TRENDS_DATA, socialIcons } from '../constants';
import type { Trend } from '../types';

interface TrendCardProps {
  trend: Trend;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
  return (
    <div className="bg-slate-900/50 rounded-lg overflow-hidden shadow-lg border border-slate-700/50 group transform hover:-translate-y-2 transition-transform duration-300">
      <img src={trend.imageUrl} alt={trend.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-light-slate group-hover:text-neon-pink transition-colors">{trend.name}</h3>
            <span className="text-xs bg-electric-blue/20 text-electric-blue font-semibold px-2 py-1 rounded-full whitespace-nowrap">2 days ago</span>
        </div>
        <p className="text-slate text-sm mb-4 h-16">{trend.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate font-medium">As seen on:</p>
          <div className="flex items-center space-x-3 text-slate">
            {trend.platforms.map(platform => (
              <a href="#" key={platform} aria-label={platform} className="hover:text-white transition-colors">
                {socialIcons[platform]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendSection: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<number>(AGES[0]);

  return (
    <section id="trends" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Find Your Vibe</h2>
        <p className="text-slate text-lg">Select an age to see what's currently trending.</p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12">
        {AGES.map(age => (
          <button
            key={age}
            onClick={() => setSelectedAge(age)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105
              ${selectedAge === age 
                ? 'bg-gradient-to-r from-electric-blue to-neon-pink text-white shadow-lg' 
                : 'bg-slate-800 text-slate hover:bg-slate-700'
              }`}
          >
            Age {age}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRENDS_DATA[selectedAge].map(trend => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </section>
  );
};

export default TrendSection;
