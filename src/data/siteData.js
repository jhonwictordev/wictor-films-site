import { media } from "../assets/media.js";

export const company = {
  name: "Wictor Films",
  tagline: "Transformamos ideias em vídeos que vendem, emocionam e fortalecem sua marca.",
  instagram: "@wictorfilms",
  instagramUrl: "https://www.instagram.com/wictorfilms/",
  whatsappDisplay: "(82) 99179-8754",
  whatsappNumber: "5582991798754",
  city: "Atendimento em todo o Brasil",
  heroImage: media.hero,
  logoWhite: "/assets/wictor-films-logo-branca.png",
  logoDark: "/assets/wictor-films-logo-fundo-preto.png",
};

export const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    title: "Filmagem com Drone",
    icon: "aperture",
    description: "Imagens aéreas estáveis, impactantes e pensadas para valorizar espaços, eventos e marcas.",
  },
  {
    title: "Fotografia Profissional",
    icon: "camera",
    description: "Ensaios, eventos, produtos e retratos corporativos com direção visual consistente.",
  },
  {
    title: "Produção de Vídeos",
    icon: "video",
    description: "Do roteiro à finalização, criamos vídeos com ritmo, clareza e intenção comercial.",
  },
  {
    title: "Vídeos Institucionais",
    icon: "building",
    description: "Apresente sua empresa com uma narrativa elegante, objetiva e alinhada ao seu posicionamento.",
  },
  {
    title: "Cobertura de Eventos",
    icon: "calendar",
    description: "Registro completo de momentos importantes com olhar cinematográfico e entrega ágil.",
  },
  {
    title: "Conteúdo para Redes Sociais",
    icon: "share",
    description: "Peças curtas, dinâmicas e prontas para campanhas, lançamentos e presença digital.",
  },
  {
    title: "Vídeos para Empresas",
    icon: "briefcase",
    description: "Materiais comerciais, treinamentos, apresentações e campanhas com acabamento premium.",
  },
  {
    title: "Edição Profissional",
    icon: "clapperboard",
    description: "Cortes, cor, trilha, motion e finalização para transformar captação em conteúdo forte.",
  },
];

export const differentials = [
  { title: "Atendimento personalizado", icon: "check" },
  { title: "Entrega rápida", icon: "clock" },
  { title: "Equipamentos profissionais", icon: "shield" },
  { title: "Qualidade Cinematográfica", icon: "sparkles" },
  { title: "Orçamento sem compromisso", icon: "budget" },
  { title: "Atendimento em todo o Brasil", icon: "map" },
];

export const processSteps = [
  "Cliente envia o formulário",
  "Recebo as informações",
  "Analiso o projeto",
  "Envio orçamento personalizado",
  "Produção",
  "Entrega",
];

export const portfolioItems = [
  {
    title: "Campanha Institucional",
    category: "Vídeo",
    image: media.portfolio[0],
  },
  {
    title: "Retratos Corporativos",
    category: "Fotografia",
    image: media.portfolio[1],
  },
  {
    title: "Drone para Imóveis",
    category: "Drone",
    image: media.portfolio[2],
  },
  {
    title: "Cobertura Premium",
    category: "Evento",
    image: media.portfolio[3],
  },
  {
    title: "Conteúdo de Marca",
    category: "Redes Sociais",
    image: media.portfolio[4],
  },
  {
    title: "Making of Comercial",
    category: "Produção",
    image: media.portfolio[5],
  },
];

export const testimonials = [
  {
    name: "Marina Lopes",
    role: "Diretora de Marketing",
    quote:
      "A entrega elevou o posicionamento da marca. O vídeo ficou sofisticado, claro e pronto para campanha.",
  },
  {
    name: "Rafael Andrade",
    role: "Empresário",
    quote:
      "A captação com drone e a edição trouxeram exatamente o impacto que queríamos para apresentar o projeto.",
  },
  {
    name: "Bianca Moura",
    role: "Produtora de Eventos",
    quote:
      "Equipe objetiva, olhar apurado e prazo respeitado. O material final ficou impecável para divulgação.",
  },
];

export const serviceOptions = ["Drone", "Fotografia", "Vídeo", "Evento", "Institucional", "Redes Sociais", "Outro"];

export const budgetOptions = ["Até R$500", "R$500-1000", "R$1000-3000", "Acima de R$3000"];
