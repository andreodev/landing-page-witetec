import moedas from "../assets/moedas.png";
import equipe from "../assets/equipe.png";
import reembolso from "../assets/reembolso.png";
import { Crypto, Suport } from "./Icons";

export default function Diferenciais() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-[64px]">
            Diferenciais da WiteTec
          </h1>
          <p className="mt-2 text-black/70 text-base sm:text-lg font-medium">
            Nossos pontos fortes que impulsionam o seu negócio.
          </p>
        </div>

        {/* 1) Saque cripto (texto grande + imagem) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Lado maior (texto) → ocupa 2 colunas */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E3EAF7] p-10 flex flex-col justify-center">
            <div className="mb-4">
              <Crypto />
            </div>
            <h2 className="text-2xl font-medium text-black mb-3">
              Saque cripto
            </h2>
            <p className="text-[#484848] text-base font-normal leading-relaxed">
              Transacione via Pix, Cartão e Boleto e efetue seus saques por{" "}
              <br /> criptomoeda.
            </p>
          </div>

          {/* Lado menor (imagem) */}
          <div className="relative bg-black rounded-3xl border border-[#E3EAF7] overflow-hidden flex items-center justify-center">
            {/* fundo quadriculado */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='black'/%3E%3Cpath d='M40 0H0V40H40V0Z' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: "90px 90px",
              }}
            />
            <img
              src={moedas}
              alt="Criptomoedas"
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2) Suporte (imagem + texto grande invertido) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-5">
          <div className="bg-white rounded-3xl border border-[#E3EAF7] overflow-hidden flex items-center justify-center">
            <img
              src={equipe}
              alt="Equipe de suporte"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-2 text-white bg-black rounded-3xl border border-[#E3EAF7] p-10 flex flex-col justify-center">
            <div className="mb-4">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Suport />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              Equipe de suporte à sua disposição
            </h2>
            <p className="text-base leading-relaxed">
              Nossa equipe está sempre pronta para ajudar via WhatsApp,
              garantindo operações contínuas e eficientes, seja para resolver
              problemas técnicos ou otimizar processos. Com nosso apoio
              constante, você pode se concentrar no sucesso do seu negócio!
            </p>
          </div>
        </div>

        {/* 3) API de disputas (card + fluxo) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-5">
          {/* Card esquerdo (1 coluna) */}
          <div className="bg-white rounded-3xl border border-[#E3EAF7] p-8 sm:p-10">
            <div className="mb-5 h-10 w-10 rounded-lg bg-black/5 grid place-items-center">
              {/* ícone placeholder */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-black">
                <path
                  d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 7v8l7 3.8L19 15V7l-7-2.8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-black">
              API de disputas
            </h2>
            <p className="mt-3 text-black/70">
              Defenda suas disputas de estorno dentro do dashboard e aumente o
              seu faturamento.
            </p>
          </div>

          {/* Fluxo direito (2 colunas) */}
          <div className="lg:col-span-2">
            <div className="relative w-full">
              <img
                src={reembolso}
                alt="Fluxo de reembolso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* fim 3) */}
      </div>
    </section>
  );
}

