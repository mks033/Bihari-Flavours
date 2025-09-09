import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling configuration
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // Global scroll progress indicator
    gsap.to(".progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50">
        <div 
          className="progress-bar h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 origin-left scale-x-0"
        />
      </div>

      {/* Main Content */}
      <Header />
      <Hero />
      <ProductShowcase />
      <About />
      <Footer />
      <section id="home">{/* Hero / top content */}</section>
<section id="orders">{/* Orders section or placeholder */}</section>
<section id="products">{/* Products grid */}</section>
<section id="about">{/* About us */}</section>
<section id="contact">{/* Contact info/form */}</section>
<section id="return-policy">{/* Return policy text */}</section>
<section id="terms">{/* Terms & Service text */}</section>


      {/* Loading overlay (initially hidden) */}
      <div id="loading-overlay" className="fixed inset-0 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 z-50 flex items-center justify-center opacity-0 pointer-events-none">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading Bihari Flavours...</p>
        </div>
      </div>
    </div>
  );
}

export default App;