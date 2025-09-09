import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const registerPlugins = () => {
  gsap.registerPlugin(ScrollTrigger);
};

export const createScrollAnimation = (element: HTMLElement, animation: gsap.TweenVars) => {
  return gsap.fromTo(element, 
    animation.from || {},
    {
      ...animation.to,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...animation.scrollTrigger
      }
    }
  );
};

export const createStaggerAnimation = (elements: Element[], animation: gsap.TweenVars) => {
  return gsap.fromTo(elements, 
    animation.from || {},
    {
      ...animation.to,
      stagger: 0.1,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...animation.scrollTrigger
      }
    }
  );
};

export const create3DCardHover = (card: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };
  
  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
};