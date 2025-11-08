
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://picsum.photos/seed/person/100/100" 
            alt="Matt Biilmann"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <blockquote className="mt-8 text-2xl md:text-3xl font-medium text-white">
            “Netlify is a game-changer. It’s so much easier to use than any other platform we’ve tried. The developer experience is second to none.”
          </blockquote>
          <footer className="mt-6">
            <p className="text-lg font-semibold">Matt Biilmann</p>
            <p className="text-gray-400">CEO, Netlify</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
  