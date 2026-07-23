import { company } from "../data/siteData.js";

export default function Logo({ compact = false }) {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Wictor Films - início">
      <img
        src={company.logoWhite}
        alt="Wictor Films"
        className={`${compact ? "h-12" : "h-14 md:h-16"} w-auto object-contain transition duration-300 group-hover:opacity-80`}
        loading="eager"
        decoding="async"
      />
      {!compact && (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="text-sm font-semibold text-white">Wictor</span>
          <span className="text-sm font-semibold text-mist">Films</span>
        </span>
      )}
    </a>
  );
}
