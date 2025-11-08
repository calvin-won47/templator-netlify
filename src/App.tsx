
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Platform from './components/Platform';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';

const App: React.FC = () => {
  const HomeMain: React.FC = () => (
    <main>
      <Hero />
      <Partners />
      <Platform />
      <Features />
      <Workflow />
      <Solutions />
      <Testimonials />
      <Cta />
    </main>
  )

  return (
    <div className="bg-[#040406] text-white font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
  