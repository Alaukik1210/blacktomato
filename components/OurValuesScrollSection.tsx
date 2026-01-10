"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";

export default function OurValuesScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------------- HEADING ---------------- */
  const headingOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    [0, 1]
  );

  const headingY = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    [30, 0]
  );

  /* ---------------- CARDS ---------------- */
  const card1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  const card1Y = useTransform(scrollYProgress, [0.3, 0.4], [40, 0]);
  const card2Y = useTransform(scrollYProgress, [0.45, 0.55], [40, 0]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.7], [40, 0]);

  return (
    <div className="">
    <div ref={containerRef} className="relative ">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden ">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about/bg10.jpg')" }}
        />

        {/* ---------------- HEADING ---------------- */}
        <motion.div
          className="absolute top-24 left-8 md:left-20 max-w-5xl"
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <h2 className="text-[#379C8A] font-alternate font-medium tracking-widest uppercase pt-10 md:pt-20 lg:pt-20 text-5xl md:text-7xl lg:text-[145px] leading-none w-full">
            Our Values
          </h2>
          <p className="text-base md:text-lg lg:text-lg text-white font-semibold font-brandon tracking-wide uppercase">
            These three things keep us on course — whatever we do,
            and wherever in the world we find ourselves
          </p>

        </motion.div>

        {/* ---------------- CARDS ---------------- */}
        <div className="absolute inset-x-0 bottom-80 px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              style={{ opacity: card1Opacity, y: card1Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-xs uppercase tracking-widest text-orange-500 mb-2">
                Be
              </p>
              <h3 className="text-2xl font-bold uppercase text-orange-500 mb-4">
                Curious
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Ours is a wide, wild world. We ask questions, explore
                possibilities and embrace new ideas.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{ opacity: card2Opacity, y: card2Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-xs uppercase tracking-widest text-emerald-500 mb-2">
                Be
              </p>
              <h3 className="text-2xl font-bold uppercase text-emerald-500 mb-4">
                Thoughtful
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Because thinking is caring — for our clients,
                our partners and the planet we share.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              style={{ opacity: card3Opacity, y: card3Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-2">
                Be
              </p>
              <h3 className="text-2xl font-bold uppercase text-blue-600 mb-4">
                Humble
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Confident but never arrogant — calm under pressure,
                and always ready to listen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll space */}
      <div className="h-[350vh]" />
    </div>
    </div>
  );
}
