import logoWhite from "../assets/footer.png"; // troque se for SVG
import { Instagram } from "./Icons";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* topo */}
      <div className="bg-gradient-to-r from-black to-[#1C1C1C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* coluna esquerda: logo + tagline + social */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <img
                  src={logoWhite}
                  alt="WiteTec"
                  className="h-[70px] w-auto"
                />
              </div>

              <p className="mt-3 text-sm text-white/70 max-w-lg">
                Pagamentos online, com tecnologia e segurança.
                </p>

              <div className="mt-6">
                <a
                  href="https://www.instagram.com/witetec"
                  aria-label="Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/4 ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* coluna do meio: links */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white/90 mb-3">
                Página inicial
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a className="hover:text-white transition" href="#">
                    API
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Compliance
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Tecnologia PIX
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#">
                    Aplicativo
                  </a>
                </li>
                {/* <li>
                  <a className="hover:text-white transition" href="#">
                    WhiteLabel
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* linha sutil */}
          <div className="mt-10 h-px bg-white/10" />

          {/* bottom bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
            <div>© 2025 WiteTec. Todos direitos reservados</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">
                Política de privacidade
              </a>
              <a href="#" className="hover:text-white">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
