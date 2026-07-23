import { Quote } from "lucide-react";
import { testimonials } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-carbon py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Depoimentos"
          title="Clientes percebem quando a imagem da marca sobe de nível."
          description="Textos prontos como base para substituir por avaliações reais após os próximos projetos."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/25">
                <Quote className="mb-8 text-white" size={28} />
                <p className="text-base leading-8 text-platinum">"{testimonial.quote}"</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-mist">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
