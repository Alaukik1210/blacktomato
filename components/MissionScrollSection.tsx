"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* -------------------------------
     SECTION 1: BLANK
  -------------------------------- */
  const blankOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
  );

  /* -------------------------------
     SECTION 2: MISSION TEXT
  -------------------------------- */
  const missionOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.45, 0.55],
    [0, 1, 1, 0]
  );

  const missionY = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    [40, 0]
  );

  /* -------------------------------
     SECTION 3: VALUES
  -------------------------------- */
  const valuesOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 1],
    [0, 1, 1]
  );

  const valuesY = useTransform(
    scrollYProgress,
    [0.55, 0.65],
    [40, 0]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about/bg09.jpg')" }}
        />

        {/* ---------------- BLANK ---------------- */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: blankOpacity }}
        />

        {/* ---------------- MISSION TEXT ---------------- */}
        <motion.div
          className="absolute inset-0 flex  items-center justify-center px-6"
          style={{ opacity: missionOpacity, y: missionY }}
        >
          <p className="max-w-4xl text-center text-xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide  uppercase">
            OUR MISSION IS TO CREATE REMARKABLE EXPERIENCES THAT{" "}
            <span className="text-[#379C8A]">THOUGHTFULLY</span> CONNECT<br/> OUR
            CLIENTS TO THE WORLD, INSPIRING THEM<br/> TO EXPLORE IT WITH{" "}
            <span className="text-[#CC5426]">CURIOSITY</span>,{" "}
            <span className="text-[#1E40AF]">HUMILITY</span> AND A SENSE OF
            WONDER.
          </p>
        </motion.div>

        {/* ---------------- VALUES ---------------- */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6"
          style={{ opacity: valuesOpacity }}
        >
          <div className="flex justify-end w-full max-w-4xl">
            <div className="text-3xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide uppercase text-[#379C8A] md:pr-72  px-8 py-4">
              Thoughtful
            </div>
          </div>

          <div className="flex justify-center w-full max-w-4xl md:pl-52">
            <div className="text-3xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide uppercase text-[#CC5426]  px-4 py-4">
              Curious
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide uppercase text-[#1E40AF]  px-4 py-4">
              Humble
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll space */}
      <div className="h-[300vh]" />
    </div>
  );
}
