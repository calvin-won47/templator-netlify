
import React from 'react';
import { useConfig } from '../contexts/ConfigContext';

const Hero: React.FC = () => {
  const animatedTexts = [
    "e-commerce stores",
    "SaaS platforms",
    "marketing sites",
    "documentation",
    "the next big idea",
    "e-commerce stores",
  ];

  const { slogan, hero, cta } = useConfig();

  return (
    <section className="relative text-center py-20 md:py-32 overflow-hidden">
       <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at top, rgba(49, 224, 200, 0.2), transparent 40%), radial-gradient(circle at bottom, rgba(49, 224, 200, 0.1), transparent 50%)',
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
          {slogan || 'Build the future of the web.'}
        </h1>
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight h-[1.2em] overflow-hidden">
          <div className="animate-text-slide">
            {animatedTexts.map((text, index) => (
              <div key={index} className="h-[1.2em]" style={{ color: 'var(--accent-color, #31E0C8)' }}>{text}</div>
            ))}
          </div>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          {hero?.description || 'Netlify is the modern web development platform for enterprises to realize the full potential of a scalable, composable web architecture.'}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder={cta?.emailPlaceholder || 'name@example.com'} 
            className="w-full sm:w-auto flex-grow bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#31E0C8]"
          />
          <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
            {cta?.primaryLabel || 'Sign up'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  