import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Heart, Eye } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Thekwa",
    price: "₹299",
    image: "https://t3.ftcdn.net/jpg/04/68/54/38/360_F_468543890_1F4bh2un6TSi9x3Wa760zIrCrwSCHjIl.jpg",
    category: "Traditional Sweets",
    rating: 4.8
  },
  {
    id: 2,
    name: "Khasta",
    price: "₹199",
    image: "https://img-global.cpcdn.com/recipes/104f12dac2247805/680x482cq90/bihari-khasta-thekua-recipe-main-photo.jpg",
    category: "Snacks",
    rating: 4.9
  },
  {
    id: 3,
    name: "Purukiya",
    price: "₹149",
    image: "https://cdn.create.vista.com/api/media/small/459321036/stock-photo-gujiya-gujia-karanji-sweet-dumplings-made-festival-holi-diwali-served",
    category: "Health Foods",
    rating: 4.7
  },
  {
    id: 4,
    name: "Makhana",
    price: "₹249",
    image: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2021/12/15073805/1600x960_595071-benefits-of-makhana-for-babies-in-hindi-banner.jpg",
    category: "Ready to Cook",
    rating: 4.6
  },
  {
    id: 5,
    name: "Lai",
    price: "₹179",
    image: "https://www.biharandjharkhand.com/recipe/anupriya_laayee1.jpg",
    category: "Festival Specials",
    rating: 4.8
  },
  {
    id: 6,
    name: "Tilkut",
    price: "₹229",
    image: "https://media.istockphoto.com/id/1781270524/photo/til-ladoo-or-sesame-laddu-or-rewri-balls.jpg?s=612x612&w=0&k=20&c=eTrPugGHqp-Wivg6EL7RrCrhOcwnz0m1tb0-ftd_bPc=",
    category: "Traditional Sweets",
    rating: 4.9
  }
];

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current?.children || [],
      { y: 100, opacity: 0, rotateY: -30, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect for section
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -50
    });
  }, []);

  const handleProductHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleProductLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotateY: 0,
      z: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
            <section id="products" ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
              Our Premium
            </span>
            <br />
            <span className="text-gray-800">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked authentic Bihar delicacies, prepared with love and traditional recipes passed down through generations
          </p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden transform-gpu perspective-1000 cursor-pointer"
              onMouseEnter={handleProductHover}
              onMouseLeave={handleProductLeave}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-200">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600 text-sm">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Authentic Bihar delicacy made with traditional methods and premium ingredients
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
            View All Products
          </button>
        </div>
      </div>
      </section>

  );
};

export default ProductShowcase;