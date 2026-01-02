"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PressItem {
  id: number;
  quote: string;
  logo: string;
  alt: string;
}

const pressData: PressItem[] = [
  {
    id: 1,
    quote:
      "“Bespoke luxury travel outfitter Black Tomato’s new tool may reinvent how you book”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "Forbes",
  },
  {
    id: 2,
    quote:
      "“Many travel companies brag about once-in-a-lifetime experiences but with Black Tomato, it’s not hyperbole”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "CNBC",
  },
  {
    id: 3,
    quote:
      "“Black Tomato have built something of a name for themselves as thought leaders in the travel business”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "Inc",
  },
  {
    id: 4,
    quote:
      "“Black Tomato prides itself on meeting customers every minor need or desires”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "Condé Nast Traveler",
  },
  {
    id: 5,
    quote:
      "“A masterclass in personalized experiential travel”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "New York Times",
  },
  {
    id: 6,
    quote:
      "“Redefining what luxury travel can feel like”",
        logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
        alt: "The Guardian",
  },
  {
    id: 7,
    quote:
      "“An industry benchmark for bespoke journeys”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "Bloomberg",
  },
  {
    id: 8,
    quote:
      "“Travel, re-imagined at its finest”",
    logo: "https://media.blacktomato.com/2025/07/Conde-naste-Traveler-193x40-1.svg",
    alt: "Wall Street Journal",
  },
];

export default function PressCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    // Set initial visible items based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev + visible >= pressData.length ? 0 : prev + visible
      );
    }, 7000); // slow, premium

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-[1200ms] ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visible}%)`,
          }}
        >
          {pressData.map((item) => (
            <div
              key={item.id}
              className={`${visible === 1 ? "w-full" : visible === 2 ? "w-1/2" : "w-1/4"} flex-shrink-0 px-3 sm:px-4 md:px-6`}
            >
              <div className="flex flex-col items-center text-center h-full justify-between gap-4 sm:gap-6 md:gap-8 py-4 md:py-6">
                {/* Quote */}
                <p className="text-xs sm:text-sm md:text-sm uppercase font-semibold tracking-widest text-gray-700 leading-relaxed font-brandon">
                  {item.quote}
                </p>

                {/* Logo */}
                <div className="relative h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 md:mt-12 flex-wrap px-4">
          {Array.from({
            length: Math.ceil(pressData.length / visible),
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i * visible)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                index === i * visible
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to press item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
