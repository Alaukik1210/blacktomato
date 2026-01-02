"use client";

import Image from "next/image";

interface Trip {
  imageUrl: string;
  title: string;
  subtitle?: string;
  duration: string;
  priceFrom?: string;
  description: string;
}

const TRIPS: Trip[] = [
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "ROME, FLORENCE & PUGLIA",
    subtitle: "A Luxury Family Italy Holiday",
    duration: "9 NIGHTS",
    description: "Experience Italy’s most iconic cities with tailored family moments.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "A JOURNEY INTO JAPAN",
    duration: "10 NIGHTS",
    priceFrom: "From £6,500 per person excl. flights",
    description: "Japan — with its 3,000 tightly-packed islands — can easily exceed expectations.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "AN ADVENTURE THROUGH",
    subtitle: "COSTA RICA",
    duration: "13 NIGHTS",
    description: "Rainforests, wildlife and thrilling outdoor adventures.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "ATHENS, MYKONOS & CRETE",
    subtitle: "Luxury Family Discovery in Greece",
    duration: "11 NIGHTS",
    description: "Island hopping with culture, beaches and bespoke stays.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "ROME, FLORENCE & PUGLIA",
    subtitle: "A Luxury Family Italy Holiday",
    duration: "9 NIGHTS",
    description: "Experience Italy’s most iconic cities with tailored family moments.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "A JOURNEY INTO JAPAN",
    duration: "10 NIGHTS",
    priceFrom: "From £6,500 per person excl. flights",
    description: "Japan — with its 3,000 tightly-packed islands — can easily exceed expectations.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "AN ADVENTURE THROUGH",
    subtitle: "COSTA RICA",
    duration: "13 NIGHTS",
    description: "Rainforests, wildlife and thrilling outdoor adventures.",
  },
  {
    imageUrl: "/images/triple-creek-ranch.avif",
    title: "ATHENS, MYKONOS & CRETE",
    subtitle: "Luxury Family Discovery in Greece",
    duration: "11 NIGHTS",
    description: "Island hopping with culture, beaches and bespoke stays.",
  },
];

export default function DestinationSlider() {
  return (
    <section className="bg-[#50412b] py-12 sm:py-16 md:py-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Horizontal Scroll */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-scroll pb-6 px-4 sm:px-6 md:px-0 md:pr-8 lg:pr-40 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="px-4 sm:px-6 md:px-8 lg:px-20 flex-shrink-0">
            {/* Header */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-widest font-brandon">
                OUR MOST POPULAR<br />TRIPS
              </h2>
              <p className="mt-4 text-xs sm:text-sm italic text-white/70 max-w-sm">
                The trips our travellers are booking right now
              </p>
            </div>
          </div>

          {TRIPS.map((trip, index) => (
            
            
            <div
              key={index}
              className="group relative min-w-[180px] xs:min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] aspect-[3/5] overflow-hidden flex-shrink-0"
            >
              {/* Image */}
              <Image
                src={trip.imageUrl}
                alt={trip.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Duration */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs tracking-widest text-white">
                {trip.duration}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 transition-all duration-300">
                <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-white line-clamp-2 font-brandon">
                  {trip.title}
                </h3>

                {trip.subtitle && (
                  <p className="mt-1 text-xs text-white/80 line-clamp-1">
                    {trip.subtitle}
                  </p>
                )}

                {/* Hidden on default */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="mt-2 sm:mt-3 text-xs leading-5 text-white/80">
                    {trip.description}
                  </p>

                  {trip.priceFrom && (
                    <p className="mt-2 text-xs italic text-white">
                      {trip.priceFrom}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button className="mt-2 sm:mt-4 border border-white px-3 sm:px-4 py-1 sm:py-2 text-xs tracking-widest text-white transition hover:bg-white hover:text-black">
                  EXPLORE TRIP
                </button>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 flex items-end pb-6 px-2"><button className="border border-white px-4 sm:px-8 md:px-12 py-1 sm:py-2 text-xs tracking-widest text-white transition hover:bg-white hover:text-black whitespace-nowrap">
            view all
          </button></div>
        </div>
      </div>
    </section>
  );
}
