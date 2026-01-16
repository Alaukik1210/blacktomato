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
        className="min-h-[70vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:pl-60 relative"
      >
        <div className="container md:px-4">
          {/* Heading */}
          <h4 className="text-[#379C8A] font-alternate font-medium tracking-widest uppercase pt-28 md:pt-28 lg:pt-60 text-8xl md:text-[145px] leading-none">
            ABOUT US
          </h4>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row lg:justify-evenly pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-8 sm:pb-12 md:pb-0">
            {/* Hidden spacer for desktop */}
            <div className="text-white hidden lg:block space-y-6 lg:pr-8 text-right"></div>

            {/* Main Content */}
            <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mt-36 lg:mt-2 md:mt-12 lg:pr-8 text-left md:text-left max-w-full md:max-w-2xl lg:max-w-none">
              {/* Small heading */}
              <p className="text-sm tracking-wider font-semibold uppercase text-[#379C8A]">
                ABOUT US
              </p>

              {/* Large heading */}
              <h4 className="text-4xl sm:text-4xl tracking-wider md:text-5xl lg:text-5xl font-medium uppercase leading-tight">
                AWARD-WINNING CREATORS OF
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                REMARKABLE TRAVEL{" "}
                <span className="inline sm:hidden"><br /></span>
                EXPERIENCES
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* First Content Section - Overlapping Layout */}
      <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-2">
        <div className="container lg:mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr] md:gap-4 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative -mt-8 sm:-mt-10 md:-mt-40 lg:-mt-60 z-10  pr-60 w-[670px] md:w-[620px] md:h-[700px] lg:w-[800px] aspect-[4/3]">
              <Image
                src="/images/about/Image.jpg"
                alt="Dramatic mountain landscape"
                height={800}
                width={500}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-3 px-6 md:px-0 lg:pl-20 order-2 lg:order-1 lg:mb-12 mt-6 sm:mt-8 md:-mt-24 lg:mt-0">
              <p className="text-md sm:text-md md:text-sm tracking-wider font-semibold uppercase text-gray-800">
                WHAT WE&apos;RE ABOUT
              </p>
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-medium lg:tracking-wider tracking-wider lg:leading-widest uppercase">
                WE&apos;RE A TEAM&nbsp;
                <br className="hidden lg:block" />
                OF PEOPLE IN THE&nbsp;
                <br className="hidden lg:block" />
                KNOW ABOUT TRAVEL
              </h2>
              <p className="text-gray-500 text-md sm:text-base md:text-base  lg:text-md w-full sm:w-[95%] md:w-full lg:w-4/5 leading-relaxed lg:leading-loose">
                And we&apos;re on a mission to create remarkable experiences
                that thoughtfully connect our clients to the world and inspire
                them to explore it with curiosity, humility and a sense of
                wonder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Section - What We're About */}
      <div className="relative bg-white py-12 sm:py-14 md:py-16 mt-4 md:mt-20 lg:mt-0  lg:py-24 px-4 sm:px-6 md:px-8 lg:px-32 ">
        <div className="container md:mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 w-full md:w-4/5 lg:order-1 lg:col-span-4 lg:pl-28">
              <h2 className="text-4xl  md:text-5xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                It began with a feeling
              </h2>
              <p className="text-xs sm:text-xs md:text-sm tracking-wider font-medium uppercase text-gray-500">
                Black Tomato was founded in 2005 by Tom, James and Matt
              </p>
              <p className="leading-relaxed text-gray-600 text-sm sm:text-sm md:text-base lg:text-md">
                A trio of friends who wanted to sweep aside the prevailing
                current of &apos;package&apos; trips and same-same vacations.
              </p>
              <p className="leading-relaxed text-gray-600 text-sm sm:text-sm md:text-base lg:text-md">
                Since then, we&apos;ve become award-winning curators of
                tailor-made travel experiences – all crafted with inspirational
                engineering and an incomparable attention to detail. For us, the
                most important thing has always been: how do you want to feel?
                The rest is in the detail.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 -mt-8 sm:-mt-10 lg:ml-0 md:ml-68 md:-mt-88 lg:-mt-40 z-20 w-full md:w-[620px] lg:w-[60vw] lg:absolute lg:right-0">
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

      {/* Third Section */}
      <div className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-2 md:mt-20">
        <div className="container lg:mx-auto px-4 sm:px-6 md:px-8 lg:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  sm:gap-8 lg:gap-16 lg:items-center">
            {/* Left Image */}
            <div className="relative -mt-8 sm:-mt-10 md:-mt-32 lg:-mt-20 z-10 w-full lg:scale-120 md:pl-0 lg:pl-20 aspect-[4/3]">
              <Image
                src="/images/about/Image-3.jpg"
                alt="Dramatic mountain landscape"
                height={650}
                width={450}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-3 lg:pl-8 order-2 lg:order-1 lg:mb-12 ">
              <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                Unique, different, and daring
              </h2>
              <p className="text-xs sm:text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
                And we want to make the remarkable happen
              </p>
              <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md w-full leading-relaxed">
                The journeys we make, make us. We learnt this from legendary
                travel writer Bruce Chatwin, speaking about the importance of
                living a &ldquo;restless&rdquo; life. When we plan trips for our clients, we
                want to strip away the barriers that can get between them and
                the world. They – you – are searching for the unexpected, the
                unfamiliar, the unknown. Restlessness helps.
              </p>
              <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md w-full leading-relaxed">
                But so does expertise. Over the years, we&apos;ve assembled a
                team of travel fanatics – people who live and breathe the world
                and everything in it. They&apos;re starry-eyed wanderers with
                the organisational nous of precision engineers. These are the
                people who&apos;ll help you find your way. Even if that means
                getting &apos;lost&apos;.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-2">
        <div className="container lg:mx-auto px-4 sm:px-6 md:px-0 lg:px-32 md:max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center  md:overflow-hidden">
            {/* Left Image */}
            <div className="relative  -mt-8 sm:-mt-10 md:-mt-32 lg:-mt-10 z-8 w-full md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] lg:ml-0 lg:mr-0 lg:left-0 lg:right-0 lg:w-[120%] aspect-[4/3]">
              <Image
                src="/images/about/bg04.jpg"
                alt="Dramatic mountain landscape"
                height={1200}
                width={1200}
                className="object-cover md:object-cover lg:object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 500px"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-3 md:px-8 lg:px-0 lg:pl-40 order-2 lg:order-1 lg:mb-12">
              <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                We&apos;ll show you the world
              </h2>
              <p className="text-xs sm:text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
                And in an entirely new light
              </p>
              <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-md w-full leading-relaxed">
                We curate trips for travellers who want to see the world up
                close – foregoing &apos;tick lists&apos; and tourist traps in
                favour of deeper and more intimate connections with the world
                and its cultures.
              </p>
              <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-md w-full leading-relaxed">
                Today, we take people to all seven continents, designing all of
                our trips from the ground up. This way, no two journeys are ever
                quite alike. Trekking with the tribes of Borneo; learning the
                trade of tanning in Morocco; joining the jostling crowds of
                Sienna&apos;s palio. It&apos;s a wide, wild world. And your
                travels should be the same.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regenerative Travel Section */}
      <div className="relative bg-white py-12 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 md:pl-20 overflow-hidden">
        <div className="container lg:mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 lg:col-span-5 lg:pl-60">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                Regenerative Travel
              </h2>
              <p className="text-xs sm:text-xs md:text-sm tracking-wider font-medium uppercase text-gray-600">
                A Lasting Impact For A Changing World
              </p>
              <p className="leading-relaxed text-gray-600 text-sm sm:text-sm md:text-base lg:text-md">
                At Black Tomato, we know you&apos;re seeking travel experiences that
                will leave a lasting, positive impact on our planet and the
                communities that call it home. This is a belief we also share,
                and it has been since our founding in 2005.
              </p>
              <div className="mb-12 sm:mb-16 lg:mb-20">
                <button className="bg-black py-2 px-6 sm:px-8 rounded-sm text-white text-sm sm:text-base w-auto sm:w-2/5 lg:w-2/5">
                  Find out more
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 -mt-8 sm:-mt-10 md:-mt-20 lg:-mt-20 z-20 w-full lg:w-[60vw] lg:absolute lg:left-[900px]">
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
        <OurPurposeSection />
        <MissionScrollSection />
        <OurValuesScrollSection />

        <section className="relative w-full px-4 sm:px-6 lg:px-0">
          <div className="relative w-full aspect-video rounded-md">
            <video
              className="absolute inset-0 h-full w-full object-cover will-change-transform z-30"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              controls={false}
              aria-label="Background hero video"
            >
              <source
                src="https://download-video-ak.vimeocdn.com/v3-1/playback/572a841d-eea5-4838-95da-6734b47cc0ae/12c0fad1-cbae0fcb?__token__=st=1768230667~exp=1768234267~acl=%2Fv3-1%2Fplayback%2F572a841d-eea5-4838-95da-6734b47cc0ae%2F12c0fad1-cbae0fcb%2A~hmac=0e120a429ba41a4553670dad0ab86189c6a0339c0109827c4abc33965c4845e3&r=dXMtZWFzdDE%3D"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h4 className="text-[#023B66] font-alternate font-medium tracking-widest uppercase pt-8 sm:pt-10 md:pt-12 text-4xl sm:text-5xl md:text-7xl lg:text-[145px] leading-none">
            OUR JOURNEY
          </h4>
        </div>

        {/* Why The Name Section */}
        <div className="relative bg-white py-12 sm:py-14 md:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="container mx-auto px-4 max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                  Why the name?
                </h2>
                <p className="text-xs sm:text-xs md:text-sm tracking-wider font-medium uppercase text-gray-500">
                  RARE & REMARKABLE
                </p>
                <p className="leading-relaxed text-gray-400 text-sm sm:text-sm md:text-base lg:text-md">
                  It all goes back to when Tom, James and Matt were traveling in
                  Eastern Europe. One evening, somewhere in the backstreets,
                  they encountered the black tomato on a menu. When they asked
                  about it, they were told they should never pass up the chance
                  to enjoy this &apos;rare and remarkable&apos; experience. From
                  that point on the founders set out to become the black tomato
                  of travel. Offering rare and remarkable experiences to their
                  curious clients.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative order-1 lg:order-2 -mt-8 sm:-mt-10 md:-mt-48 lg:-mt-40 z-0 w-full lg:w-[35vw] lg:absolute lg:-right-24">
                <Image
                  src="/images/about/bg14.jpg"
                  alt="Canyon with Black Tomato branding"
                  height={550}
                  width={1150}
                  className="object-contain w-full md:w-[85%] lg:w-[85%] shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Your World Your Trips Section */}
        <div className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-2 md:mt-60">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="relative -mt-8 sm:-mt-10 md:-mt-32 lg:mt-6 z-12 w-full md:pl-0 lg:pl-20 md:ml-0 lg:ml-20 aspect-[4/3]">
                <Image
                  src="/images/about/bg11.jpg"
                  alt="Boat on turquoise water"
                  height={650}
                  width={450}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-3 sm:space-y-4 md:space-y-3 lg:pl-52 order-2 lg:order-1 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-widest uppercase">
                  Your world. Your trips.
                </h2>
                <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md w-full leading-relaxed">
                  Like a perfectly tailored suit, each trip we plan is
                  different; just as each traveller is different. We&apos;re
                  here to help you experience the world on your terms – to
                  follow your dreams, to pursue your passions. With obsessive
                  attention to detail and extraordinary customer client service,
                  we&apos;re all about the personal. It&apos;s your world.
                  It&apos;s your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-8 sm:my-10 md:my-12 lg:my-4 px-4">
        <div className="uppercase text-xl sm:text-2xl md:text-3xl tracking-wider font-brandon font-semibold text-center">
          feel something new
        </div>
        <button className="text-white bg-black text-xs px-4 sm:px-6 font-medium tracking-wider py-2 mt-4 mx-auto block">
          OUR TRAVEL CALENDAR
        </button>
      </div>

      <section className="w-full">
        <Image
          src="/images/about/bg12.jpg"
          alt="Scenic landscape"
          height={600}
          width={2400}
          className="object-cover w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2400px"
        />
      </section>
    </div>
  );
}