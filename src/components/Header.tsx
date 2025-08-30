import { ArrowIcon, BankIcon, BoletoIcon, CardIcon, EuroDollarIcon, PixIcon } from "./Icons";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-black to-[#1C1C1C] text-white h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Navbar com classes para ficar fixa no topo e centralizada */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center mt-[42px]">
        <Navbar />
      </div>

      {/* Container do background (Camada de baixo) */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L0 0L0 100' stroke='%23444' stroke-width='3' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Efeito de sombra (fade) nas laterais */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)`,
          }}
        ></div>

        {/* Adicione os ícones dos cantos aqui, se precisar.
            Na imagem 2, esses ícones parecem ser parte da seção de círculos,
            mas se precisar de ícones flutuantes nos cantos como na imagem 1
            (embora na imagem 2 eles sumam ou sejam menos proeminentes),
            eles iriam aqui.
        */}
      </div>

      {/* Conteúdo principal (Camada de cima, centralizada) */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto  pb-48 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Centralize sua operação
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl p-4">
          Pix, Cartão e Boleto em um só lugar, facilite o fluxo de transações da
          sua empresa.
        </p>
        <button className="flex font-normal items-center gap-2 mt-10 px-6 py-4 bg-white text-black  rounded-full hover:bg-gray-200 transition-colors duration-300">
          Fale com um especialista <ArrowIcon />
        </button>
      </div>

      {/* Seção dos Círculos e Ícones (Parte Inferior) */}
      <div className="absolute bottom-[-691px] left-1/2 -translate-x-1/2 w-full max-w-5xl z-10 pb-16 pointer-events-none">
        {/* Círculo mais externo */}
        <div className="relative mx-auto w-[965px] h-[965px] rounded-full border-2 border-white flex items-center justify-center pointer-events-auto">
          {/* Adquirente 1 */}
          <div className="absolute top-1/2 -left-24 -translate-y-1/2 border-white text-white p-2 rounded-lg text-sm whitespace-nowrap opacity-90">
            Adquirente 1
          </div>
          {/* Ícone 1 */}
          <div className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_250px)] w-10 h-10 border-white rounded-full flex items-center justify-center text-white text-base opacity-90">
            I1
          </div>

          {/* Círculo do meio */}
          <div className="relative w-[765px] h-[765px] rounded-full border-2 border-white flex items-center justify-center">
            {/* Adquirente 2 */}
            <div className="absolute top-[calc(10%_-_180px)] left-[100px]  bg-white text-black p-5 rounded-lg text-sm whitespace-nowrap shadow-white shadow-sm">
              <p className="flex items-center">
                {" "}
                Adquirente 2
                <p className="ml-3">
                  <BankIcon />
                </p>
              </p>
            </div>

            <div className="absolute top-[calc(10%_-_110px)] right-[10px]  bg-white text-black p-5 rounded-lg text-sm whitespace-nowrap shadow-white shadow-sm">
              <p className="flex items-center">
                {" "}
                Adquirente 3
                <p className="ml-3">
                  <BankIcon />
                </p>
              </p>
            </div>

            <div className="absolute top-[calc(30%_-_110px)] right-[-140px]  bg-white text-black p-5 rounded-lg text-sm whitespace-nowrap shadow-white shadow-sm">
              <p className="flex items-center">
                {" "}
                Adquirente 4
                <p className="ml-3">
                  <BankIcon />
                </p>
              </p>
            </div>

            <div className="absolute top-[calc(20%_-_100px)] left-[-90px]  bg-white text-black p-5 rounded-lg text-sm whitespace-nowrap shadow-white shadow-sm">
              <p className="flex items-center">
                {" "}
                Adquirente 1
                <p className="ml-3">
                  <BankIcon />
                </p>
              </p>
            </div>

            {/* Círculo mais interno */}
            <div className="relative w-[565px] h-[565px] rounded-full border-2 border-white  flex items-center justify-center">
              {/* Adquirente 3 */}
              <div className="absolute top-[-75px] left-[calc(20%_-_50px)] bg-white text-black p-3 rounded-full text-sm whitespace-nowrap">
                <BoletoIcon />
              </div>
              <div className="absolute top-[-115px] left-[calc(57%_-_10px)] bg-white text-black p-3 rounded-full text-sm whitespace-nowrap">
                <PixIcon />
              </div>
              {/* Ícone 3 */}
              <div className="absolute top-[-10px] left-[calc(96%_-_10px)] bg-white text-black p-3 rounded-full text-sm whitespace-nowrap">
                <EuroDollarIcon />
              </div>
            </div>

            {/* Adquirente 4 */}
            {/* Ícone 4 */}
            <div className="absolute top-[115px] left-[calc(66%_-_10px)] bg-white text-black p-3 rounded-full text-sm whitespace-nowrap">
              <CardIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
