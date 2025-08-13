import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="px-6 mb-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Trusted partners</p>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        <div className="text-gray-500 dark:text-gray-400 font-semibold">Hotel St. James</div>
        <div className="text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500 dark:bg-gray-400"></span>
          Wynyard Hotel
        </div>
        <div className="text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500 dark:bg-gray-400"></span>
          Starloka Hotel
        </div>
        <div className="text-gray-500 dark:text-gray-400 font-semibold">La Bella Hotel</div>
        <div className="text-gray-500 dark:text-gray-400 font-semibold">Hotel Palisade</div>
        <div className="text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded-full bg-gray-500 dark:bg-gray-400"></span>
          Villa GreenSpace
        </div>
      </div>
    </div>
  );
};

export default Partners;