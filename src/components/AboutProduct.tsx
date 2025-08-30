import { ArrowIcon, CheckGreen, IntegrationIcon, SecurityGlobalIcon, SuporteIcon, UpdateIcon } from "./Icons";
import imagem1 from "../assets/productSection.png";
import imagem2 from "../assets/productSectionAPI.png";

export default function AboutProduct() {
  return (
    <section className="bg-[#FAFAFA] text-black">
      <div className="mx-auto max-w-7xl sm:justify-center sm:items-center  space-y-16 sm:space-y-20 lg:space-y-28">
        {/* 1) Produto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
            <img
              src={imagem1}
              alt="Dashboard do produto em uso por equipe"
              className="w-full max-w-[620px] h-auto rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Compliance ágil e preventivo
            </h2>

            <p className="mt-4 text-base sm:text-lg text-black/70">
              Garantindo segurança regulatória e mitigação de riscos sem
              burocracia, permitindo que sua operação cresça de forma sólida e
              em conformidade.
            </p>

            <div className="mt-6 space-y-4 sm:space-y-5 text-base sm:text-lg font-medium">
              <div className="flex items-center gap-2">
                <CheckGreen />
                <span>Monitoramento Contínuo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckGreen />
                <span>Prevenção de Riscos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckGreen />
                <span>Conformidade Simplificada</span>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-3xl bg-black text-white px-6 py-3 sm:px-7 sm:py-3.5 font-semibold hover:bg-gray-800 transition-colors">
              Fale com um especialista <ArrowIcon color="white" />
            </button>
          </div>
        </div>

        {/* 2) Produto (colunas invertidas no desktop para variar o layout) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 ">
          {/* Texto */}
          <div className="order-2 md:order-1 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold leading-tight">
              API de fácil integração
            </h2>
            <p className="mt-4 text-lg font-medium sm:text-lg text-[#000000B2]">
              Integre a nossa API com a nossa documentação e conte com o suporte
              ativo da nossa equipe técnica para auxiliar na integração.
            </p>

            {/* Exemplo de lista (opcional) */}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
              {/* card */}
              <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                  <IntegrationIcon />
                </div>
                <span className="text-[#0A1519] font-medium text-base">
                  Integração simplificada
                </span>
              </div>

              {/* card */}
              <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                  <UpdateIcon />
                </div>
                <span className="text-[#0A1519] font-medium text-base">
                  Escalabilidade garantida
                </span>
              </div>

              {/* card */}
              <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                  <SuporteIcon />
                </div>
                <span className="text-[#0A1519] font-medium text-base">
                  Suporte técnico especializado
                </span>
              </div>

              {/* card */}
              <div className="flex items-center gap-3 bg-white border border-[#E3EAF7] rounded-3xl px-4 py-4">
                <div className="h-10 w-10 grid place-items-center bg-[#E3EAF780] rounded-lg">
                  <SecurityGlobalIcon />
                </div>
                <span className="text-[#0A1519] font-medium text-base">
                  Segurança e confiabilidade
                </span>
              </div>
            </div>

            {/* CTA opcional */}
            {/* 
            <button className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
              Conhecer mais <ArrowIcon color="white" />
            </button>
            */}
          </div>

          {/* Imagem */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={imagem2}
              alt="Tela de API e integrações do produto"
              className="w-full max-w-[620px] h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
