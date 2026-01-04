"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/app/data/navbar";
import { DESTINATIONS_DATA } from "@/app/data/navbar";
import { EXPERIENCES_DATA } from "@/app/data/navbar";
import { ABOUT_DATA } from "@/app/data/navbar";
import { MENU_DATA } from "@/app/data/navbar";
import { motion, AnimatePresence } from "framer-motion";


type NavTab = "destinations" | "experiences" | "about" | "menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Mobile menu navigation states
  const [mobileMenuLevel, setMobileMenuLevel] = useState<'main' | 'destinations' | 'continent' | 'experiences' | 'about' | 'about-category'>('main');
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [selectedExperienceCategory, setSelectedExperienceCategory] = useState<string | null>(null);
  const [selectedAboutCategory, setSelectedAboutCategory] = useState<string | null>(null);

  // setActiveTab(activeTab);
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsPastHero(currentScrollY > 600 || dropdownOpen);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 600) {
        // Scrolling down and past hero
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dropdownOpen]);

  // Set isPastHero when dropdown opens
useEffect(() => {
  const id = requestAnimationFrame(() => {
    if (dropdownOpen) {
      setIsPastHero(true);
    } else {
      setIsPastHero(window.scrollY > 600);
    }
  });

  return () => cancelAnimationFrame(id);
}, [dropdownOpen]);


  return (
    <header
      className={`w-full fixed z-50 transition-all duration-300 ${
        isPastHero ? "bg-white shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto max-w-[1350px] pl-4">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="lg:w-[300px]">
            <Link
              href="/"
              className={` ${isPastHero ? "text-[#444444]" : "text-white"}`}
            >
              <Image
                src={`${
                  isPastHero
                    ? "/images/black-tomato-black.svg"
                    : "/images/black-tomato.svg"
                }`}
                className={` ${isPastHero ? "text-[#444444]" : "text-white"}`}
                alt="Black Tomato Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Left Section */}
          <div className="hidden lg:flex gap-4 items-center">
            <Search
              className={`h-4 w-4 mx-4 cursor-pointer ${
                isPastHero ? "text-[#444444]" : "text-white"
              }`}
            />

            <nav className="flex items-center gap-8 relative">
              {NAV_LINKS.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`text-xs font-medium hover:underline
             hover:underline-offset-6
             hover:decoration-pink-600
             hover:decoration-2
              cursor-pointer transition-colors relative ${
                        activeTab === item.id
                          ? "text-pink-600"
                          : isPastHero
                          ? "text-[#444444] hover:text-gray-600"
                          : "text-white hover:text-gray-300"
                      } tracking-[1.2]`}
                      onClick={() => {
                        if (activeTab === item.id && dropdownOpen) {
                          setDropdownOpen(false);
                          setActiveTab(null);
                        } else {
                          setDropdownOpen(true);
                          setActiveTab(
                            item.id as "destinations" | "experiences" | "about"
                          );
                          if (item.id === "destinations") {
                            setHoveredContinent(DESTINATIONS_DATA[5].continent);
                          } else if (item.id === "experiences") {
                            setHoveredCategory(EXPERIENCES_DATA.categories[0].id);
                          } else if (item.id === "about") {
                            setHoveredCategory(ABOUT_DATA.categories[0].id);
                          }
                        }
                      }}
                    >
                      {item.label}
                      {activeTab === item.id && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-pink-600"></span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-xs font-medium ${
                        isPastHero
                          ? "text-[#444444] tracking-[1.2] hover:text-gray-600"
                          : "text-white hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <button
              className={`mx-4 ${
                isPastHero ? "text-[#444444]" : "text-white"
              } cursor-pointer h-4 w-4 transition-transform duration-300`}
              onClick={() => {
                if (activeTab === "menu" && dropdownOpen) {
                  setDropdownOpen(false);
                  setActiveTab(null);
                } else {
                  setDropdownOpen(true);
                  setActiveTab("menu");
                  setHoveredCategory(MENU_DATA.categories[0].id);
                }
              }}
              aria-label="Toggle menu"
            >
              {activeTab === "menu" && dropdownOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Dropdowns */}
          {dropdownOpen && (
            <div className="absolute top-12 left-0 w-full h-screen bg-white shadow-2xl z-40">
              <div className="max-w-[1400px] mx-auto px-8 py-12 flex gap-12 relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    setActiveTab(null);
                    setHoveredContinent(null);
                    setHoveredCategory(null);
                  }}
                  className="absolute top-0 right-8 text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Close dropdown"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* DESTINATIONS Dropdown */}
                {activeTab === "destinations" && (
                  <>
                    {/* Left Side - Continents */}
                    <div className="w-60">
                      {DESTINATIONS_DATA.map((dest) => (
                        <button
                          key={dest.continent}
                          onMouseEnter={() =>
                            setHoveredContinent(dest.continent)
                          }
                          className={`block w-full text-left text-2xl font-alternate font-medium tracking-widest py-1 transition ${
                            hoveredContinent === dest.continent
                              ? "text-pink-600"
                              : "text-gray-800 hover:text-gray-600"
                          }`}
                        >
                          {dest.continent}
                        </button>
                      ))}
                    </div>

                    {/* Middle - Countries */}
                    <div className="flex-1">
                      {hoveredContinent && (
                        <>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {DESTINATIONS_DATA.find(
                              (d) => d.continent === hoveredContinent
                            )?.countries.map((country) => (
                              <Link
                                key={country}
                                href={`/destinations/${country
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-md font-[17px] text-gray-600 hover:text-pink-600 transition py-1"
                              >
                                {country}
                              </Link>
                            ))}
                          </div>
                          <button className="mt-6 text-xs font-semibold tracking-widest text-gray-800 hover:text-pink-600 transition">
                            BROWSE ALL {hoveredContinent.toUpperCase()}
                          </button>
                        </>
                      )}
                    </div>

                    {/* Right Side - Image Preview */}
                    <div className="w-100 h-[600px]">
                      {hoveredContinent && (
                        <div className="relative w-full h-full overflow-hidden rounded">
                          <Image
                            src={
                              DESTINATIONS_DATA.find(
                                (d) => d.continent === hoveredContinent
                              )?.image || "/images/dest.png"
                            }
                            alt={hoveredContinent}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* EXPERIENCES Dropdown */}
                {activeTab === "experiences" && (
                  <>
                    {/* Left Side - Categories */}
                    <div className="w-64">
                      {EXPERIENCES_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setHoveredCategory(cat.id)}
                          className={`block w-full text-left text-2xl font-alternate font-medium tracking-wider py-2 transition ${
                            hoveredCategory === cat.id
                              ? "text-pink-600"
                              : "text-gray-800 hover:text-gray-600"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Right Side - Cards Grid */}
                    <div className="flex-1">
                      {hoveredCategory && (
                        <div className="grid grid-cols-5 gap-4">
                          {EXPERIENCES_DATA.categories
                            .find((cat) => cat.id === hoveredCategory)
                            ?.cards.map((card) => (
                              <Link
                                key={card.title}
                                href={card.link}
                                className="group relative h-72 overflow-hidden rounded"
                              >
                                <Image
                                  src={card.image}
                                  alt={card.title}
                                  height={800}
                                  width={800}
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <h3 className="text-white text-center font-medium text-xl tracking-[2.5px] whitespace-pre-line leading-5">
                                    {card.title}
                                  </h3>
                                </div>
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* ABOUT Dropdown */}
                {activeTab === "about" && (
                  <>
                    {/* Left Side - Categories */}
                    <div className="w-64">
                      {ABOUT_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setHoveredCategory(cat.id)}
                          className={`block w-full text-left text-2xl font-alternate font-medium tracking-wider py-2 transition ${
                            hoveredCategory === cat.id
                              ? "text-pink-600"
                              : "text-gray-800 hover:text-gray-600"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Right Side - Links */}
                    <div className="flex-1">
                      {hoveredCategory && (
                        <div className="space-y-3">
                          {ABOUT_DATA.categories
                            .find((c) => c.id === hoveredCategory)
                            ?.items.map((item) => (
                              <Link
                                key={item}
                                href={`/about/${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block text-md text-gray-700 hover:text-pink-600  transition"
                              >
                                {item}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* MENU Dropdown */}
                {activeTab === "menu" && (
                  <>
                    {/* Left Side - Categories */}
                    <div className="w-48">
                      {MENU_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setHoveredCategory(cat.id)}
                          className={`block w-full text-left text-2xl font-alternate font-medium tracking-wider py-2 transition ${
                            hoveredCategory === cat.id
                              ? "text-pink-600"
                              : "text-gray-800 hover:text-gray-600"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Right Side - Months Grid */}
                    <div className="flex-1">
                      {hoveredCategory === "month" && (
                        <div className="grid grid-cols-6 gap-4">
                          {MENU_DATA.months.map((month) => (
                            <Link
                              key={month.name}
                              href={`/inspiration/${month.name.toLowerCase()}`}
                              className="group relative h-60 overflow-hidden rounded"
                            >
                              <Image
                                src={month.image}
                                alt={month.name}
                                height={200}
                                width={200}
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-center font-medium text-xl tracking-[2.5px] whitespace-pre-line leading-5">
                                  {month.name}
                                </h3>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5 text-right ">
            <span
              className={`text-xs tracking-widest font-semibold ${
                isPastHero ? "text-[#444444]" : "text-white"
              }`}
            >
              +44 207 426 9888
            </span>

            <User
              className={`h-5 w-5 ${
                isPastHero ? "text-[#444444]" : "text-white"
              }`}
            />
            <button className="hidden lg:block bg-pink-600 lg:px-5 lg:py-2 sm:px-4 sm:py-2 text-[10px] sm:text-xs rounded-xs  lg:text-[10px] font-semibold font-brandon text-white hover:bg-pink-700 transition whitespace-nowrap">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile: ENQUIRE NOW button */}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 pb-2 px-4 mt-2 uppercase">
            <button className="bg-pink-600 px-4 h-7 text-[10px] font-semibold rounded-xs text-white hover:bg-pink-700 transition whitespace-nowrap">
              ENQUIRE NOW
            </button>

            <button
              onClick={() => setOpen(true)}
              className={`${
                isPastHero ? "text-[#444444]" : "text-white"
              } flex items-center justify-center h-8`}
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => {
                setOpen(false);
                setMobileMenuLevel('main');
                setSelectedContinent(null);
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-full h-screen font-alternate bg-white flex flex-col shadow-2xl"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between px-6 py-2 bg-white">
                {mobileMenuLevel === 'main' && <div className="text-xl mt-2 font-medium text-black">
                  +44 207 426 9888 <span className="text-pink-600 font-brandon pl-2">v</span>
                </div>}

                {mobileMenuLevel === 'main' && (
                  <button onClick={() => {
                    setOpen(false);
                    setMobileMenuLevel('main');
                    setSelectedContinent(null);
                    setSelectedExperienceCategory(null);
                  }}>
                    <X className="h-5 w-5  text-black" />
                  </button>
                )}
              </div>

              {/* Search - Only on Main Menu */}
              <AnimatePresence mode="wait">
                {mobileMenuLevel === 'main' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-1 border-b border-gray-200 bg-white"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent font-brandon border-none outline-none text-lg py-1 text-black placeholder:text-gray-400"
                      />
                      <Search className="h-4 w-4 text-black" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Menu */}
              <nav className="px-6 py-4 space-y-4 flex-1 bg-white overflow-y-auto">
                <AnimatePresence mode="wait">
                  {/* Main Menu */}
                  {mobileMenuLevel === 'main' && (
                    <motion.div
                      key="main-menu"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => setMobileMenuLevel('destinations')}
                        className="block w-full text-left text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        DESTINATIONS
                      </button>
                      <button
                        onClick={() => setMobileMenuLevel('experiences')}
                        className="block w-full text-left text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        EXPERIENCES
                      </button>
                      <Link
                        href="/inspiration"
                        className="block text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        INSPIRATION
                      </Link>
                      <button
                        onClick={() => setMobileMenuLevel('about')}
                        className="block w-full text-left text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        ABOUT
                      </button>
                      <Link
                        href="/my-bt"
                        className="block text-2xl tracking-[2.5px] font-medium text-black py-4"
                      >
                        MY BT
                      </Link>
                      <div className="bg-white pt-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#00B67A"
                            />
                          </svg>
                          <span className="text-2xl tracking-[2.5px] font-medium text-black">
                            Trustpilot
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Destinations Level 1 - Continents */}
                  {mobileMenuLevel === 'destinations' && (
                    <motion.div
                      key="destinations-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setMobileMenuLevel('main')}
                          className="flex items-center gap-2 text-2xl text-pink-600 font-medium"
                        >
                          <span></span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">DESTINATIONS</h2>
                      <Link
                        href="/destinations/all"
                        className="block text-md tracking-[1.5px] font-brandon font-semibold text-gray-600 mb-4 uppercase"
                      >
                        A-Z OF COUNTRIES
                      </Link>
                      {DESTINATIONS_DATA.map((dest) => (
                        <button
                          key={dest.continent}
                          onClick={() => {
                            setSelectedContinent(dest.continent);
                            setMobileMenuLevel('continent');
                          }}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {dest.continent}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Destinations Level 2 - Countries */}
                  {mobileMenuLevel === 'continent' && selectedContinent && (
                    <motion.div
                      key="continent-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => {
                            setMobileMenuLevel('destinations');
                            setSelectedContinent(null);
                          }}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">{selectedContinent}</h2>
                      <Link
                        href={`/destinations/${selectedContinent.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-md tracking-[1.5px] font-brandon font-semibold text-gray-600 mb-4 uppercase"
                      >
                        BROWSE ALL
                      </Link>
                      {DESTINATIONS_DATA.find((d) => d.continent === selectedContinent)?.countries.map((country) => (
                        <Link
                          key={country}
                          href={`/destinations/${country.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {country}
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* Experiences Level 1 - Categories */}
                  {mobileMenuLevel === 'experiences' && !selectedExperienceCategory && (
                    <motion.div
                      key="experiences-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setMobileMenuLevel('main')}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">EXPERIENCES</h2>
                      {EXPERIENCES_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedExperienceCategory(cat.id)}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Experiences Level 2 - Category Items */}
                  {mobileMenuLevel === 'experiences' && selectedExperienceCategory && (
                    <motion.div
                      key="experience-category-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setSelectedExperienceCategory(null)}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">
                        {EXPERIENCES_DATA.categories.find((c) => c.id === selectedExperienceCategory)?.label}
                      </h2>
                      {EXPERIENCES_DATA.categories
                        .find((cat) => cat.id === selectedExperienceCategory)
                        ?.cards.map((card) => (
                          <Link
                            key={card.title}
                            href={card.link}
                            className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                          >
                            {card.title.replace(/\n/g, ' ')}
                          </Link>
                        ))}
                    </motion.div>
                  )}

                  {/* About Level 1 - Categories */}
                  {mobileMenuLevel === 'about' && !selectedAboutCategory && (
                    <motion.div
                      key="about-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setMobileMenuLevel('main')}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                          setSelectedAboutCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">ABOUT</h2>
                      {ABOUT_DATA.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedAboutCategory(cat.id)}
                          className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* About Level 2 - Category Items */}
                  {mobileMenuLevel === 'about' && selectedAboutCategory && (
                    <motion.div
                      key="about-category-menu"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with Back and Close */}
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                        <button
                          onClick={() => setSelectedAboutCategory(null)}
                          className="flex items-center gap-2 text-sm text-pink-600 font-medium"
                        >
                          <span>←</span> BACK
                        </button>
                        <button onClick={() => {
                          setOpen(false);
                          setMobileMenuLevel('main');
                          setSelectedContinent(null);
                          setSelectedExperienceCategory(null);
                          setSelectedAboutCategory(null);
                        }}>
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </div>
                      <h2 className="text-2xl font-medium tracking-[2.5px] mb-6 text-black uppercase ">
                        {ABOUT_DATA.categories.find((c) => c.id === selectedAboutCategory)?.label}
                      </h2>
                      {ABOUT_DATA.categories
                        .find((cat) => cat.id === selectedAboutCategory)
                        ?.items.map((item) => (
                          <Link
                            key={item}
                            href={`/about/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 uppercase"
                          >
                            {item}
                          </Link>
                        ))}
                      <Link
                        href="/contact"
                        className="block w-full text-left text-md tracking-[1.5px] font-brandon font-semibold text-gray-600  py-2 mt-2 uppercase"
                      >
                        CONTACT
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              {/* Footer */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
