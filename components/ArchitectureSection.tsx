
import React from 'react';

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-electric-blue"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How We Stay Trendy</h2>
          <p className="text-slate text-lg">Our 48-hour cycle ensures you always get the freshest trends.</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-slate mb-2">Data Aggregation</h3>
              <p className="text-slate">
                Every 48 hours, our automated system scans public data from TikTok, Instagram, and YouTube using a combination of official APIs and ethical web scraping. We look for rising sounds, hashtags, and product mentions relevant to our target age groups.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="w-12 h-12 rounded-full bg-neon-pink/10 text-neon-pink flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-slate mb-2">AI-Powered Analysis</h3>
              <p className="text-slate">
                The collected data is processed by a machine learning model. It identifies patterns, measures velocity (how fast a trend is growing), and categorizes products by type and age-appropriateness. This ensures the trends we show are genuinely popular and relevant.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                 <div className="w-12 h-12 rounded-full bg-slate-600/20 text-slate-300 flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-slate mb-2">Curation & Delivery</h3>
              <p className="text-slate">
                Our system generates the curated list of trending products, which is stored in our database. This fresh data is then instantly available in the app and on our website via a secure API, ready for you to discover.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-dark-navy rounded-md border border-slate-800">
             <div className="flex items-center text-sm text-slate mb-2">
                <CodeIcon />
                <span>System Architecture</span>
             </div>
             <p className="font-mono text-xs md:text-sm text-slate-400">
             [Scheduled Cron Job / Serverless Function] -> [Scraping/API Service] -> [Data Processing & ML] -> [NoSQL Database] -> [REST API] -> [TrendyKid App]
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
