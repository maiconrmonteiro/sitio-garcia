import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/venue.jpg"
                alt="Área do Sítio Garcia"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="font-[var(--font-lato)] text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre o Espaço
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Um refúgio de natureza e celebração
            </h2>
            <div className="font-[var(--font-lato)] text-muted-foreground space-y-4 text-base lg:text-lg leading-relaxed">
              <p>
                O cenário perfeito para o seu evento ou final de semana! Nosso sítio oferece
                infraestrutura completa para confraternizações empresariais.
              </p>
              <p>
                Contamos com uma ampla área coberta para festas, churrasqueira equipada e
                cozinha de apoio. Para o lazer, desfrute de nossa piscina refrescante, campo de
                futebol gramado e quadra de vôlei para diversão com amigos e família.
              </p>
              <p>
                Localizado em uma área tranquila e de fácil acesso, unimos o contato com a
                natureza ao conforto de um espaço amplo com estacionamento privativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
