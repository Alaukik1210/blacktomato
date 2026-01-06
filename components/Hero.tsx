"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop Video */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src="/videos/hero-desktop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Mobile Video */}
      <video
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
        src="/videos/hero-mobile.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="max-w-4xl text-5xl sm:text-5xl md:text-6xl lg:text-[55px] font-medium  tracking-wider font-alternate ">
          PUT THE WORLD <br />
          IN YOUR HANDS
        </h1>
        <p className=" my-8 text-xs sm:text-sm md:text-sm tracking-wider  text-white/90  font-brandon">
          AWARD-WINNING LUXURY TRAVEL EXPERTS CRAFTING BESPOKE JOURNEYS FOR DISCERNING
          TRAVELLERS SINCE 2005
        </p>
        <div className=" mt-8 md:w-full">
          <button className="rounded-xs border border-white/70  sm:px-12 py-2 sm:py-3 
  text-[11px] px-6 font-bold tracking-[1.2px] transition hover:bg-white hover:text-black">
           JOURNEYS THAT INSPIRE
          </button>
         

        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={handleScroll} />
    </section>
  );
}
const ScrollIndicator: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 mt-2 cursor-pointer left-1/2 z-10 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
      aria-label="Scroll to content"
    >
      <span className="text-xs sm:text-sm uppercase tracking-widest mt-4 font-brandon">
        Scroll
      </span>
      <div className="w-[2px] h-12 bg-white/50 animate-pulse-scale origin-top"></div>
      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scaleY(0.2);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};