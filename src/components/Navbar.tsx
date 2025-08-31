import { useState } from "react";
import logoWhite from "../assets/logoWhite.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* container centralizado com largura máxima */}
      <div className="mx-auto max-w-[1240px]">
        {/* barra principal */}
        <div className="relative bg-white text-[#707478] h-14 rounded-full flex items-center justify-between pl-2 pr-2 sm:pl-3 sm:pr-3 shadow-sm">
          {/* logo + links (links só em >= lg) */}
          <div className="flex items-center min-w-0">
            <img
              src={logoWhite}
              alt="Logo"
              className="h-10 w-10 mr-3 sm:mr-5"
            />
            <ul className="hidden lg:flex items-center gap-4 text-sm">
              <li>
                <a className="hover:text-black transition-colors" href="#API">
                  API
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black transition-colors"
                  href="#COMPLIANCE"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black transition-colors"
                  href="#tecnologiaPix"
                >
                  Tecnologia PIX
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black transition-colors"
                  href="#funcionalidades"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black transition-colors"
                  href="#aplicativo"
                >
                  Aplicativo
                </a>
              </li>
              {/* <li>
                <a className="hover:text-black transition-colors" href="#">
                  WiteLabel
                </a>
              </li> */}
            </ul>
          </div>

          {/* ações desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="border cursor-pointer border-black text-black py-2 px-4 rounded-full hover:bg-black/5 transition">
              <a href="https://app.witetec.com/login">Entrar</a>
            </button>
            <button className="bg-black cursor-pointer text-white py-2 px-5 rounded-full hover:opacity-90 transition">
              <a href="#form">Falar com um especialista</a>
            </button>
          </div>

          {/* botão hambúrguer (mobile/tablet) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-black/5 transition"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            {/* ícone simples em SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 stroke-current"
              strokeWidth={2}
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* menu mobile */}
        {open && (
          <div
            id="mobile-nav"
            className="lg:hidden mt-2 rounded-2xl bg-white text-[#707478] shadow-sm p-3"
          >
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
                  href="#API"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg黑/5"
                  href="#COMPLIANCE"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
                  href="#tecnologiaPix"
                >
                  Tecnologia PIX
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
                  href="#funcionalidades"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
                  href="#aplicativo"
                >
                  Aplicativo
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
                  href="#"
                >
                  WiteLabel
                </a>
              </li>
            </ul>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 border border-black text-black py-2 px-4 rounded-xl hover:bg-black/5 transition">
                <a href="https://app.witetec.com/login">Entrar</a>
              </button>
              <button className="flex-1 cursor-pointer bg-black text-white py-2 px-4 rounded-xl hover:opacity-90 transition">
                <a href="#form">Falar com um especialista</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
