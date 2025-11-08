
import React from 'react';
import { useConfig } from '../contexts/ConfigContext';

const Cta: React.FC = () => {
  const { cta } = useConfig();
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0c]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{cta?.title || 'Get started for free'}</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400">
          {cta?.description || "Build and deploy your next project with Netlify. It's free to get started."}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href={cta?.primaryHref || '#'} className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
            {cta?.primaryLabel || 'Deploy to Netlify'}
          </a>
          <a href={cta?.secondaryHref || '#'} className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
            {cta?.secondaryLabel || 'Request a demo'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
  