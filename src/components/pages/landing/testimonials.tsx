"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("font-bold text-primary", className)}>{children}</span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Gabriela Souza",
    designation: "Desenvolvedora Front-end",
    content: (
      <p>
        A plataforma me ajudou a{" "}
        <Highlight>dominar conceitos difíceis</Highlight> com projetos reais.
        Hoje, me sinto muito mais segura para encarar o mercado!
      </p>
    ),
  },
  {
    id: 1,
    name: "Lucas Ferreira",
    designation: "Estudante de Ciência da Computação",
    content: (
      <p>
        Os desafios práticos me fizeram evoluir rápido.{" "}
        <Highlight>Vale cada minuto investido</Highlight> no aprendizado aqui.
      </p>
    ),
  },
  {
    id: 2,
    name: "Mariana Lima",
    designation: "Programadora Júnior",
    content: (
      <p>
        Graças à metodologia da plataforma, consegui meu primeiro emprego como{" "}
        <Highlight>desenvolvedora júnior</Highlight>. Recomendo para todos que
        querem entrar na área!
      </p>
    ),
  },
];

export const Testimonials = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <h2 className="text-xl text-muted-foreground text-start">Depoimentos</h2>

      <div className="w-full flex justify-center">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
};
