import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Reveal className={`mx-auto mb-12 flex max-w-3xl flex-col ${alignment}`}>
      <span className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-mist">{eyebrow}</span>
      <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-8 text-mist md:text-lg">{description}</p>}
    </Reveal>
  );
}
