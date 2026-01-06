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
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{ opacity: missionOpacity, y: missionY }}
        >
          <p className="max-w-4xl text-center text-xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide  uppercase">
            OUR MISSION IS TO CREATE REMARKABLE EXPERIENCES THAT{" "}
            <span className="text-[#10b981]">THOUGHTFULLY</span> CONNECT OUR
            CLIENTS TO THE WORLD, INSPIRING THEM TO EXPLORE IT WITH{" "}
            <span className="text-orange-500">CURIOSITY</span>,{" "}
            <span className="text-blue-600">HUMILITY</span> AND A SENSE OF
            WONDER.
          </p>
        </motion.div>

        {/* ---------------- VALUES ---------------- */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-10"
          style={{ opacity: valuesOpacity, y: valuesY }}
        >
          <div className="text-xl md:text-5xl lg:text-6xl font-alternate font-medium tracking-wide  uppercase text-[#10b981]">
            Thoughtful
          </div>

          <div className="flex gap-12">
            <div className="text-3xl md:text-4xl font-semibold tracking-widest text-orange-500 uppercase">
              Curious
            </div>
            <div className="text-3xl md:text-4xl font-semibold tracking-widest text-blue-600 uppercase">
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
