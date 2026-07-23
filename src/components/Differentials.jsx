import { BadgeDollarSign, CheckCircle2, Clock3, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { differentials } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const iconMap = {
  check: CheckCircle2,
  clock: Clock3,
  shield: ShieldCheck,
  sparkles: Sparkles,
  budget: BadgeDollarSign,
  map: MapPin,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-carbon py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Alto padrão em cada detalhe, do briefing à entrega."
          description="Um processo direto, visualmente refinado e pensado para deixar sua marca pronta para vender mais."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="glass-line group flex min-h-32 items-start gap-4 rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.28]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-carbon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-mist">Experiência fluida, clara e com acabamento profissional.</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
