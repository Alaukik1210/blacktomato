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
    color: "text-orange-500",
  },
  {
    number: "02",
    title: "RECEIVE YOUR FREE QUOTE",
    description:
      "Without a ‘booking fee’ attached, which we’ve never believed in.",
    color: "text-emerald-500",
  },
  {
    number: "03",
    title: "WE REFINE TOGETHER",
    description:
      "Until it fits you perfectly. We want you to feel totally comfortable with your plan.",
    color: "text-sky-600",
  },
  {
    number: "04",
    title: "YOU TRAVEL",
    description:
      "With confidence and 24/7 support throughout your journey.",
    color: "text-blue-900",
  },
];

export default function JourneySection(): JSX.Element {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-xl tracking-[0.15em] font-semibold mb-20">
          YOUR JOURNEY TO REMARKABLE TRAVEL
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number */}
              <div
                className={`text-7xl lg:text-8xl font-bold mb-6 ${step.color} leading-none`}
                style={{ height: "auto", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "120px" }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                className={`text-sm tracking-widest font-semibold mb-4 ${step.color}`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs mx-auto font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button className="border border-black px-8 py-3 text-xs tracking-widest hover:bg-black hover:text-white transition">
            START YOUR FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
