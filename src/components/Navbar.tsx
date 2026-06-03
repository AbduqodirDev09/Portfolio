import { useState, useEffect } from "react";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-violet-400 font-mono font-bold text-lg tracking-tight">
          &lt;Tokhirjonov /&gt;
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 font-medium"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-4 py-1.5 border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white rounded text-sm font-semibold transition-all duration-200"
          >
            Hire Me
          </button>
        </div>

        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d12]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-gray-400 hover:text-white text-sm text-left transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-4 py-2 border border-violet-500 text-violet-400 rounded text-sm font-semibold w-fit"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
