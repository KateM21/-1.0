
import React from 'react';

const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83.58 5.176.89 1.343 1.777 2.345 3.24 2.345.508 0 1.053-.189 1.782-.616.572-.349 1.036-.713 1.558-1.012.524-.301 1.05-.61 1.729-.611.66-.001 1.136.306 1.701.61.564.305 1.055.656 1.625.992.652.349 1.225.56 1.875.56.336 0 .73-.057 1.08-.158.42-.126.82-.328 1.125-.563.305-.234 1.39-1.181 1.38-2.945a6.088 6.088 0 0 0-.44-2.147Z"/>
        <path d="M4.176 8.563a2.498 2.498 0 0 0-1.789-.854c-1.396 0-2.537 1.156-2.537 2.54 0 1.08.625 1.944 1.482 2.308.01.005.023.009.036.014.013.005.027.01.04.015.013.005.026.01.04.014.93.308 1.956.005 2.614-.666.658-.67 1.112-1.74.838-2.33Z"/>
    </svg>
);

const PlayStoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14.778.085A.5.5 0 0 1 15.25.5v15a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .472-.5h.002l13-2.6a.5.5 0 0 1 .526.085ZM11.028 4.34H3.857a.5.5 0 0 0-.5.5v6.314a.5.5 0 0 0 .5.5h7.171a.5.5 0 0 0 .5-.5V4.84a.5.5 0 0 0-.5-.5ZM4.357 5.34h6.171v5.314H4.357V5.34Z"/>
        <path d="M12.94 1.332 5.065 3.033A.5.5 0 0 0 4.5 3.5v9.5a.5.5 0 0 0 .565.497l7.875-1.772a.5.5 0 0 0 .435-.497V1.83a.5.5 0 0 0-.435-.498ZM5.5 4.34h5.443v7.314H5.5V4.34Z"/>
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-pink">
          Gifting the Trend.
        </span>
        <br />
        Made Simple.
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate mb-8">
        Stop guessing what kids want. Discover the hottest gifts and products trending on social media right now, curated for every age.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#" className="flex items-center justify-center bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto hover:bg-gray-600 transition-colors duration-300">
          <AppleIcon />
          <div>
            <span className="text-xs">Download on the</span>
            <span className="block text-lg -mt-1">App Store</span>
          </div>
        </a>
        <a href="#" className="flex items-center justify-center bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg w-full sm:w-auto hover:bg-gray-600 transition-colors duration-300">
          <PlayStoreIcon />
          <div>
            <span className="text-xs">GET IT ON</span>
            <span className="block text-lg -mt-1">Google Play</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
