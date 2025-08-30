import BancoCentral from "../assets/bancoCentral.png"

export default function Processados() {
  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1) 234M Processados */}
          <div className="rounded-[28px] bg-white border border-[#E3EAF7] p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <div className="text-4xl sm:text-5xl font-bold tracking-tight">
              234
              <span className="align-super text-lg sm:text-xl font-bold">
                M
              </span>
            </div>
            <div className="mt-2 text-sm sm:text-base text-black/70">
              Processados
            </div>
          </div>

          {/* 2) +1.5 mil Clientes (inverso) */}
          <div className="rounded-[28px] bg-black text-white p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <div className="text-4xl sm:text-5xl font-bold tracking-tight">
              +1.5{" "}
              <span className="text-lg sm:text-xl font-semibold align-baseline">
                mil
              </span>
            </div>
            <div className="mt-2 text-sm sm:text-base text-white/80">
              Clientes
            </div>
          </div>

          {/* 3) 5.0★ Avaliação */}
          <div className="rounded-[28px] bg-white border border-[#E3EAF7] p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            <div className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center gap-2">
              5.0
              {/* estrela */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current text-black"
              >
                <path d="M12 2.5l2.9 5.88 6.5.95-4.7 4.59 1.1 6.48L12 17.77 6.2 20.4l1.1-6.48-4.7-4.59 6.5-.95L12 2.5z" />
              </svg>
            </div>
            <div className="mt-10 text-sm sm:text-base text-black/70 leading-snug">
              Alto nível de aprovação
              <br className="hidden sm:block" />
              da nossa base de
              <br className="hidden lg:block" />
              clientes
            </div>
          </div>

          {/* 4) Em conformidade com o Banco Central (ícone + texto) */}
          <div className="rounded-[28px] bg-white border border-[#E3EAF7] p-8 sm:p-10 text-center flex flex-col items-center justify-center">
            {/* ícone “Banco Central” placeholder */}
            <div className="mb-4 sm:mb-5">
              <div className="h-12 w-12 sm:h-14 sm:w-14">
                <img src={BancoCentral} alt="Banco Central" />
              </div>
            </div>
            <div className="text-sm sm:text-base text-black/70 leading-snug">
              Em conformidade
              <br className="hidden sm:block" />
              com o Banco Central
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
