import Image from "next/image";

const DIFFERENCE_CARDS = [
  {
    id: 1,
    title: "20 YEARS OF LUXURY EXPERTISE",
    description:
      "We’re award-winning luxury travel experts – people who live and breathe the world and everything in it. Featured in Condé Nast, Vogue, and Travel + Leisure.",
    image: "/images/triple-creek-ranch.avif",
  },
  {
    id: 2,
    title: "UNPARALLELED ACCESS",
    description:
      "We curate trips for travellers who want to see the world up close – foregoing ‘tick lists’ and tourist traps in favour of deeper and more intimate connections.",
    image: "/images/triple-creek-ranch.avif",
  },
  {
    id: 3,
    title: "COMPLETELY BESPOKE",
    description:
      "Each trip we plan is different. We’re here to help you experience the world on your terms – to follow your dreams and pursue your passions.",
    image: "/images/triple-creek-ranch.avif",
  },
];

export default function HowWeAreDifferent() {
  return (
    <section className=" px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center bg-black/50" style={{ backgroundImage: "url('/images/Text-Centered-Home.jpg')" }}>
          <p className="text-lg  tracking-[0.1em] font-semibold text-black">
            THE LUXURY TRAVEL EXPERTS
          </p>

          <p className="mt-6 md:text-md font-brandon2 md:font-light font-light text-lg leading-7 text-gray-500">
           Travel should feel inspiring, never overwhelming. We believe exceptional journeys begin with understanding what truly matters to you - not just the destination, but the feeling you want to arrive with. That’s why we take the time to listen first. We thoughtfully handle every detail, offering considered insights drawn from our own experiences, and curate journeys that feel deeply personal. No pressure, no templates - just discreet guidance and seamless planning, shaped around your story.
          </p>

         

          <button className="mt-4 bg-black px-6 py-3 text-xs font-semibold tracking-widest text-white hover:bg-gray-800">
            START YOUR JOURNEY
          </button>
        </div>

        {/* Section Title */}
        <h2 className="md:mt-24 mt-12 text-center text-5xl font-medium tracking-widest font-alternate">
          HOW WE’RE DIFFERENT
        </h2>

        {/* Cards */}
        <div className="md:mt-16 mt-8 grid gap-6  md:grid-cols-3">
          {DIFFERENCE_CARDS.map((card, index) => (
            <div key={card.id}>
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />

              <h3
                className={`md:mt-4 mt-2 lg:text-md text-md font-semibold font-brandon   tracking-[1.5] ${
                  index === 0 ? "text-left" : index === 1 ? "text-center" : "text-right"
                }`}
              >
                {card.title}
              </h3>

              <p
                className={`mt-2 text-md leading-6 text-gray-500 font-brandon2 ${
                  index === 0 ? "text-left" : index === 1 ? "text-center" : "text-right"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button className="border border-black px-6 py-3 text-xs font-semibold tracking-widest hover:bg-black hover:text-white">
            LEARN ABOUT OUR PROCESS
          </button>
        </div>
      </div>
    </section>
  );
}