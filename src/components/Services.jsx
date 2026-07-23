import { Aperture, Building2, CalendarCheck, Camera, Clapperboard, Briefcase, Share2, Video } from "lucide-react";
import { services } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const iconMap = {
  aperture: Aperture,
  camera: Camera,
  video: Video,
  building: Building2,
  calendar: CalendarCheck,
  share: Share2,
  briefcase: Briefcase,
  clapperboard: Clapperboard,
};

export default function Services() {
  return (
    <section id="servicos" className="bg-carbon py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Serviços"
          title="Produção completa para marcas que precisam ser lembradas."
          description="Cada projeto é pensado para gerar percepção de valor, clareza comercial e uma presença visual consistente."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="group h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/[0.28] hover:bg-white/[0.075] hover:shadow-glow">
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-lg border border-white/[0.12] bg-white text-carbon transition duration-300 group-hover:scale-105">
                    <Icon size={22} strokeWidth={2.1} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mist">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
