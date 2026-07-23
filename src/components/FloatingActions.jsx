import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "../data/siteData.js";

export default function FloatingActions() {
  const whatsappText = encodeURIComponent("Olá, quero solicitar um orçamento para produção audiovisual.");

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-3 pointer-events-none md:bottom-6 md:left-6 md:right-6">
      <a
        href="#orcamento"
        className="pointer-events-auto inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.18] bg-white px-5 py-3 text-sm font-semibold text-carbon shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-platinum md:flex-none"
      >
        Solicitar orçamento
        <ArrowRight size={17} />
      </a>
      <a
        href={`https://wa.me/${company.whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Wictor Films no WhatsApp"
        className="pointer-events-auto grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/[0.18] bg-carbon text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-graphite"
      >
        <MessageCircle size={21} />
      </a>
    </div>
  );
}
