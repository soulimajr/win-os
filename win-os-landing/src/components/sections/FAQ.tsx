"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Preciso entender de tecnologia para usar o Win OS?",
    resposta:
      "Não. O Win OS foi feito para quem nunca organizou uma empresa em sistema nenhum. A estrutura já vem pronta, você só preenche.",
  },
  {
    pergunta: "Minha empresa ainda não existe formalmente, consigo usar?",
    resposta:
      "Sim. A jornada 'Iniciar' foi criada justamente para quem está começando do zero, antes mesmo de abrir CNPJ.",
  },
  {
    pergunta: "Tenho um negócio físico, o Win OS serve para mim?",
    resposta:
      "Sim. A jornada 'Digitalizar' ajuda a levar um negócio físico ou tradicional para uma estrutura digital organizada.",
  },
  {
    pergunta: "Quanto tempo leva para configurar tudo?",
    resposta:
      "A estrutura de pastas já vem pronta. Você preenche o contexto do seu negócio aos poucos, no seu ritmo.",
  },
  {
    pergunta: "E se eu já uso outras ferramentas na minha empresa?",
    resposta:
      "O Win OS não substitui suas ferramentas do dia a dia — ele organiza o contexto do seu negócio para que a IA entenda melhor sua operação.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="sys-kicker justify-center">/ duvidas.sys</span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {perguntas.map((item, index) => {
            const isOpen = aberto === index;
            return (
              <div key={item.pergunta}>
                <button
                  type="button"
                  onClick={() => setAberto(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium">
                    {item.pergunta}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 font-mono text-brass transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-muted">
                    {item.resposta}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
