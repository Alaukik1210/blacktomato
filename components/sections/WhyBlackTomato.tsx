import Image from "next/image";
import type { JSX } from "react";

interface Feature {
  title: string;
  icon: string;
  color: string;
}

const features: Feature[] = [
  {
    title: "Award-winning planners",
    color: "text-amber-500",
    icon: "/images/icons-comp/UHVNpPRV-award-icon.svg",
  },
  {
    title: "No-obligation quotes",
    color: "text-orange-500",
    icon: "/images/icons-comp/Icons-1.svg",
  },
  {
    title: "No planning fees",
    color: "text-emerald-500",
    icon: "/images/icons-comp/1.svg",
  },
  {
    title: "24/7 on the ground support",
    color: "text-sky-600",
    icon: "/images/icons-comp/MSa4gZI8-support.svg",
  },

  {
    title: "Expert private guides",
    color: "text-purple-500",
    icon: "/images/icons-comp/icons.svg",
  },
];

export default function WhyBlackTomato(): JSX.Element {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl tracking-[0.15em] font-medium mb-20 font-alternate">
          WHY BLACK TOMATO?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.title}
                height={200}
                width={200}
                className={`w-20 h-20 mb-2 ${item.color}`}
              />
              <p className="text-lg text-gray-600 text-center max-w-[160px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8" />

        {/* Trustpilot */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <span className="underline">Excellent</span>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="w-4 h-4 bg-emerald-500 text-white flex items-center justify-center text-sm"
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
