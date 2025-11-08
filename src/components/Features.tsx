
import React from 'react';
import { Layers, Zap, Shield, Code, Globe, Puzzle } from 'lucide-react';

const featureItems = [
  {
    icon: Layers,
    title: 'Composable Web Architecture',
    description: 'Build performant, secure, and scalable websites and apps with a composable architecture.',
  },
  {
    icon: Zap,
    title: 'High-Performance Edge',
    description: 'A programmable, high-performance edge network that is faster than other cloud providers.',
  },
  {
    icon: Shield,
    title: 'Serverless Functions',
    description: 'Run on-demand serverless functions that automatically scale to meet your needs.',
  },
  {
    icon: Code,
    title: 'Developer Workflow',
    description: 'A Git-based workflow for faster development, easier collaboration, and shorter time to market.',
  },
  {
    icon: Globe,
    title: 'Enterprise-Grade Platform',
    description: 'A robust platform with the security, compliance, and performance that enterprises demand.',
  },
  {
    icon: Puzzle,
    title: 'Integrations',
    description: 'Integrate your favorite tools and services to create a powerful, unified workflow.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0c]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why Netlify</h2>
          <p className="mt-4 text-lg text-gray-400">
            Netlify is the platform for modern web development that empowers teams to build better products faster.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div key={index} className="p-8 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="flex items-center justify-center h-12 w-12 bg-[#31E0C8]/10 rounded-lg">
                <item.icon className="h-6 w-6 text-[#31E0C8]" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
  