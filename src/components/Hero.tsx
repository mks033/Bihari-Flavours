import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star } from 'lucide-react';
import heroImg from 'public/hero.png';  // adjust ../ if your folder depth differs


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.5 });

    // Main title animation
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Product floating animation
    gsap.fromTo(productRef.current,
      { y: 100, opacity: 0, rotateY: -45, scale: 0.8 },
      { y: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 }
    );

    // Continuous floating
    gsap.to(productRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Decorative elements
    gsap.fromTo(decorRef.current?.children || [],
      { scale: 0, opacity: 0, rotation: -180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)", delay: 2.5 }
    );

    // Parallax scroll effect
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      y: -100,
      opacity: 0.8
    });
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* <h1 className="text-7xl font-extrabold leading-tight tracking-tight text-white">
  Bihari <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Flavours</span>
</h1> */}

            <h1 ref={titleRef} className="text-7xl lg:text-8xl font-bold text-white mb-6 leading-none">
              Bihari
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Flavours
              </span>
            </h1>
            
            <p ref={subtitleRef} className="text-xl lg:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Discover the authentic taste of Bihar with our premium food products. 
              From traditional sweets to spicy snacks, we bring you the true mithas of Bihar.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                Shop Now
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-red-900 transition-all duration-300">
                Explore Products
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 gap-4">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-yellow-100">4.9/5 from 500+ reviews</span>
            </div>
          </div>

          {/* Right Content - 3D Product Display */}
          <div className="relative">
            <div ref={productRef} className="relative z-10 transform-gpu perspective-1000">
              <div className="w-96 h-96 mx-auto relative">
                <img 
                src="/hero.png"
                alt="Bihari Flavours products"
                className="w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />

                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  Fresh & Authentic
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div ref={decorRef} className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;