import Image from "next/image";
import type { JSX } from "react";

export default function SplitEditorialSection(): JSX.Element {
  return (
    <section className="w-full bg-white">
      <div>
        {/* ================= Row 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image 1 — FIRST on mobile, SECOND on desktop */}
          <div className="relative h-[250px] sm:h-[300px] md:h-auto order-1 md:order-2">
            <Image
              src="/images/triple-creek-ranch.avif"
              alt="Founders discussion"
              height={500}
              width={500}
              className="object-cover h-full w-full"
              priority
            />
          </div>

          {/* Text 1 — SECOND on mobile, FIRST on desktop */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 order-2 md:order-1">
            <div className="max-w-xl mx-auto sm:ml-12 lg:ml-40">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-medium tracking-widest mb-6 font-alternate">
                WHAT WE DO
                <br />
                AND WHY WE DO IT
              </h2>

              <p className="text-md text-gray-600 leading-relaxed mb-8">
                Since our founding in 2005, Black Tomato has always been about
                crafting remarkable, tailor-made trips for clients around the
                world. Tom and James — our co-founders — know this better than
                anyone. You can meet them in our new video.
              </p>

              <button className="bg-black text-white px-6 py-3 text-xs tracking-widest hover:bg-gray-800 transition">
                WATCH THE FILM
              </button>
            </div>
          </div>
        </div>

        {/* ================= Row 2 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image 2 — THIRD on mobile, FIRST on desktop */}
          <div className="relative h-[250px] sm:h-[300px] md:h-auto order-3 md:order-1">
            <Image
              src="/images/triple-creek-ranch.avif"
              alt="Luxury travel landscape"
              height={500}
              width={500}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Text 2 — FOURTH on mobile, SECOND on desktop */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 order-4 md:order-2">
            <div className="max-w-xl mx-auto sm:mx-8 lg:mx-20">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-medium tracking-widest mb-6 font-alternate">
                OUR APPROACH TO LUXURY TRAVEL
              </h2>

              <span className="text-xs tracking-widest text-gray-500 uppercase block mb-6">
                The luxury travel experts
              </span>

              <p className="text-md text-gray-700 leading-relaxed mb-8">
                Luxury holidays are personal. They mean something different for
                each and every one of us. For some, luxury is hiking in peaceful
                solitude through a remote corner of the desert, while for others
                it’s the indulgence of sipping cocktails aboard a private yacht,
                sailing gently through the Mediterranean. Whatever floats your
                boat, so to speak.

                <br /><br />

                Our team of luxury travel advisors are connoisseurs of luxury,
                curating unparalleled experiences, tailor made tours and bespoke
                adventures. Whether you seek the opulence of a secluded villa in
                the Tuscan hills or the thrill of an exclusive safari in the
                heart of Africa, we’ll craft a journey that exceeds your
                expectations.
              </p>

              <button className="bg-black text-white px-6 py-3 text-xs tracking-widest hover:bg-gray-800 transition">
                WATCH THE FILM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}