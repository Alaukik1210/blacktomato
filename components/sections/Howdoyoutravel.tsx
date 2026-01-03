"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------- Types ---------- */
interface TravelItem {
  title: string;
  imageUrl: string;
}

/* ---------- Data ---------- */
const BY_TRAVELLER: TravelItem[] = [
  { title: "FAMILY", imageUrl: "/images/dest.png" },
  { title: "COUPLES", imageUrl: "/images/dest.png" },
  { title: "GROUPS", imageUrl: "/images/dest.png" },
  { title: "HONEYMOON", imageUrl: "/images/dest.png" },
  { title: "SOLO", imageUrl: "/images/dest.png" },
];

const BY_MONTH: TravelItem[] = [
  { title: "JANUARY", imageUrl: "/images/dest.png" },
  { title: "FEBRUARY", imageUrl: "/images/dest.png" },
  { title: "MARCH", imageUrl: "/images/dest.png" },
  { title: "APRIL", imageUrl: "/images/dest.png" },
  { title: "MAY", imageUrl: "/images/dest.png" },
  { title: "JUNE", imageUrl: "/images/dest.png" },
  { title: "JULY", imageUrl: "/images/dest.png" },
  { title: "AUGUST", imageUrl: "/images/dest.png" },
  { title: "SEPTEMBER", imageUrl: "/images/dest.png" },
  { title: "OCTOBER", imageUrl: "/images/dest.png" },
  { title: "NOVEMBER", imageUrl: "/images/dest.png" },
  { title: "DECEMBER", imageUrl: "/images/dest.png" },
];

const BY_DESTINATION: TravelItem[] = [
  { title: "TANZANIA", imageUrl: "/images/dest.png" },
  { title: "ITALY", imageUrl: "/images/dest.png" },
  { title: "FRANCE", imageUrl: "/images/dest.png" },
  { title: "SOUTH AFRICA", imageUrl: "/images/dest.png" },
  { title: "UNITED KINGDOM", imageUrl: "/images/dest.png" },
  { title: "USA", imageUrl: "/images/dest.png" },
  { title: "JAPAN", imageUrl: "/images/dest.png" },
  { title: "KENYA", imageUrl: "/images/dest.png" },
  { title: "NORWAY", imageUrl: "/images/dest.png" },
  { title: "MADAGASCAR", imageUrl: "/images/dest.png" },
];

/* ---------- Component ---------- */
export default function HowDoYouTravel() {
  const [activeTab, setActiveTab] = useState<"traveller" | "destination" | "month">("traveller");

  const data =
    activeTab === "traveller"
      ? BY_TRAVELLER
      : activeTab === "destination"
      ? BY_DESTINATION
      : BY_MONTH;

  const isMonthTab = activeTab === "month";

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light tracking-widest font-alternate">
          HOW DO YOU TRAVEL?
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-4 sm:gap-8 text-xs tracking-widest flex-wrap">
          {[
            { id: "traveller", label: "BY TRAVELLER" },
            { id: "destination", label: "BY DESTINATION" },
            { id: "month", label: "BY MONTH" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "traveller" | "destination" | "month")}
              className={`relative pb-2 cursor-pointer ${
                activeTab === tab.id
                  ? "text-pink-600"
                  : "text-black/70"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-pink-600" />
              )}
            </button>
          ))}
        </div>

        {/* Grid - Responsive based on tab and screen size */}
        {isMonthTab ? (
          // MONTH TAB: full-width below md, 3-col grid on md+
          <div className="mt-16 gap-4 sm:gap-6">
            {/* Mobile: full width, less height */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-24 overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Darken on hover */}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs font-semibold tracking-widest text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: 3-col grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/5] overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Darken on hover */}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm font-semibold tracking-widest text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // TRAVELLER & DESTINATION TABS: full-width below md, 5-col grid above md
          <div className="mt-16">
            {/* Mobile: full width, less height */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-24 overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Darken on hover */}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs font-semibold tracking-widest text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: 5-col grid */}
            <div className="hidden md:grid grid-cols-5 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/5] overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Darken on hover */}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm font-semibold tracking-widest text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {(activeTab === "destination" || activeTab === "traveller") &&
          <div className="mt-16 flex justify-center">
            <button className="bg-black px-6 py-3 text-xs tracking-widest text-white hover:bg-black/80 transition">
              VIEW MORE
            </button>
          </div>
        }
      </div>
    </section>
  );
}
