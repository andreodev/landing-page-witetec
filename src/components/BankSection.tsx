import { Baas, Bank, CheckWhite, Clock, Secure, User } from "./Icons";

export default function BankSection() {
  return (
    <section className="bg-gradient-to-t to-black from-[#1C1C1C] text-white flex flex-col items-center justify-start min-h-svh py-20 px-6">
      {/* Texto em cima */}
      <div className="max-w-6xl text-center">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-[64px] leading-tight">
          A tecnologia PIX da WiteTec é nota A pelo Banco Central
        </h1>
      </div>

      {/* Grid embaixo */}
      <div className="mt-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
        {/* Card */}
        <div className="bg-white/5 rounded-2xl p-10 ">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <Bank />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px] w-full ">
            Conformidade com o BACEN
          </h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {`Conformidade com o Banco Central do Brasil, garantindo que suas
            transações sejam seguras,
            transparentes e confiáveis.`}
          </p>
        </div>

        {/* Outros cards */}
        <div className="bg-white/5 rounded-2xl p-10">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <Baas />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px]">
            BaaS (Banking as a Service)
          </h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {`Oferecemos infraestrutura completa 
de Banking as a Service, permitindo 
que empresas integrem serviços 
financeiros de forma ágil e segura. `}
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-10">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <CheckWhite />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px]">Alta conversão</h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {`Mais pagamentos aprovados, menos 
obstáculos. Nossa tecnologia de 
otimização aumenta as conversões 
com inteligência adaptativa. `}
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-10">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <User />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px]">Suporte 24/7</h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {" "}
            {`Conte com o nosso atendimento
especializado para o seu modelo de
operação independente do dia da
semana. `}
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-10">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <Clock />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px]">Ágil</h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {`O dinheiro entra na sua conta 
instantaneamente. `}
          </p>
        </div>
        <div className="bg-white/5 rounded-2xl p-10">
          {/* Ícone com fundo branco arredondado */}
          <div className="mb-6">
            <div className="bg-white/7 rounded-xl p-2 inline-flex items-center justify-center">
              <Secure />
            </div>
          </div>

          <h1 className="text-white font-medium text-[20px]">Antifraude</h1>
          <p className="mt-2 text-white/80 text-sm leading-relaxed whitespace-pre-line">
            {`Proteção de alto nível para cada 
transação. Detectamos riscos em 
tempo real, minimizando fraudes sem interferir na conversão. `}
          </p>
        </div>
      </div>
    </section>
  );
}
