import React from 'react';



const Hero: React.FC = () => {
  return (
    <section className="hero-banner">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-lime-400 rotate-45"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-lime-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-lime-400 rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
            LEGENDS 
            <span className="block text-lime-400"> OF VICTORY</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-2">BATTLE ROYALE CUP</div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Compete for glory. Only one can win.
          </p>
        </div>
        
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-8 text-lg rounded-none transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-lime-400/25">
          REGISTER NOW
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;