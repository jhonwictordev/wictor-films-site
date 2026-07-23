import { navItems } from "../data/siteData.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909] py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-mist">© 2026 Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition duration-300 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#privacidade" className="transition duration-300 hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
