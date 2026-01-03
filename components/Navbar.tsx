"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="mx-auto max-w-[1350px] pl-4">
        <div className="flex h-12 items-center justify-between">

          {/* Logo */}
          <div className="lg:w-[300px]">

          <Link href="/" className={` ${isPastHero ? "text-[#444444]" : "text-white"}`}>
           
           <Image src={`${isPastHero ? "/images/black-tomato-black.svg" : "/images/black-tomato.svg"}`} className={` ${isPastHero ? "text-[#444444]" : "text-white"}`} alt="Black Tomato Logo" width={40} height={40} />
          </Link>
          </div>

          {/* Desktop Left Section */}
          <div className="hidden lg:flex gap-4  items-center">
            <Search className={`h-4 w-4 mx-4 cursor-pointer ${isPastHero ? "text-[#444444]" : "text-white"}`} />

            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium ${isPastHero ? "text-[#444444] tracking-[1.2]  hover:text-gray-600" : "text-white hover:text-gray-300"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Menu className={`mx-4 ${isPastHero ? "text-[#444444]" : "text-white"} cursor-pointer h-4 w-4 `} />
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5 text-right ">
            <span className={`text-xs tracking-widest font-semibold ${isPastHero ? "text-[#444444]" : "text-white"}`}>
              +44 207 426 9888
            </span>

            <User className={`h-5 w-5 ${isPastHero ? "text-[#444444]" : "text-white"}`} />
            <button className="hidden lg:block bg-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-white hover:bg-pink-700 transition whitespace-nowrap">
            ENQUIRE NOW
          </button>
          </div>

          

          {/* Mobile: ENQUIRE NOW button */}
         

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 pb-2 px-4">
  <button className="bg-pink-600 px-3 h-8 text-[10px] font-semibold text-white hover:bg-pink-700 transition whitespace-nowrap">
    ENQUIRE NOW
  </button>

  <button
    onClick={() => setOpen(true)}
    className={`${isPastHero ? "text-[#444444]" : "text-white"} flex items-center justify-center h-8`}
    aria-label="Open Menu"
  >
    <Menu className="h-5 w-5" />
  </button>
</div>


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
    <div className="fixed inset-y-0 left-0 z-50 w-full max-w-full h-screen font-alternate  bg-white transition-transform duration-300 ease-out flex flex-col shadow-2xl backdrop-blur-none opacity-100">
      
      {/* Top */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2 text-2xl font-medium text-black">
          +44 207 426 9888
          <span className="text-pink-500 pb-2">⌄</span>
        </div>

        <button onClick={() => setOpen(false)}>
          <X className="h-5 w-5 text-black" />
        </button>
      </div>

      {/* Search */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between gap-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-none outline-none text-2xl py-1 text-black placeholder:text-gray-400"
          />
          <Search className="h-4 w-4 text-black" />
        </div>
      </div>

      {/* Menu */}
      <nav className="px-6 py-8 space-y-8 flex-1 bg-white">
        {[
          "DESTINATIONS",
          "EXPERIENCES",
          "INSPIRATION",
          "ABOUT",
          "MY BT",
        ].map((item) => (
          <div
            key={item}
            className="text-2xl tracking-[0.2em] font-medium text-black"
          >
            {item}
          </div>
        ))}
        <div className=" bg-white">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A"/>
          </svg>
          <span className="text-2xl font-medium text-black">Trustpilot</span>
        </div>
      </div>
      </nav>

      {/* Footer */}
      
    </div>
  </>
)}

    </header>
  );
}
