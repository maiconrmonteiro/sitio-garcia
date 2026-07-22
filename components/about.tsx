import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal x={-40} y={0} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <Image
                src="/images/venue.jpg"
                alt="Área coberta do Sítio Garcia, preparada para receber convidados"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </Reveal>

          {/* Content */}
          <Reveal delay={0.15}>
            <span className="text-eyebrow">Sobre o Espaço</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Um refúgio de natureza e celebração
            </h2>
            <div className="font-[var(--font-lato)] text-muted-foreground space-y-4 text-base lg:text-lg leading-relaxed">
              <p>
                O cenário perfeito para transformar seu evento — ou apenas um final de semana em
                família — em uma lembrança inesquecível. O Sítio Garcia reúne infraestrutura
                completa para casamentos, aniversários e confraternizações empresariais, sem
                abrir mão do conforto e do contato direto com a natureza.
              </p>
              <p>
                Contamos com uma ampla área coberta para festas, churrasqueira equipada e
                cozinha de apoio. Para o lazer, desfrute de nossa piscina refrescante, campo de
                futebol gramado e quadra de vôlei para diversão com amigos e família.
              </p>
              <p>
                Localizado em uma área tranquila e de fácil acesso, unimos o silêncio do campo ao
                conforto de um espaço amplo, com estacionamento privativo para todos os
                convidados.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
