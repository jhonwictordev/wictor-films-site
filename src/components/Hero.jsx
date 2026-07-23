import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "../data/siteData.js";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92svh] overflow-hidden bg-carbon pt-20"
      aria-label="Apresentação da Wictor Films"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${company.heroImage})` }}
        aria-hidden="true"
      />
      <div className="hero-mask absolute inset-0" aria-hidden="true" />
      <div className="subtle-grid absolute inset-0 opacity-[0.16]" aria-hidden="true" />

      <div className="section-shell relative flex min-h-[calc(92svh-80px)] flex-col justify-center pb-16 pt-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-platinum backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" />
            Produção audiovisual premium
          </span>
          <img
            src={company.logoWhite}
            alt="Wictor Films"
            className="mb-8 h-28 w-auto max-w-[210px] object-contain opacity-95 md:h-36 md:max-w-[280px]"
            loading="eager"
            decoding="async"
          />
          <h1 className="max-w-5xl text-6xl font-semibold leading-none text-white md:text-8xl lg:text-9xl">
            Wictor Films
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-platinum md:text-2xl md:leading-10">
            {company.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#orcamento"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-carbon transition duration-300 hover:-translate-y-1 hover:bg-platinum"
            >
              Solicitar orçamento
              <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.18] bg-white/[0.08] px-7 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/[0.45] hover:bg-white/[0.14]"
            >
              <Play size={17} fill="currentColor" />
              Ver serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="mt-14 grid max-w-4xl grid-cols-1 gap-3 text-sm text-mist sm:grid-cols-3"
        >
          {["Drone", "Institucional", "Eventos"].map((label) => (
            <div key={label} className="border-l border-white/[0.18] pl-4">
              <span className="block text-white">{label}</span>
              <span>captação com acabamento cinematográfico</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
