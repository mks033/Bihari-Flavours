import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='60' cy='60' r='4'/%3E%3Ccircle cx='0' cy='0' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
<div className="lg:col-span-2">
  <div className="flex items-center space-x-3 mb-6">
    <img
      src="/logo.png"
      alt="Bihari Flavours"
      className="w-12 h-12 object-contain rounded-full"
    />
    <div>
      <span className="text-lg font-semibold">Bihari Flavours</span>
      <p className="text-yellow-200">Authentic Bihar Flavors</p>
    </div>
  </div>
</div>

          {/* Brand Section
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-red-900">म</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bihari Flavours</h3>
                <p className="text-yellow-200">Authentic Bihar Flavors</p>
              </div>
            </div> */}
            
            <p className="text-yellow-100 mb-6 leading-relaxed max-w-md">
              Experience the authentic taste of Bihar with our premium collection of traditional foods. 
              Made with love, served with pride, celebrating the rich heritage of Mithila culture.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-red-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-red-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5 text-red-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact', 'Blog', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-yellow-100 hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-yellow-100">Hajipur, Bihar</p>
                  <p className="text-yellow-200 text-sm">India - 844101</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <p className="text-yellow-100">+91 7370819491</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <p className="text-yellow-100">support@bihariflavours.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-yellow-700/30 mt-12 pt-12">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Stay Updated</h4>
            <p className="text-yellow-100 mb-6">Subscribe to our newsletter for exclusive offers and new product updates</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full bg-white/10 text-white placeholder-yellow-200 border border-yellow-500/30 focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-red-900 px-8 py-3 rounded-r-full font-bold hover:scale-105 transition-transform duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-700/30 pt-8 text-center">
          <p className="text-yellow-200 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> in Bihar • 
            © 2025 Bihari Flavours. All rights reserved.
          </p>
        </div>
      
    </footer>
  );
};

export default Footer;