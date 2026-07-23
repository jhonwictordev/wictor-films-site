import { Play } from "lucide-react";
import { portfolioItems } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-white/10 bg-[#111111] py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Portfólio"
          title="Projetos com presença, ritmo e acabamento cinematográfico."
          description="Uma seleção visual para apresentar produções institucionais, eventos, drone, fotografia e conteúdos de marca."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-lg border border-white/10 bg-carbon">
                <div className="portfolio-image relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-[0.82] grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/[0.12] to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/[0.18] bg-carbon/[0.58] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.category}
                  </div>
                  <div className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-carbon transition duration-300 group-hover:scale-110">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist">Direção visual premium para marcas, empresas e eventos.</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
