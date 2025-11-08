
import React, { useState } from 'react';

const Platform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('connect');

  const tabs = [
    { id: 'connect', title: 'Connect', description: 'Connect your Git repository and in just a few clicks, Netlify builds and deploys your site.' },
    { id: 'build', title: 'Build', description: 'Run your build command and take advantage of a rich ecosystem of build plugins.' },
    { id: 'deploy', title: 'Deploy', description: 'Your site is deployed to Netlify’s multi-cloud infrastructure and automatically optimized for performance and security.' },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Explore the platform</h2>
          <p className="mt-4 text-lg text-gray-400">
            A composable platform that brings together your favorite technologies and APIs, creating a more productive development workflow.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center border-b border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-[#31E0C8]'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            {tabs.map((tab) => (
              <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#31E0C8]">{tab.title}</h3>
                    <p className="mt-4 text-lg text-gray-300">{tab.description}</p>
                    <a href="#" className="mt-6 inline-block text-[#31E0C8] font-semibold hover:underline">
                      Learn more about {tab.title.toLowerCase()} &rarr;
                    </a>
                  </div>
                  <div>
                    <img 
                      src={`https://picsum.photos/seed/${tab.id}/600/400`} 
                      alt={`${tab.title} illustration`}
                      className="rounded-lg shadow-2xl shadow-[#31e0c8]/10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
  