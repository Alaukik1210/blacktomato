import type { JSX } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "YOU ENQUIRE",
    description:
      "Using our online form. We’ll then have a conversation (or two).",
    color: "text-[#CC5426]",
  },
  {
    number: "02",
    title: "RECEIVE YOUR FREE QUOTE",
    description:
      "Without a ‘booking fee’ attached, which we’ve never believed in.",
    color: "text-[#379C8A]",
  },
  {
    number: "03",
    title: "WE REFINE TOGETHER",
    description:
      "Until it fits you perfectly. We want you to feel totally comfortable with your plan.",
    color: "text-[#1E6E9F]",
  },
  {
    number: "04",
    title: "YOU TRAVEL",
    description:
      "With confidence and 24/7 support throughout your journey.",
    color: "text-[#023B66]",
  },
];

export default function JourneySection(): JSX.Element {
  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl tracking-wider font-medium mb-8 font-alternate">
          YOUR JOURNEY TO REMARKABLE TRAVEL
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number */}
              <div
                className={`font-alternate mb-6 ${step.color} leading-tight h-24 lg:h-32 flex items-center justify-center`}
                style={{ fontSize: "160px" }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                className={`text-xl tracking-wide font-semibold pt-4 mb-4 font-brandon ${step.color}`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-md text-gray-500 leading-relaxed max-w-xs mx-auto font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button className="border border-black px-8 py-3 text-xs rounded-xs font-bold tracking-widest hover:bg-black hover:text-white transition">
            START YOUR FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}