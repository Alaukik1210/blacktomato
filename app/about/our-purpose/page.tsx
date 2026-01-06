
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import OurPurposeSection from "@/components/OurpurposeSection";
import MissionScrollSection from "@/components/MissionScrollSection";
import OurValuesScrollSection from "@/components/OurValuesScrollSection";



export default function OurPurposePage() {
  return (
    <div className="bg-white">
      <Navbar appearance="page-gradient-static" />

      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/images/about/bg02.jpg')" }}
        className="min-h-[70vh] bg-cover bg-center px-4 md:px-8 lg:pl-60 relative"
      >
        <div className="container mx-auto px-4">
          <h4 className="text-[#379C8A] font-alternate font-medium tracking-widest uppercase pt-32 md:pt-40 lg:pt-60 text-5xl md:text-7xl lg:text-[145px] leading-none">
            ABOUT US
          </h4>
          <div className="flex flex-col md:flex-row justify-evenly pt-10 md:pt-20">
            <div className="text-white space-y-6 lg:pr-8 w-1/200 text-right"></div>
            <div className="text-white space-y-6 lg:pr-8 text-left md:text-right">
              <p className="text-sm tracking-wider uppercase pr-0 md:pr-100 text-[#379C8A]">
                ABOUT US
              </p>
              <h4 className="text-2xl md:text-4xl lg:text-5xl font-medium text-left leading-tight uppercase">
                AWARD-WINNING CREATORS OF
                <br />
                REMARKABLE TRAVEL EXPERIENCES
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* First Content Section - Overlapping Layout */}
      <div className="relative pb-20 md:pb-2">
        <div className="container mx-auto px-4 md:px-8 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative -mt-10 md:-mt-32 lg:-mt-60 z-10 w-full aspect-[4/3]">
              <Image
                src="/images/about/image.jpg"
                alt="Dramatic mountain landscape"
                height={800}
                width={500}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12">
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
                WHAT WE&apos;RE ABOUT
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                WE&apos;RE A TEAM
                <br />
                OF PEOPLE IN THE
                <br />
                KNOW ABOUT TRAVEL
              </h2>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-4/5 leading-relaxed">
                And we&apos;re on a mission to create remarkable experiences that
                thoughtfully connect our clients to the world and inspire them
                to explore it with curiosity, humility and a sense of wonder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Section - What We're About */}
      <div className="relative bg-white py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 lg:col-span-4 lg:pl-28">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                It began with a feeling
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
                Black Tomato was founded in 2005 by Tom, James and Matt
              </p>
              <p className="leading-relaxed text-gray-400 text-sm md:text-base lg:text-md">
                A trio of friends who wanted to sweep aside the prevailing
                current of &apos;package&apos; trips and same-same vacations.
              </p>
              <p className=" leading-relaxed text-gray-400 text-sm md:text-base lg:text-md">
                Since then, we&apos;ve become award-winning curators of tailor-made
                travel experiences – all crafted with inspirational engineering
                and an incomparable attention to detail. For us, the most
                important thing has always been: how do you want to feel? The
                rest is in the detail.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 -mt-10 md:-mt-48 lg:-mt-40 z-20 w-full lg:w-[60vw] lg:absolute lg:right-0">
              <Image
                src="/images/about/bg03.jpg"
                alt="Coastal mountain view"
                height={400}
                width={800}
                className="object-contain w-full md:w-[80%] lg:w-[80%] shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-20 md:pb-2 md:mt-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative -mt-10 md:-mt-32 lg:-mt-20 z-10 md:pl-20 w-full aspect-[4/3]">
              <Image
                src="/images/about/image-3.jpg"
                alt="Dramatic mountain landscape"
                height={650}
                width={450}
                className="object-contain"
               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12">
             
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                Unique, different, and daring
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
               And we want to make the remarkable happen
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-9/10 leading-relaxed">
                The journeys we make, make us. We learnt this from legendary travel writer Bruce Chatwin, speaking about the importance of living a “restless” life. When we plan trips for our clients, we want to strip away the barriers that can get between them and the world. They – you – are searching for the unexpected, the unfamiliar, the unknown. Restlessness helps.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full md:w-9/10 leading-relaxed">
                But so does expertise. Over the years, we&apos;ve assembled a team of travel fanatics – people who live and breathe the world and everything in it. They&apos;re starry-eyed wanderers with the organisational nous of precision engineers. These are the people who&apos;ll help you find your way. Even if that means getting &apos;lost&apos;.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-20 md:pb-2">
        <div className="container mx-auto px-4 md:px-8 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative -mt-10 md:-mt-32 lg:-mt-10 z-8 w-full lg:w-[120%] aspect-[4/3]">
              <Image
                src="/images/about/bg04.jpg"
                alt="Dramatic mountain landscape"
                height={1200}
                width={1200}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"

              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-3 lg:pl-40 order-2 lg:order-1 lg:mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
               We&apos;ll show you the world
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
               And in an entirely new light
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full  leading-relaxed">
                We curate trips for travellers who want to see the world up close – foregoing &apos;tick lists&apos; and tourist traps in favour of deeper and more intimate connections with the world and its cultures.
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-md w-full  leading-relaxed">
               Today, we take people to all seven continents, designing all of our trips from the ground up. This way, no two journeys are ever quite alike. Trekking with the tribes of Borneo; learning the trade of tanning in Morocco; joining the jostling crowds of Sienna&apos;s palio. It&apos;s a wide, wild world. And your travels should be the same.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="relative bg-white py-12 md:py-16 lg:py-24 px-4 md:pl-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 lg:col-span-5 lg:pl-60">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
               Regenerative Travel
              </h2>
              <p className="text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
              A Lasting Impact For A Changing World
              </p>
              <p className="leading-relaxed text-gray-400 text-sm md:text-base lg:text-md">
               At Black Tomato, we know you’re seeking travel experiences that will leave a lasting, positive impact on our planet and the communities that call it home. This is a belief we also share, and it has been since our founding in 2005.
              </p>
              <div className="mb-20 ">
<button className="bg-black py-2 rounded-sm  text-white w-2/5">Find out more</button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 -mt-10 md:-mt-20 lg:-mt-20 z-20 w-full lg:w-[60vw] lg:absolute lg:left-[900px]">
              <Image
                src="/images/about/bg05.jpg"
                alt="Coastal mountain view"
                height={400}
                width={800}
                className="object-contain w-full md:w-[65%] lg:w-[65%] shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
       <OurPurposeSection/>
       <MissionScrollSection/>
       <OurValuesScrollSection/>
      </section>
    </div>
  );
}