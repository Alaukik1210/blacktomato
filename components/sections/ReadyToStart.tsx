export default function ReadyToStart() {
  return (
    <section 
      className="relative w-full py-16 sm:py-20 md:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/next.png')" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
        <h2 className="text-5xl sm:text-5xl md:text-5xl font-medium tracking-wider font-alternate sm:mb-4">
          SO, READY TO START?
        </h2>

        <button className="sm:mt-4 bg-black px-6 sm:px-8 py-2 sm:py-3 text-xs tracking-widest text-white hover:bg-black/80 transition">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}