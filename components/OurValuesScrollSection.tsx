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
          className="absolute top-24 left-8 md:left-20 max-w-6xl"
          style={{ opacity: headingOpacity, y: headingY }}
        ><div className="max-w-6xl md:mx-60 md:my-12">

          <h2 className="text-[#379C8A] font-alternate font-medium tracking-wide uppercase pt-10 md:pt-20 lg:pt-20 text-5xl md:text-7xl lg:text-[145px] leading-none w-full">
            Our Values
          </h2>
          <p className="text-base md:text-lg lg:text-lg text-white font-semibold font-brandon tracking-wide uppercase">
            These three things keep us on course — whatever we do,
            and wherever in the world we find ourselves
          </p>

        </div>
        </motion.div>

        {/* ---------------- CARDS ---------------- */}
        <div className="absolute inset-x-0 bottom-48 px-8 md:px-20 md:mx-52">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              style={{ opacity: card1Opacity, y: card1Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-md uppercase font-brandon font-semibold tracking-widest text-[#CC5426] ">
                Be
              </p>
              <h3 className="text-6xl font-alternate tracking-wider font-medium uppercase text-[#CC5426] mb-2">
                Curious
              </h3>
              <h4 className="text-md uppercase tracking-widest font-semibold font-brandon py-2 text-gray-700">
                Ours is a wide, wild world. 
              </h4>
              <p className="text-gray-500">
                We like to ask questions. How can this be better? Where next? What&apos;s genuinely possible, and what do our clients really want? Put another way, we love questions – and we love innovators.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              style={{ opacity: card2Opacity, y: card2Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-md uppercase font-brandon font-semibold tracking-widest text-[#379C8A] ">
                Be
              </p>
              <h3 className="text-6xl font-alternate tracking-wider font-medium uppercase text-[#379C8A] mb-2">
                Thoughtful
              </h3>
              <h4 className="text-md uppercase tracking-widest font-semibold font-brandon py-2 text-gray-700">
                Because thinking is caring
              </h4>
              <p className="text-gray-500">
                Good things come to those who think. And, in our world, to think is to care. Not only for our clients, but for each other – and the planet that we share.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              style={{ opacity: card3Opacity, y: card3Y }}
              className="bg-white p-8 shadow-lg"
            >
              <p className="text-md uppercase font-brandon font-semibold tracking-widest text-[#1E40AF] ">
                Be
              </p>
              <h3 className="text-6xl font-alternate tracking-wider font-medium uppercase text-[#1E40AF] mb-2">
                Humble
              </h3>
              <h4 className="text-md uppercase tracking-widest font-semibold font-brandon py-2 text-gray-700">
                Let others do the talking
              </h4>
              <p className="text-gray-500">
                We don&apos;t get carried away. We don&apos;t get caught up in the hype. We&apos;re calmly confident in what we do; graceful under pressure, proud but never arrogant about our achievements.
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
