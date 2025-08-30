import { ArrowIcon, CheckGreen } from "./Icons";
import imagem1 from "../assets/productSection.png";
import imagem2 from "../assets/productSectionAPI.png";

export default function AboutProduct() {
  return (
    <div className="bg-[#FAFAFA] text-black py-24 px-8 flex flex-col gap-16 justify-center items-center">
      {/* Container principal para as duas seções */}
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Primeira Seção de Produto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Lado da Imagem */}
          <div className="flex justify-center">
            <img
              src={imagem1}
              alt="Pessoas em uma reunião"
              className="w-[97%]"
            />
          </div>

          {/* Lado da Descrição e Botão */}
          <div className="mt-20 w-[87%]">
            <h2 className="text-[64px] text-black font-bold leading-tight ">
              Compliance ágil e preventivo
            </h2>
            <p className="mt-4 text-lg font-medium text-[#000000B2]">
              Garantindo segurança regulatória e mitigação de riscos sem
              burocracia, permitindo que sua operação cresça de forma sólida e
              em conformidade.
            </p>

            <div className="mt-6 space-y-5 font-medium text-[18px]">
              <div className="flex items-center gap-2 text-black">
                <CheckGreen />
                <span>Monitoramento Contínuo</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <CheckGreen />
                <span>Prevenção de Riscos</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <CheckGreen />
                <span>Conformidade Simplificada</span>
              </div>
            </div>

            <button className="flex items-center gap-2 mt-10 px-6 py-4 bg-black text-white font-semibold rounded-3xl hover:bg-gray-800 transition-colors duration-300">
              Fale com um especialista <ArrowIcon color={"white"} />
            </button>
          </div>
        </div>

        {/* Segunda Seção de Produto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Lado da Descrição e Botão */}
          <div className="p-8">
            <h2 className="text-4xl font-bold leading-tight">
              Outro título de produto
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Outra descrição sobre o produto.
            </p>

            {/* Repita a estrutura de lista e botão aqui se necessário */}
          </div>
          {/* Lado da Imagem */}
          <div className="flex justify-center">
            <img
              src={imagem2}
              alt="Pessoas em uma reunião"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
