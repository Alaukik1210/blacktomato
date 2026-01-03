"use client";

import type { JSX } from "react";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function PrimaryFooter(): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <footer className="bg-[#242323] text-gray-300">
      <div className="border-b border-white/10 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 opacity-70 text-xs sm:text-sm">
          <Image src="/images/icons-comp/kVZ1z4VT-travelleisure.svg" alt="Condé Nast Traveler" width={100} height={30} />
          <Image src="/images/icons-comp/abta-logo.svg" alt="Condé Nast Traveler" width={100} height={30} />
          <Image src="/images/icons-comp/veWhg0JB-iata.svg" alt="Condé Nast Traveler" width={100} height={30} />
          <Image src="/images/icons-comp/traveller.svg" alt="Condé Nast Traveler" width={100} height={30} />
          <Image src="/images/icons-comp/vsDPx9UG-virtuoso-member.svg" alt="Condé Nast Traveler" width={100} height={60} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* BLACK TOMATO */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs tracking-widest text-white font-semibold">
              BLACK TOMATO
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Speak To An Expert
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Media Enquiries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Get In Touch
                </Link>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8">
              <h4 className="text-xs tracking-widest text-white font-semibold mb-3">
                SIGN UP TO OUR NEWSLETTER
              </h4>
              <div className="flex border border-white/20 bg-white/5">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="bg-transparent px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm w-full outline-none"
                />
                <button className="px-3 sm:px-4 border-l border-white/20 hover:bg-white/10 transition text-sm sm:text-base">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* USEFUL INFORMATION */}
          <div>
            <h4 className="text-xs tracking-widest text-white font-semibold mb-4">
              USEFUL INFORMATION
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "About Us",
                "Booking Conditions",
                "Careers",
                "FAQs",
                "Online Enquiry",
                "Press Room",
                "Privacy Policy",
                "Regenerative Travel",
                "Sitemap",
                "Travel Insurance",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className="text-xs tracking-widest text-white font-semibold mb-4">
              POPULAR DESTINATIONS
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "Argentina",
                "Canada",
                "Chile",
                "Iceland",
                "Italy",
                "Japan",
                "Kenya",
                "Morocco",
                "Peru",
                "Thailand",
                "USA",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WHO */}
          <div>
            <h4 className="text-xs tracking-widest text-white font-semibold mb-4">
              WHO
            </h4>
            <ul className="space-y-1.5 text-sm">
              {["Couples", "Family", "Group", "Honeymoons", "Solo"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT */}
          <div>
            <h4 className="text-xs tracking-widest text-white font-semibold mb-4">
              WHAT
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                "Pursuit of Feeling",
                "Feelings Engine",
                "See You In The Moment",
                "Take Me On A Story",
                "James Bond",
                "Adventures",
                "Beach",
                "Blink",
                "Eclipse",
                "Field Trip",
                "Food",
                "Get Lost",
                "Safari",
                "Unusual",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for 6-column grid */}
          <div></div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-0 border-t border-white/10">
          {/* BLACK TOMATO */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("blacktomato")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="text-xs tracking-widest text-white font-semibold">
                BLACK TOMATO
              </h4>
              {openSection === "blacktomato" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "blacktomato" && (
              <div className="pb-5 space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Speak To An Expert
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Media Enquiries
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Get In Touch
                    </Link>
                  </li>
                </ul>
                <div>
                  <h4 className="text-xs tracking-widest text-white font-semibold mb-3">
                    SIGN UP TO OUR NEWSLETTER
                  </h4>
                  <div className="flex border border-white/20 bg-white/5">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="bg-transparent px-4 py-3 text-xs w-full outline-none"
                    />
                    <button className="px-4 border-l border-white/20 hover:bg-white/10 transition">
                      →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* USEFUL INFORMATION */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("useful")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="text-xs tracking-widest text-white font-semibold">
                USEFUL INFORMATION
              </h4>
              {openSection === "useful" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "useful" && (
              <ul className="pb-5 space-y-2 text-sm">
                {[
                  "About Us",
                  "Booking Conditions",
                  "Careers",
                  "Frequently Asked Questions",
                  "Online Enquiry",
                  "Press Room",
                  "Privacy Policy",
                  "Regenerative Travel",
                  "Sitemap",
                  "Travel Insurance",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* POPULAR DESTINATIONS */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("destinations")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="text-xs tracking-widest text-white font-semibold">
                POPULAR DESTINATIONS
              </h4>
              {openSection === "destinations" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "destinations" && (
              <ul className="pb-5 space-y-2 text-sm">
                {[
                  "Argentina",
                  "Canada",
                  "Chile",
                  "Iceland",
                  "Italy",
                  "Japan",
                  "Kenya",
                  "Morocco",
                  "Peru",
                  "Thailand",
                  "USA",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WHO */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("who")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="text-xs tracking-widest text-white font-semibold">
                WHO
              </h4>
              {openSection === "who" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "who" && (
              <ul className="pb-5 space-y-2 text-sm">
                {["Couples", "Family", "Group", "Honeymoons", "Solo"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WHAT */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection("what")}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <h4 className="text-xs tracking-widest text-white font-semibold">
                WHAT
              </h4>
              {openSection === "what" ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </button>
            {openSection === "what" && (
              <ul className="pb-5 space-y-2 text-sm">
                {[
                  "Pursuit of Feeling",
                  "Feelings Engine",
                  "See You In The Moment",
                  "Take Me On A Story",
                  "James Bond",
                  "Adventures",
                  "Beach",
                  "Blink",
                  "Eclipse",
                  "Field Trip",
                  "Food",
                  "Get Lost",
                  "Safari",
                  "Unusual",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
