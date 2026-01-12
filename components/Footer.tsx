
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-neon-pink">Trendy</span><span className="text-electric-blue">Kid</span> Navigator
            </h3>
            <p className="text-slate text-sm">Gifting the trend, made simple.</p>
            <div className="flex space-x-4 mt-6">
                {/* Social Icons would go here */}
                <a href="#" className="text-slate hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                 <a href="#" className="text-slate hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                 <a href="#" className="text-slate hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.3-3.3 1.3c-2 0-2.7-1.3-2.7-1.3s-1 .7-2.7 1.3c-1.7 0-3.3-1.3-3.3-1.3s1.7-3 3.3-4.4c-1.3-1.3-2-3.4-2-3.4s1.3 1.3 2.7 1.3c1.3 0 2.7-1.3 2.7-1.3z"></path></svg>
                </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-8">
            <div>
              <h4 className="font-semibold text-light-slate mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#trends" className="text-slate hover:text-white transition-colors text-sm">Trends</a></li>
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">Categories</a></li>
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-light-slate mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-light-slate mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">support@trendykid.io</a></li>
                <li><a href="#" className="text-slate hover:text-white transition-colors text-sm">Press</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate text-sm">
          <p>&copy; {new Date().getFullYear()} TrendyKid Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
