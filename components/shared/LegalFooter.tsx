import type { JSX } from "react";

export default function LegalFooter(): JSX.Element {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center space-y-4">
        <p>
          Albert House, 256–260 Old Street, London EC1V 9DD
          <br />
          +44 207 426 9888
        </p>

        <p className="italic text-xs leading-relaxed">
          Package holidays are sold by Black Tomato as an agent for Hays Tour
          Operating Ltd, ATOL 10531. Please see our booking conditions for more
          information. © 2026 Black Tomato.
          <br />
          Calls may be recorded for training and quality assurance purposes.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs gap-4">
          <span>© BLACK TOMATO 2026</span>

          <div className="flex gap-6 tracking-widest">
            <span>EPIC TOMATO</span>
            <span>SÖSTER AGENCY</span>
            <span>BLACK TOMATO US</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
