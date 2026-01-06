"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "Hands down this was the most amazing travel experience our family has ever done together.",
    author: "Brett, Middle East",
  },
  {
    id: 2,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "We have explored some incredible places and had unique adventures only possible with Black Tomato.",
    author: "Ike & Alex, Italy",
  },
  {
    id: 3,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "Every detail felt intentional and personal. Truly once in a lifetime.",
    author: "Sarah, USA",
  },
  {
    id: 4,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "A seamless blend of luxury and adventure.",
    author: "Daniel, France",
  },
  {
    id: 5,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "They turned our dream trip into reality.",
    author: "Anita, India",
  },
  {
    id: 6,
    image: "/images/triple-creek-ranch.avif",
    quote: "“",
    text: "Every moment felt curated just for us.",
    author: "Leo, Australia",
  },
];

export default function  Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev + visible >= testimonials.length ? 0 : prev + visible
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-2xl md:text-4xl tracking-[0.1em]  mb-8 sm:mb-12 md:mb-16 font-alternate  font-medium">
        WHY DISCERNING TRAVELLERS CHOOSE BLACK TOMATO
      </h2>

      {/* Slider */}
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visible}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`${visible === 1 ? "w-full" : "w-full md:w-1/2"} flex-shrink-0 px-2 sm:px-4 md:px-6`}
            >
              <div className="flex  items-center text-center gap-4 sm:gap-6">
                {/* Image */}
                <div className="w-48 h-48 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote */}
                <div className="max-w-xs sm:max-w-md mx-auto">
                  <span className="text-2xl sm:text-3xl md:text-4xl text-emerald-600 mb-2 sm:mb-4 block">
                    {item.quote}
                  </span>

                  {/* Text */}
                  <p className="text-xs sm:text-sm uppercase font-semibold tracking-widest text-gray-700 max-w-md mb-2 sm:mb-4">
                    {item.text}
                  </p>

                  {/* Author */}
                  <span className="text-xs sm:text-xs italic text-emerald-600 block">
                    {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
          {Array.from({ length: Math.ceil(testimonials.length / visible) }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * visible)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                  index === i * visible
                    ? "bg-black"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}