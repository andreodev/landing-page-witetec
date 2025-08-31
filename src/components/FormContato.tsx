import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import consulto1 from "../assets/consulto1.png";
import consulto2 from "../assets/consulto2.png";
import consulto3 from "../assets/consulto3.png";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setResult(null);
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      formRef.current.reset();
      window.open("/sucesso", "_blank");
    } catch (err) {
      setResult({ ok: false, msg: "Falha ao enviar. Tente novamente." });
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-9 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
          {/* ESQUERDA */}
          <div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight text-black">
              Fale com um de
              <br />
              nossos consultores
            </h1>

            <p className="mt-4 text-base sm:text-lg text-black/70 max-w-xl">
              Nossos especialistas estão preparados para entender as
              necessidades da sua operação e oferecer as melhores soluções!
            </p>

            {/* Avatares */}
            <div className="mt-10 mb-12 flex items-center gap-3">
              <div className="flex -space-x-4">
                <img
                  className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto1}
                  alt="Consultor 1"
                />
                <img
                  className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto2}
                  alt="Consultor 2"
                />
                <img
                  className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-[105px] lg:w-[105px] rounded-full border-2 border-white object-cover"
                  src={consulto3}
                  alt="Consultor 3"
                />
                <div className="relative z-0 h-12 w-12 sm:h-16 sm:w-16 lg:h-[76px] lg:w-[76px] rounded-full border-2 border-white bg-white text-black flex items-center justify-center text-sm sm:text-lg font-medium">
                  ...
                </div>
              </div>
              <span className="text-sm sm:text-base text-black/60">
                time pronto para ajudar
              </span>
            </div>

            {/* Passo-a-passo (mantido) */}
            <div className="my-8 rounded-3xl bg-white/4 border hidden sm:block border-[#E3EAF7] p-6 max-w-lg sm:max-w-xl lg:max-w-none">
              <div className="relative pl-8">
                <ul className="space-y-6">
                  <li className="relative flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-black shrink-0" />
                    <p className="font-medium text-black">
                      Envie seu formulário
                    </p>
                    <span className="absolute left-[9px] top-7 h-[76px] w-[2px] bg-[#E3EAF7]" />
                  </li>

                  <li className="relative flex items-start gap-3 mt-[70px] sm:mt-[90px]">
                    <span className="h-5 w-5 rounded-full bg-white border-2 border-[#E3EAF7] shrink-0" />
                    <p className="text-black/80">
                      Conheça por completo a solução WiteTec
                    </p>
                    <span className="absolute left-[9px] h-[76px] top-6 w-[2px] bg-[#E3EAF7]" />
                  </li>

                  <li className="relative flex items-start gap-3 mt-[70px] sm:mt-[90px]">
                    <span className="h-5 w-5 rounded-full bg-white border-2 border-[#E3EAF7] shrink-0" />
                    <p className="text-black/80">
                      Tenha a melhor tecnologia Pix, Cartão e Boleto
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DIREITA – FORM */}
          <div id="form" className="mx-auto w-full max-w-lg mt-12 lg:mt-0">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-gradient-to-t to-black from-[#1C1C1C] text-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <label className="block text-sm mb-1">Nome</label>
              <input
                name="user_name"
                required
                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Seu nome"
                type="text"
              />

              <label className="block text-sm mb-1">
                DDD + Número de telefone
              </label>
              <input
                name="user_phone"
                required
                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="(00) 00000-0000"
                type="tel"
              />

              <label className="block text-sm mb-1">E-mail corporativo</label>
              <input
                name="user_email"
                required
                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="nome@suaempresa.com"
                type="email"
              />

              <label className="block text-sm mb-1">Empresa</label>
              <input
                name="user_company"
                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Nome da sua empresa"
                type="text"
              />

              <label className="block text-sm mb-1">Site</label>
              <input
                name="user_site"
                className="mb-4 w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="www.suaempresa.com"
                type="url"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Setor de atuação</label>
                  <select
                    name="user_sector"
                    className="w-full rounded-md bg-white text-black/70 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o setor
                    </option>
                    <option>Financeiro</option>
                    <option>Varejo</option>
                    <option>Serviços</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Faturamento anual estimado
                  </label>
                  <select
                    name="user_revenue"
                    className="w-full rounded-md bg-white text-black/70 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma estimativa
                    </option>
                    <option>Até R$ 1M</option>
                    <option>R$ 1M – R$ 10M</option>
                    <option>Acima de R$ 10M</option>
                  </select>
                </div>
              </div>

              <label className="block text-sm mt-4 mb-1">
                Descreva a sua necessidade
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md bg-white text-black placeholder-black/40 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-white/40"
                placeholder="Descreva sua necessidade em detalhes..."
              />

              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-xl bg-white/15 py-3 font-semibold text-white hover:bg-white/25 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Enviando..." : "Enviar formulário"}
              </button>

              {result && (
                <p
                  className={`mt-3 text-sm ${
                    result.ok ? "text-emerald-400" : "text-red-300"
                  }`}
                >
                  {result.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
