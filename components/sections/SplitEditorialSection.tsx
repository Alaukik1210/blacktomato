import Image from "next/image";
import type { JSX } from "react";

export default function SplitEditorialSection(): JSX.Element {
  return (
    <section className="w-full bg-white">
      <div className="">
        {/* Story row: Founders introduction with video call-to-action */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Founders story narrative section */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-md mx-auto sm:mx-8 lg:mx-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest mb-6 font-brandon">
                WHAT WE DO
                <br />
                AND WHY WE DO IT
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed mb-8">
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

          {/* Founders video hero image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto">
            <Image
              src="/images/triple-creek-ranch.avif"
              alt="Founders discussion"
              height={500}
              width={500}
              className="object-cover h-full w-full"
              priority
            />
          </div>
        </div>

        {/* Luxury approach row: Philosophy and values with scenic imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Luxury philosophy image on mobile (reordered on desktop) */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto">
            <Image
              src="/images/triple-creek-ranch.avif"
              alt="Luxury travel landscape"
              height={500}
              width={500}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Luxury approach narrative section */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-md mx-auto sm:mx-8 lg:mx-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest mb-2 font-brandon">
                OUR APPROACH TO LUXURY TRAVEL
              </h2>

              <span className="text-xs tracking-widest text-gray-500 uppercase block mb-6">
                The luxury travel experts
              </span>

              <p className="text-sm text-gray-700 leading-relaxed mb-8">
                Luxury holidays are personal. They mean something different for
                each and every one of us. For some, luxury is hiking in peaceful
                solitude through a remote corner of the desert, while for others
                it’s the indulgence of sipping cocktails aboard a private yacht,
                sailing gently through the Mediterranean. So to speak.
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
