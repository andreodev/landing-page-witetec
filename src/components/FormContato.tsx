import consulto1 from "../assets/consulto1.png";
import consulto2 from '../assets/consulto2.png'
import consulto3 from "../assets/consulto3.png";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl  ">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-16 items-start">
          {/* ESQUERDA */}
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-black ">
              Fale com um de
              <br />
              nossos consultores
            </h1>

            <p className="mt-4 text-base sm:text-lg text-black/70  mx-auto ">
              Nossos especialistas estão preparados para entender as
              necessidades <br /> da sua operação e oferecer as melhores
              soluções!
            </p>

            {/* Avatares */}
            <div className="mt-[53px] mb-[63px] flex items-center gap-3">
              <div className="flex -space-x-4">
                <img
                  className="relative z-10 h-[105px] w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto1}
                  alt="Consultor 1"
                />
                <img
                  className="relative z-10 h-[105px] w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto2}
                  alt="Consultor 2"
                />
                <img
                  className="relative z-10 h-[105px] w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto3}
                  alt="Consultor 3"
                />
                {/* círculo "..." no final mas com z-index menor */}
                <div className="relative z-0 h-[76px] mr-10  mt-2 w-[76px] rounded-full border-2 border-white bg-white  text-black flex items-center justify-center text-xl font-medium">
                  ...
                </div>
              </div>
            </div>
            {/* Passo-a-passo */}
            <div className="my-8 rounded-3xl bg-white/4 border border-[#E3EAF7] p-6 max-w-8xl">
              <div className="relative pl-8">
                <ul className="space-y-6">
                  {/* Item 1 */}
                  <li className="relative flex items-start gap-3">
                    {/* bolinha preenchida */}
                    <span className="mt-1 h-5 w-5 rounded-full bg-black shrink-0" />
                    <p className="font-medium text-black">
                      Envie seu formulário
                    </p>

                    {/* linha abaixo */}
                    <span className="absolute left-[9px] top-7 h-[76px] w-[2px] bg-[#E3EAF7]" />
                  </li>

                  {/* Item 2 */}
                  <li className="relative flex items-start gap-3 mt-[90px]">
                    {/* bolinha vazada */}
                    <span className=" h-5 w-5 rounded-full bg-white border-2 border-[#E3EAF7] shrink-0" />
                    <p className="text-black/80">
                      Conheça por completo a solução WiteTec
                    </p>

                    {/* linha abaixo */}
                    <span className="absolute left-[9px] h-[76px] top-6 w-[2px] bg-[#E3EAF7]" />
                  </li>
                  {/* Item 3 */}
                  <li className="relative flex items-start gap-3 mt-[90px]">
                    {/* bolinha vazada */}
                    <span className=" h-5 w-5 rounded-full bg-white border-2 border-[#E3EAF7] shrink-0" />
                    <p className="text-black/80">
                      Tenha a melhor tecnologia Pix, Cartão e Boleto
                    </p>
                    {/* último não tem linha */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DIREITA – FORM */}
          <div className="mx-auto w-full max-w-xl">
            <form
              className="rounded-3xl bg-gradient-to-t to-black from-[#1C1C1C] text-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Nome */}
              <label className="block text-sm mb-1">Nome</label>
              <input
                className="mb-4 w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Seu nome"
                type="text"
              />

              {/* Telefone */}
              <label className="block text-sm mb-1">
                DDD + Número de telefone
              </label>
              <input
                className="mb-4 w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="(00) 00000-0000"
                type="tel"
              />

              {/* Email */}
              <label className="block text-sm mb-1">E-mail corporativo</label>
              <input
                className="mb-4 w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="nome@suaempresa.com"
                type="email"
              />

              {/* Empresa */}
              <label className="block text-sm mb-1">Empresa</label>
              <input
                className="mb-4 w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Nome da sua empresa"
                type="text"
              />

              {/* Site */}
              <label className="block text-sm mb-1">Site</label>
              <input
                className="mb-4 w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="www.suaempresa.com"
                type="url"
              />

              {/* Linha com 2 selects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Setor de atuação</label>
                  <select className="w-full rounded-md bg-white text-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40">
                    <option>Selecione o setor</option>
                    <option>Financeiro</option>
                    <option>Varejo</option>
                    <option>Serviços</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Faturamento anual estimado
                  </label>
                  <select className="w-full rounded-md bg-white text-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40">
                    <option>Selecione uma estimativa</option>
                    <option>Até R$ 1M</option>
                    <option>R$ 1M – R$ 10M</option>
                    <option>Acima de R$ 10M</option>
                  </select>
                </div>
              </div>

              {/* Descrição */}
              <label className="block text-sm mt-4 mb-1">
                Descreva a sua necessidade
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md bg-white placeholder-black/20 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Descreva sua necessidade em detalhes..."
              />

              {/* Botão */}
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-white/15 py-3 font-semibold text-white hover:bg-white/25 transition"
              >
                Enviar formulário
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
