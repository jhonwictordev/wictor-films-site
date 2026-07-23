import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { company } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const contactItems = [
  {
    label: "WhatsApp",
    value: company.whatsappDisplay,
    href: `https://wa.me/${company.whatsappNumber}`,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: company.instagram,
    href: company.instagramUrl,
    icon: Instagram,
  },
  {
    label: "Cidade de atendimento",
    value: company.city,
    href: "#orcamento",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-carbon py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contato"
          title="Pronto para transformar o próximo projeto em imagem forte."
          description="Escolha o canal mais prático ou solicite um orçamento com todos os detalhes do projeto."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <a
                  href={item.href}
                  className="group block h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/[0.28] hover:bg-white/[0.075]"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="mb-8 grid h-12 w-12 place-items-center rounded-lg bg-white text-carbon">
                    <Icon size={21} />
                  </span>
                  <span className="block text-sm uppercase tracking-[0.2em] text-mist">{item.label}</span>
                  <strong className="mt-3 block text-lg font-semibold text-white">{item.value}</strong>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
