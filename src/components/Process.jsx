import { FileVideo, PackageCheck, Search, Send } from "lucide-react";
import { processSteps } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const stepIcons = [Send, FileVideo, Search, Send, FileVideo, PackageCheck];

export default function Process() {
  return (
    <section id="processo" className="border-y border-white/10 bg-[#101010] py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Como funciona"
          title="Da primeira mensagem à entrega final, tudo segue um fluxo simples."
          description="A timeline foi desenhada para reduzir fricção e facilitar a tomada de decisão do cliente."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/[0.12] md:block" aria-hidden="true" />
          <div className="grid gap-4">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <Reveal key={step} delay={index * 0.05}>
                  <article className="relative grid gap-4 rounded-lg border border-white/10 bg-carbon/[0.82] p-5 md:grid-cols-[56px_1fr] md:items-center md:p-6">
                    <span className="z-10 grid h-12 w-12 place-items-center rounded-lg bg-white text-carbon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-mist">Etapa {index + 1}</span>
                      <h3 className="mt-1 text-xl font-semibold text-white">{step}</h3>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
