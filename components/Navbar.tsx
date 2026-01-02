"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, User } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if we're past the hero section (approximately 600px based on typical hero height)
      setIsPastHero(currentScrollY > 600);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 600) {
        // Scrolling down and past hero
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 transition-all duration-300 ${
        isPastHero
          ? "bg-white shadow-md"
          : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto max-w-[1350px] px-4">
        <div className="flex h-12 items-center justify-between">

          {/* Logo */}
          <Link href="/" className={`text-xl font-bold font-brandon ${isPastHero ? "text-black" : "text-white"}`}>
            BLACK<span className="text-pink-600">TOM</span>
          </Link>

          {/* Desktop Left Section */}
          <div className="hidden lg:flex gap-4 ml-20 items-center">
            <Search className={`h-5 w-5 mx-4 ${isPastHero ? "text-black" : "text-white"}`} />

            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium ${isPastHero ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Menu className={`mx-4 ${isPastHero ? "text-black" : "text-white"} pointer-events-none`} />
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5">
            <span className={`text-xs font-medium ${isPastHero ? "text-black" : "text-white"}`}>
              +44 207 426 9888
            </span>

            <User className={`h-5 w-5 ${isPastHero ? "text-black" : "text-white"}`} />

            <button className="bg-pink-600 px-4 py-2 text-xs font-semibold text-white hover:bg-pink-700">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden ${isPastHero ? "text-black" : "text-white"}`}
            aria-label="Open Menu"
          >
            <Menu />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 z-40 bg-black/40"
      onClick={() => setOpen(false)}
    />

    {/* Drawer */}
    <div className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm bg-white transition-transform duration-300 ease-out">
      
      {/* Top */}
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <div className="flex items-center gap-2 text-sm font-medium">
          +44 207 426 9888
          <span className="text-pink-600">⌄</span>
        </div>

        <button onClick={() => setOpen(false)}>
          <X className="h-5 w-5 text-black" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 py-4 border-b">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-b outline-none text-sm py-2"
          />
          <Search className="h-4 w-4 text-black" />
        </div>
      </div>

      {/* Menu */}
      <nav className="px-5 py-6 space-y-6">
        {[
          "DESTINATIONS",
          "EXPERIENCES",
          "INSPIRATION",
          "ABOUT",
          "MY BT",
        ].map((item) => (
          <div
            key={item}
            className="text-sm tracking-widest font-medium"
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-6 left-5">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-green-500">★</span>
          Trustpilot
        </div>
      </div>
    </div>
  </>
)}

    </header>
  );
}
