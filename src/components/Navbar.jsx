import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "../data/siteData.js";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/[0.78] backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Navegação principal">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-mist transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#orcamento"
          className="hidden rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-carbon transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white lg:inline-flex"
        >
          Solicitar orçamento
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.15] text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-carbon/[0.98] lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-mist transition duration-300 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              onClick={closeMenu}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-carbon"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
