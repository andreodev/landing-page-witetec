import {
  ArrowIcon,
  BankIcon,
  BoletoIcon,
  CardIcon,
  EuroDollarIcon,
  PixIcon,
} from "./Icons";
import Navbar from "./Navbar";
import giroMobile from "../assets/giroMobile.png";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-black to-[#1C1C1C] text-white">
      {/* NAVBAR FIXA */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center mt-[42px]">
        <Navbar />
      </div>

      {/* BG (pros dois) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L0 0L0 100' stroke='%23444' stroke-width='3' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* ================= MOBILE (< lg): TEXTO + CTA + IMAGEM ================= */}
      <section className="block lg:hidden relative z-10 min-h-svh flex-col items-center justify-start px-6 pt-44 ">
        <div className="w-full max-w-md text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Centralize sua operação
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/80">
            Pix, Cartão e Boleto em um só lugar. Facilite o fluxo de transações
            da sua empresa.
          </p>
          <a
            href="#form"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Fale com um especialista{" "}
            <span className="ml-1">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="w-full mt-44 flex justify-center">
          <img
            src={giroMobile}
            alt="WiteTec - Centralize sua operação"
            className="w-[200%] max-w-[1940px] object-contain"
          />
        </div>
      </section>

      {/* ================= DESKTOP (>= lg): TEXTO + CTA + CÍRCULOS ================= */}
      <section className="hidden lg:flex relative z-10 min-h-svh flex-col items-center justify-start">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto pt-48 pb-36">
          <h1 className="text-6xl font-bold leading-tight">
            Centralize sua operação
          </h1>
          <p className="mt-4 text-xl px-4">
            Pix, Cartão e Boleto em um só lugar, facilite o fluxo de transações
            da sua empresa.
          </p>
          <a
            href="#form"
            className="mt-10 inline-flex items-center gap-2 px-6 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Fale com um especialista{" "}
            <span className="ml-1">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="absolute bottom-[-691px] left-1/2 -translate-x-1/2 w-full max-w-5xl pb-16 pointer-events-none">
          <div className="relative mx-auto w-[965px] h-[965px] rounded-full border-2 border-white flex items-center justify-center pointer-events-auto">
            <div className="absolute top-1/2 -left-24 -translate-y-1/2 text-white p-2 rounded-lg text-sm opacity-90">
              Adquirente 1
            </div>
            <div className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_250px)] w-10 h-10 rounded-full flex items-center justify-center text-white text-base opacity-90">
              I1
            </div>

            <div className="relative w-[765px] h-[765px] rounded-full border-2 border-white flex items-center justify-center">
              <div className="absolute top-[calc(10%_-_180px)] left-[100px] bg-white text-black p-5 rounded-lg text-sm shadow-white shadow-sm">
                <span className="flex items-center">
                  Adquirente 2{" "}
                  <span className="ml-3">
                    <BankIcon />
                  </span>
                </span>
              </div>
              <div className="absolute top-[calc(10%_-_110px)] right-[10px] bg-white text-black p-5 rounded-lg text-sm shadow-white shadow-sm">
                <span className="flex items-center">
                  Adquirente 3{" "}
                  <span className="ml-3">
                    <BankIcon />
                  </span>
                </span>
              </div>
              <div className="absolute top-[calc(30%_-_110px)] right-[-140px] bg-white text-black p-5 rounded-lg text-sm shadow-white shadow-sm">
                <span className="flex items-center">
                  Adquirente 4{" "}
                  <span className="ml-3">
                    <BankIcon />
                  </span>
                </span>
              </div>
              <div className="absolute top-[calc(20%_-_100px)] left-[-90px] bg-white text-black p-5 rounded-lg text-sm shadow-white shadow-sm">
                <span className="flex items-center">
                  Adquirente 1{" "}
                  <span className="ml-3">
                    <BankIcon />
                  </span>
                </span>
              </div>

              <div className="relative w-[565px] h-[565px] rounded-full border-2 border-white flex items-center justify-center">
                <div className="absolute top-[-75px] left-[calc(20%_-_50px)] bg-white text-black p-3 rounded-full text-sm">
                  <BoletoIcon />
                </div>
                <div className="absolute top-[-115px] left-[calc(57%_-_10px)] bg-white text-black p-3 rounded-full text-sm">
                  <PixIcon />
                </div>
                <div className="absolute top-[-10px] left-[calc(96%_-_10px)] bg-white text-black p-3 rounded-full text-sm">
                  <EuroDollarIcon />
                </div>
              </div>

              <div className="absolute top-[115px] left-[calc(66%_-_10px)] bg-white text-black p-3 rounded-full text-sm">
                <CardIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
