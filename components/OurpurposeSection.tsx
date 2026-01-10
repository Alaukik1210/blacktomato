"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function OurPurposeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create smooth transitions for each section
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.25, 0.5], [100, 0, -100]);

const section4Opacity = useTransform(
  scrollYProgress,
  [0.75, 0.85, 1],
  [0, 1, 1]
);

// Section 3 opacity (UNCHANGED)
// Section 3 opacity
const section3Opacity = useTransform(
  scrollYProgress,
  [0.4, 0.5, 0.65, 0.75],
  [0, 1, 1, 0]
);

// Section 3 motion finishes early
const section3RightY = useTransform(
  scrollYProgress,
  [0.4, 0.5],
  [-150, 0]
);

const section3LeftY = useTransform(
  scrollYProgress,
  [0.4, 0.5],
  [150, 0]
);




const section4RightY = useTransform(
  scrollYProgress,
  [0.75, 0.85],
  [150, 0]
);

const section4LeftY = useTransform(
  scrollYProgress,
  [0.75, 0.85],
  [-150, 0]
);



  // Background color transition - smoother gradient
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["transparent", "transparent", "transparent", "transparent", "transparent"]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed background section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image - Always visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about/bg06.jpg')" }}
        />
        
        {/* Colored overlay that changes */}
        <motion.div 
          className="absolute inset-0"
          style={{ backgroundColor }}
        />

        {/* Section 1: Hero */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: section1Opacity, y: section1Y }}
        >
          <div className="text-center px-6 max-w-5xl">
            <h2
              className="text-5xl md:text-7xl lg:text-[150px] font-medium text-[#1E6E9F] tracking-wider"
             
            >
              OUR PURPOSE
            </h2>
            <p className="text-2xl md:text-3xl lg:text-6xl font-alternate font-medium text-white uppercase tracking-widest ">
              TO INSPIRE PEOPLE THROUGH
              <br />
              REMARKABLE TRAVEL EXPERIENCES
            </p>
          </div>
        </motion.div>

        {/* Section 2: Impact Statement */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: section2Opacity, y: section2Y }}
        >
          <div className="text-center px-6 max-w-6xl">
            <p className="text-xl md:text-2xl lg:text-6xl font-medium uppercase font-alternate tracking-wider ">
              <span className="text-white">WE EXIST TO CREATE A LASTING IMPACT FOR OUR </span><br/>
              <span style={{ color: "#CC5426" }}>CLIENTS</span>
              <span className="text-white">, OUR </span>
              <span style={{ color: "#379C8A" }}>PARTNERS</span>
              <span className="text-white"> AND THE </span>
              <span style={{ color: "#379C8A" }}>COMMUNITIES</span><br/>
              <span className="text-white"> WE ENGAGE WITH.</span>
            </p>
          </div>
        </motion.div>

        {/* Section 3: For Clients - Split Screen */}
        <motion.div
          className="absolute inset-0 flex items-center"
          style={{ opacity: section3Opacity }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row">
            {/* Left: Image */}
            <motion.div
              className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden"
              style={{ y: section3LeftY }}
            >
              <motion.div
                className="w-full h-full relative"
                
              >
                <Image
                  src="/images/about/bg07.jpg"
                  alt="Campfire experience"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center px-8 lg:px-20 "
              style={{ y: section3RightY }}
            >
              <div className="max-w-lg lg:mr-40">
                <h3
                  className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 uppercase tracking-wider"
                  style={{ color: "#CC5426" }}
                >
                  FOR CLIENTS
                </h3>
                <p className="text-base md:text-lg lg:text-lg text-white font-semibold font-brandon tracking-wide uppercase">
                  WE OFFER EXPERIENCES THAT ENRICH <br/> THEIR LIVES AND CREATE
                  LIFELONG MEMORIES.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 4: For Partners - Split Screen */}
        <motion.div
          className="absolute inset-0 flex items-center"
          style={{ opacity: section4Opacity }}
        >
          <div className="w-full h-full flex flex-col lg:flex-row">
            {/* Left: Content */}
            <motion.div
              className="w-full lg:w-1/2 h-1/2 lg:h-full  flex items-center justify-center px-8 lg:px-20  order-2 lg:order-1"
              style={{ y: section4LeftY }}
            >
              <div className="max-w-lg lg:mr-40">
                <h3
                  className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6 uppercase tracking-wider"
                  style={{ color: "#379C8A" }}
                >
                  FOR PARTNERS
                  <br />
                  AND LOCAL COMMUNITIES
                </h3>
                <p className="text-base md:text-lg lg:text-lg text-white font-semibold font-brandon tracking-wide uppercase">
                  IT&apos;S ABOUT FOSTERING SUSTAINABLE, REGENERATIVE INTERACTIONS,
                  SUPPORTING LOCAL ECONOMIES, PRESERVING CULTURAL HERITAGE AND
                  PROMOTING AN APPRECIATION OF DIVERSE WAYS OF LIFE.
                </p>
                <p className="text-base md:text-lg lg:text-lg text-white font-semibold font-brandon tracking-wide uppercase">
                  ULTIMATELY, WE BELIEVE THAT TRAVEL IS A GENUINE FORCE FOR GOOD.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden order-1 lg:order-2"
              style={{ y: section4RightY }}
            >
              <motion.div
                className="w-full h-full relative"
                
              >
                <Image
                  src="/images/about/bg08.jpg"
                  alt="Traditional weaving"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Spacer div to create scroll space */}
      <div className="h-[400vh]" />
    </div>
  );
}