
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const NetlifyLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#31E0C8"/>
    <path d="M6.28571 7.45714H8.57143L12 13.1429L15.4286 7.45714H17.7143V16.5429H15.4286V10.2L12.3429 15.2L12 15.7714L11.6571 15.2L8.57143 10.2V16.5429H6.28571V7.45714Z" fill="white"/>
  </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', dropdown: true },
    { name: 'Solutions', dropdown: true },
    { name: 'Blog', dropdown: false, href: '/blog' },
    { name: 'Integrations', dropdown: false, href: '#' },
    { name: 'Start a project', dropdown: false, href: '#' },
    { name: 'Docs', dropdown: false, href: '#' },
    { name: 'Pricing', dropdown: false, href: '#' },
  ];

  return (
    <header className="bg-[#040406] sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <NetlifyLogo />
              <span className="font-bold text-lg">Netlify</span>
            </a>
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href || '#'} className="flex items-center text-gray-300 hover:text-white text-sm">
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Contact sales</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Log in</a>
            <a href="#" className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200">Sign up</a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#040406] border-t border-gray-800">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href || '#'} className="flex justify-between items-center text-gray-300 hover:text-white">
                {link.name}
                {link.dropdown && <ChevronDown size={16} />}
              </a>
            ))}
            <div className="border-t border-gray-800 pt-4 flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white">Contact sales</a>
              <a href="#" className="text-gray-300 hover:text-white">Log in</a>
              <a href="#" className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-gray-200">Sign up</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
  