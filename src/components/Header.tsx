import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// If you already have your own MobileMenu component, keep that import instead:
import MobileMenu from "./MobileMenu";

// ---------- Inline icons (no external lib) ----------
type IconProps = React.SVGProps<SVGSVGElement>;
const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const SearchIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const CartIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

// ---------- Header ----------
export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount] = useState(0); // keep 0 since you don't want cart context
  const openCart = () => console.log("Cart clicked");

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    ).fromTo(
      [logoRef.current, navRef.current, actionsRef.current],
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.08 },
      "-=0.2"
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-red-700/40 bg-red-600 text-white"
    >
      <div className="mx-auto max-w-7xl px-2">
        <div className="h-14 flex items-center justify-between">
          {/* Left: Logo */}
          <div ref={logoRef} className="flex items-center gap-2">
            <button
              className="p-2 rounded hover:bg-red-700/50 active:bg-red-800/60 transition"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              title={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
            {/* Update the src path to your real logo file */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Bihari Flavours"
                className="h-14 w-auto"
                onError={(e) => {
                  // fallback to text if image missing
                  (e.currentTarget.style.display = "none");
                }}
              />
              <span className="text-lg font-extrabold tracking-tight"></span>
            </a>
          </div>

        
          {/* Right: Actions (Search + Cart + Mobile toggle) */}
          <div ref={actionsRef} className="flex items-center gap-1">
            <button
              aria-label="Search"
              className="p-2 rounded hover:bg-red-700/50 active:bg-red-800/60 transition"
              onClick={() => console.log("Search clicked")}
              title="Search"
            >
              <SearchIcon />
            </button>

            <button
              aria-label="Cart"
              className="relative p-2 rounded hover:bg-red-700/50 active:bg-red-800/60 transition"
              onClick={openCart}
              title="Cart"
            >
              <CartIcon />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] leading-none px-1.5 py-0.5 rounded-full bg-black text-white">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            {/* <button
              className="md:hidden p-2 rounded hover:bg-red-700/50 active:bg-red-800/60 transition"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              title={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button> */}
          </div>
        </div>
      </div>
      {/* Slide-out Mobile/Side Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>



  );
}

