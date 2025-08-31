import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";

export default function SuccessPage() {
  return (
    <section className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-b from-black to-[#1C1C1C] text-center px-4">
      <h1 className="text-2xl sm:text-4xl md:text-[64px] w-[40%] font-bold text-white">
        Obrigado por ter enviado o formulário
      </h1>
      <p className="mt-4 text-[20px] sm:text-lg text-white/90 max-w-xl">
        Em breve um de nossos consultores irá entrar em contato via WhatsApp!
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition"
      >
        <a href="" className="flex">
          Voltar à página inicial
          <p className="ml-1">
            <ArrowIcon />
          </p>
        </a>
      </Link>
    </section>
  );
}
