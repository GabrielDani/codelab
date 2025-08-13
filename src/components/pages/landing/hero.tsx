import TextType from "@/components/reactbits/TextType";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-foreground">
      <TextType
        text={[
          "Domine a programação com prática e propósito",
          "Transforme conhecimento em projetos reais e impactantes",
          "Aprenda a programar criando soluções que fazem a diferença",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-6xl font-bold text-center min-h-[390px] sm:min-h-[240px] md:min-h-[120px]"
      />
      <h2 className="text-muted-foreground text-lg text-center">
        Aprenda do zero até o nível profissional com projetos reais, mentoria e
        suporte. Comece hoje sua jornada como desenvolvedor.
      </h2>
      <Link href="/dashboard" passHref>
        <Button size="lg">
          Veja todos os cursos <ChevronRight />
        </Button>
      </Link>
    </section>
  );
}
