import React, { useState } from 'react';
import { Smartphone, Gift, Flame, ChevronRight, Download } from 'lucide-react';

const App = () => {
  const [activeAge, setActiveAge] = useState(12);
  const ages = [6, 10, 12, 14];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-pink-500">TrendyKid</div>
        <nav className="hidden md:flex gap-8 text-slate-300">
          <a href="#" className="hover:text-white">Trends</a>
          <a href="#" className="hover:text-white">Categories</a>
          <a href="#" className="hover:text-white">About</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium flex items-center gap-2 transition">
          <Download size={18} /> Download App
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          Gifting the Trend. Made Simple.
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          Discover what kids actually want. Real-time trends for every age, updated every 48 hours.
        </p>

        {/* Age Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {ages.map((age) => (
            <button
              key={age}
              onClick={() => setActiveAge(age)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all ${
                activeAge === age ? 'bg-pink-500 scale-110 shadow-lg shadow-pink-500/30' : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              {age}
            </button>
          ))}
        </div>

        {/* Trend Card Preview */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-pink-400 mb-4 justify-center">
            <Flame size={20} fill="currentColor" />
            <span className="uppercase tracking-widest text-sm font-bold">Top Trend for {activeAge} y.o.</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Trending Tech & Toys</h2>
          <p className="text-slate-400 mb-6">Explore the most viral items on TikTok and Instagram right now.</p>
          <div className="flex justify-center gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 w-full max-w-xs">
              <div className="aspect-square bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <Gift size={48} className="text-slate-700" />
              </div>
              <div className="h-4 bg-slate-800 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-800 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 text-slate-500 text-sm">
        <p>© 2026 TrendyKid Navigator. All trends updated every 2 days.</p>
      </footer>
    </div>
  );
};

export default App;
