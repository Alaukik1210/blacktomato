import type { JSX } from "react";

interface Feature {
  title: string;
  icon: JSX.Element;
  color: string;
}

const features: Feature[] = [
  {
    title: "Award-winning planners",
    color: "text-amber-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.5 5 5.5.5-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-.5L12 2z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "No-obligation quotes",
    color: "text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v12H4z" />
        <path d="M8 20h8" />
        <path d="M12 8v4" />
        <path d="M10 10h4" />
      </svg>
    ),
  },
  {
    title: "No planning fees",
    color: "text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 6l9-4 9 4v12l-9 4-9-4z" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    title: "24/7 on the ground support",
    color: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16.5a3 3 0 01-3 3h-1l-4 3v-3H6a3 3 0 01-3-3v-9a3 3 0 013-3h12a3 3 0 013 3z" />
        <path d="M12 8v4" />
        <path d="M12 14h.01" />
      </svg>
    ),
  },
  {
    title: "Expert private guides",
    color: "text-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 22v-2a6 6 0 0112 0v2" />
      </svg>
    ),
  },
];

export default function WhyBlackTomato(): JSX.Element {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-sm tracking-[0.35em] font-semibold mb-20">
          WHY BLACK TOMATO?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`w-10 h-10 mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <p className="text-sm text-gray-800 text-center max-w-[160px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16" />

        {/* Trustpilot */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <span className="underline">Excellent</span>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="w-4 h-4 bg-emerald-500 text-white flex items-center justify-center text-xs"
              >
                ★
              </span>
            ))}
          </div>

          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-semibold">★</span> Trustpilot
          </span>
        </div>
      </div>
    </section>
  );
}
