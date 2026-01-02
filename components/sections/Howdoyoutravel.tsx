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
  { title: "FAMILY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "COUPLES", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "GROUPS", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "HONEYMOON", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "SOLO", imageUrl: "/images/triple-creek-ranch.avif" },
];

const BY_MONTH: TravelItem[] = [
  { title: "JANUARY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "FEBRUARY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "MARCH", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "APRIL", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "MAY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "JUNE", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "JULY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "AUGUST", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "SEPTEMBER", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "OCTOBER", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "NOVEMBER", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "DECEMBER", imageUrl: "/images/triple-creek-ranch.avif" },
];

const BY_DESTINATION: TravelItem[] = [
  { title: "TANZANIA", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "ITALY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "FRANCE", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "SOUTH AFRICA", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "UNITED KINGDOM", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "USA", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "JAPAN", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "KENYA", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "NORWAY", imageUrl: "/images/triple-creek-ranch.avif" },
  { title: "MADAGASCAR", imageUrl: "/images/triple-creek-ranch.avif" },
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

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold tracking-widest font-brandon">
          HOW DO YOU TRAVEL?
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-8 text-xs tracking-widest">
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

        {/* Grid */}
        <div className={`mt-16 gap-6 ${
          activeTab === "month" 
            ? "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6" 
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        }`}>
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

              {/* Darken on hover ONLY */}
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

        {/* CTA */}
        {(activeTab === "destination" || activeTab === "traveller") &&
          <div className="mt-16 flex justify-center">
            <button className="bg-black px-6 py-3 text-xs tracking-widest text-white hover:bg-black/80">
              VIEW MORE
            </button>
          </div>
        }
      </div>
    </section>
  );
}
