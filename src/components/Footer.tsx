import logoWhite from "../assets/footer.png"; // troque se for SVG
import { Instagram, PlayStoreIcon } from "./Icons";

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

              <div className="mt-6">
                <a
                  href="#"
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
                <li>
                  <a className="hover:text-white transition" href="#">
                    WhiteLabel
                  </a>
                </li>
              </ul>
            </div>

            {/* coluna direita: app badges card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 border border-[#FFFFFF14] p-4 w-full max-w-xs lg:ml-auto">
                <p className="text-sm text-white/90 mb-3">
                  Baixe o nosso aplicativo
                </p>

                <a
                  href="#"
                  className="block rounded-lg bg-white/10 hover:bg-white/15 border border-[#FFFFFF14] transition px-4 py-3"
                >
                  {/* Google Play badge (inline simples) */}
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded  grid place-items-center">
                      <PlayStoreIcon />
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase tracking-wide text-white/70">
                        Disponível no
                      </div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="mt-2 block rounded-lg bg-white/10 hover:bg-white/15 border border-[#FFFFFF14] transition px-4 py-3"
                >
                  {/* App Store badge */}
                  <div className="flex items-center gap-3 ">
                    <div className="h-6 w-6 rounded bg-black grid place-items-center">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                        <path d="M17.5 12.3c0-2.8 2.3-3.6 2.4-3.7-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.1 1-.9 0-2.3-1-3.8-1-2 0-3.9 1.2-4.9 3.1-2.1 3.7-.5 9.1 1.5 12.1 1 1.5 2.2 3.1 3.8 3 1.5 0 2.1-1 3.9-1s2.4 1 3.9 1c1.6 0 2.6-1.5 3.6-2.9a12.5 12.5 0 0 0 1.4-3c-3.8-1.5-3.7-6.8-.1-8.5Z" />
                      </svg>
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase tracking-wide text-white/70">
                        Disponível na
                      </div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
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
