
import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Products': ['Platform', 'CLI', 'Edge Functions', 'Integrations'],
    'Company': ['About', 'Blog', 'Careers', 'Press'],
    'Resources': ['Docs', 'Support', 'Community', 'Security'],
    'Contact': ['Sales', 'Support', 'Status'],
  };

  return (
    <footer className="bg-[#040406] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="font-bold text-lg">Netlify</h3>
            <p className="mt-2 text-gray-400 text-sm">The platform for modern web development.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-gray-300">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Youtube size={20} /></a>
          </div>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Netlify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  