import Image from "next/image";

export default function HowWeAreDifferent() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-gray-700">
            THE LUXURY TRAVEL EXPERTS
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            We specialise in creating remarkable, tailor-made experiences that
            thoughtfully connect our clients to the world and inspire them to
            explore it with curiosity, humility and a sense of wonder.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            So let’s begin. Let’s do something remarkable.
          </p>

          <button className="mt-8 bg-black px-6 py-3 text-xs font-semibold tracking-widest text-white hover:bg-gray-800">
            START YOUR JOURNEY
          </button>
        </div>

        {/* Section Title */}
        <h2 className="mt-24 text-center text-2xl font-semibold tracking-widest font-brandon">
          HOW WE’RE DIFFERENT
        </h2>

        {/* Cards */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div>
            <Image
              height={200}
              width={300}
              src="/images/triple-creek-ranch.avif"
              alt="Luxury expertise"
              className="w-full object-cover"
            />

            <h3 className="mt-6 text-sm font-semibold tracking-widest font-brandon">
              20 YEARS OF LUXURY EXPERTISE
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We’re award-winning luxury travel experts – people who live and
              breathe the world and everything in it. Featured in Condé Nast,
              Vogue, and Travel + Leisure.
            </p>
          </div>

          {/* Card 2 */}
          <div>
           <Image
              height={200}
              width={300}
              src="/images/triple-creek-ranch.avif"
              alt="Luxury expertise"
              className="w-full object-cover"
            />

            <h3 className="mt-6 text-sm font-semibold tracking-widest font-brandon">
              UNPARALLELED ACCESS
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We curate trips for travellers who want to see the world up close
              – foregoing ‘tick lists’ and tourist traps in favour of deeper and
              more intimate connections.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <Image
              height={200}
              width={300}
              src="/images/triple-creek-ranch.avif"
              alt="Luxury expertise"
              className="w-full object-cover"
            />

            <h3 className="mt-6 text-sm font-semibold tracking-widest font-brandon">
              COMPLETELY BESPOKE
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Each trip we plan is different. We’re here to help you experience
              the world on your terms – to follow your dreams and pursue your
              passions.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <button className="border border-black px-6 py-3 text-xs font-semibold tracking-widest hover:bg-black hover:text-white">
            LEARN ABOUT OUR PROCESS
          </button>
        </div>
      </div>
    </section>
  );
}
