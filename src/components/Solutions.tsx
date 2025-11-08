
import React from 'react';

const solutions = [
  { title: 'E-commerce', description: 'Deliver the fastest and most reliable e-commerce experience on the web.' },
  { title: 'Enterprise', description: 'Build, deploy, and manage web projects at scale with an enterprise-grade platform.' },
  { title: 'Marketing', description: 'Launch campaigns faster and iterate more frequently with a modern web development workflow.' },
  { title: 'Startups', description: 'Get your big idea off the ground with a platform that scales with you.' },
];

const Solutions: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0c]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Solutions for every use case</h2>
          <p className="mt-4 text-lg text-gray-400">
            From large enterprises to small startups, Netlify is the platform for building modern web experiences.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-8 bg-gray-900/50 rounded-lg border border-gray-800 flex flex-col">
              <h3 className="text-xl font-bold text-[#31E0C8]">{solution.title}</h3>
              <p className="mt-2 text-gray-400 flex-grow">{solution.description}</p>
              <a href="#" className="mt-6 font-semibold text-white hover:text-[#31E0C8]">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
  