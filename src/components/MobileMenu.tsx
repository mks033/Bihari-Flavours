

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

// Match your requested items precisely
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Contact", href: "#contact" },
  { label: "Orders", href: "#orders" },
  { label: "Terms & Service", href: "#terms" },
  { label: "About", href: "#about" },
];

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    // lock/unlock body scroll while menu is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-[55] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={open ? "false" : "true"}
      />

      {/* Drawer with yellow→orange→red gradient */}
      <nav
        className={`fixed left-0 top-0 h-screen w-72 shadow-2xl z-[60]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-white`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <span className="font-semibold">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="p-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
                onClick={onClose}
              >
                <span className="text-base font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
