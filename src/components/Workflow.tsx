
import React from 'react';

const Workflow: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">A better workflow for a better web</h2>
            <p className="mt-6 text-lg text-gray-400">
              Move faster with a Git-based workflow that deploys your frontend to a global edge network and makes it easy to integrate serverless functions, third-party services, and user authentication.
            </p>
            <a href="#" className="mt-8 inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
              Explore developer workflow
            </a>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-gray-300">
              <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</p>
              <p><span className="text-purple-400">import</span> &#123; NetlifyCms &#125; <span className="text-purple-400">from</span> <span className="text-green-400">'netlify-cms-app'</span>;</p>
              <br />
              <p><span className="text-blue-400">const</span> <span className="text-yellow-300">App</span> = () =&gt; (</p>
              <p className="pl-4">&lt;<span className="text-red-400">div</span>&gt;</p>
              <p className="pl-8">Hello, Netlify!</p>
              <p className="pl-4">&lt;/<span className="text-red-400">div</span>&gt;</p>
              <p>);</p>
              <br />
              <p><span className="text-purple-400">export default</span> App;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
  