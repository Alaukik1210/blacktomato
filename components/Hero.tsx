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
        <h1 className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-widest font-brandon">
          PUT THE WORLD <br />
          IN YOUR HANDS
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-base tracking-wide text-white/90  font-brandon">
          Award-winning luxury travel experts crafting bespoke journeys for discerning travellers since 2005
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="rounded-sm border border-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold tracking-widest transition hover:bg-white hover:text-black">
            EXPLORE OUR TRIPS
          </button>
          <button className="rounded-sm bg-black  px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold tracking-widest transition hover:bg-white hover:text-black">
            BROWSE THE TRAVEL CALENDAR
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
      className="absolute bottom-8 left-1/2 z-10 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
      aria-label="Scroll to content"
    >
      <span className="text-xs sm:text-sm uppercase tracking-widest font-brandon">Scroll</span>
      <ChevronDown className="w-6 h-6 animate-bounce" />
    </button>
  );
};